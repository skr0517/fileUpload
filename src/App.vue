<template>
  <div id="app">
    <fileUplaodBase></fileUplaodBase>
  </div>
</template>

<script>
import fileUplaodBase from "./components/FileUploadBase";
export default {
  name: "App",
  components: {
    fileUplaodBase
  }
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
