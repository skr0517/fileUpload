async handleUpload(req, res) {
    const multipart = new multiparty.Form()
    multipart.parse(req, async (err, field, file) => {
        if (err) {
            console.log(err)
            return
        }
        const [chunk] = file.file
        const [filename] = field.filename
        const filePath = path.resolve(
            this.UPLOAD_DIR,
            `${fileHash}${extractExt(filename)}`
        )
        const chunkDir =
            path.resolve(this.UPLOAD_DIR, fileHash)
        // ⽂文件存在直接返回
        if (fse.existsSync(filePath)) {
            res.end("file exist")
            return
        }
        if (!fse.existsSync(chunkDir)) {
            await fse.mkdirs(chunkDir)
        }
        await fse.move(chunk.path,
            `${chunkDir}/${hash}`)
        res.end("received file chunk")
    })
}