/**
 *  node 服务端
 * 
 */
const http = require('http');
const path = require('path');
const server = http.createServer();
// 使用 multiparty处理前端传过来的formData
const multiparty = require('multiparty')

const fse = require("fs-extra");

// 存储文件的目录
const UPLOAD_DIR = path.resolve(__dirname, '..', 'target');

server.on('request', async (req, res) => {
    // 解决跨域问题
    res.setHeader("Access-Control-Allow-Origin", "*");
    res.setHeader("Access-Control-Allow-Headers", "*");
    if (req.method == 'OPTIONS') {
        res.status = 200;
        res.end();
        return;
    }
    if (req.method == 'POST') {
        if (req.url == "/upload") {
            const multipart = new multiparty.Form()
            multipart.parse(req, async (err, fields, files) => {
                if (err) {
                    return;
                }
                console.log('fields', fields)
                console.log(files)
                const [chunk] = files.chunk;
                const [hash] = fields.hash;
                const [filename] = fields.filename;
                const chunkDir = path.resolve(UPLOAD_DIR, filename);

                // 切片目录不存在，创建切片目录

                if (!fse.existsSync(chunkDir)) {
                    +await fse.mkdirs(chunkDir);
                }

                // fs-extra 专用方法，类似 fs.rename 并且跨平台
                // fs-extra 的 rename 方法 windows 平台会有权限问题
                // https://github.com/meteor/meteor/issues/7852#issuecomment-255767835
                await fse.move(chunk.path, `${chunkDir}/${hash}`);
                res.end("received file chunk");
            });
        }
    }



})

server.listen('3000', () => {
    console.log('start server')
})