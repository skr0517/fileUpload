<template>
  <div>
    <!-- 基础 -->
    <h3>fileUploadBase</h3>
    <input type="file" @change="handleChange" name="" id="" />
    <el-button @click="handleSubmit">提交</el-button>
  </div>
</template>
<script>
/**
 *  步骤：
 *  1. 在input的change事件中通过e.target.files获取文件
 *  2.
 *
 *
 */
// const SIZE = 10 * 1024 * 1024;

export default {
  data() {
    return {
      container: {
        file: null
      },
      data: []
    };
  },
  methods: {
    handleChange(e) {
      // 生成切片文件
      //   const [file] = e.target.files;
      //   if (!file) return;
      //   this.file = file;
      console.log(e);
      //   const file = e.target.files;
      //   console.log(file);
      //   if (!file) return;
      //   Object.assign(this.$data, this.$options.data());
      //   this.container.file = file;
    },
    // 生成切片文件
    createFileChunk() {
      //   const fileChunkList = [];
      //   let cur = 0;
      //   while (cur < file.size) {
      //     fileChunkList.push({ file: file.slice(cur, cur + size) });
      //     cur += size;
      //   }
      //   return fileChunkList;
    },
    // 上传切片
    async uploadChunks() {
      //   const requestList = this.data.map((chunk, hash) => {
      //     const formData = new FormData();
      //     formData.append("chunk", chunk);
      //     formData.append("hash", hash);
      //     formData.append("fileName", this.container.file.name);
      //     return { formData };
      //   });
      //   requestList.map(async ({ formData }) => {
      //     this.$axios.post("/upload", formData).then(res => console.log(res));
      //   });
      //   await Promise.all(requestList);
    },
    async handleSubmit() {
      //   if (!this.container.file) return;
      //   const fileChunkList = this.createFileChunk(this.container.file);
      //   console.log(fileChunkList);
      //   this.data = fileChunkList.map(({ file }, index) => ({
      //     chunk: file,
      //     hash: this.container.file.name + "-" + index // 文件名 + 数组下标
      //   }));
      //   await this.uploadChunks();
    }
  }
};
</script>
<style lang=""></style>
