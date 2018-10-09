<template>
  <div id="app">
    <div class="columns main-view">
      <div class="column">
        <level-log/>
      </div>
      <div class="column">
        <chat/>
      </div>
      <div class="column">
        <widget/>
      </div>
    </div>
  </div>
</template>

<script>
import levelLog from './pages/log/index'
import chat from './pages/chat/index'
import widget from './pages/widget/index'
export default {
  name: 'App',
  components: {
    chat,
    widget,
    levelLog
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
