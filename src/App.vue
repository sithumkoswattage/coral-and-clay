<template>
  <div id="app">
    <h1>{{ title }}</h1>
    <p>{{ message }}</p>
  </div>
</template>

<script>
export default {
  name: 'App',
  data() {
    return {
      title: 'Welcome to Coral and Clay',
      message: 'This is a basic test file'
    }
  }
}
</script>

<style scoped>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
