<template>
  <div class="log-view">
    <div class="log-header">
      log pubsub
    </div>
    <div class="log-body" ref="stackLogmessage">
      <div v-for="(data, key) in logPubSub" :key="key">
        <span>{{data}}</span>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Log',
  data () {
    return {
      logPubSub: []
    }
  },
  created () {
    this.$pubsub.subscribe('chat.message', this.pushLogMessage)
    this.$pubsub.subscribe('chat.notification', this.pushLogMessage)
  },
  methods: {
    pushLogMessage (channel, message) {
      this.logPubSub.push({channel, message})
      this.$nextTick(() => {
        this.$refs.stackLogmessage.scrollTop = this.$refs.stackLogmessage.scrollHeight
      })
    }
  }
}
</script>
