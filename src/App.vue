<template>
  <div id="app">
    <Quiz class="mb-auto mt-5"></Quiz>
    <div>
      <p class="text-light">
        如有疑问/提议/抓Bug请发送邮件至：mxhcpstories@yahoo.com
      </p>
    </div>
  </div>
</template>

<script>
import Quiz from './components/Quiz'

export default {
  name: 'app',
  components: {
    Quiz
  }
}
</script>

<style>
#app {
  display: flex;
  height: 100%;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  background-color: cornflowerblue;
}
html, body {
  height: 100%;
  margin: 0;
  padding: 0;
}
</style>
