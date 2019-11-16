<template>
  <div id="app">
    <Quiz class="mb-auto mt-5"></Quiz>
    <div>
      <p class="text-light small">
        如有疑问/提议/抓Bug请发送邮件至：mxhcpstories@yahoo.com<br>
        欢迎合作，一起开发！<br>
        <a href="https://github.com/yingH95" style="color: lightyellow;text-decoration: underline">
          @github.com/yingH95
        </a>
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
