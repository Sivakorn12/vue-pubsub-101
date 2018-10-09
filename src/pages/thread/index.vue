<template>
  <div id="thread">
    <div>
      thread
    </div>
  </div>
</template>

<script>
export default {
  name: 'Thread',
  data () {
    return {
      levelLog: []
    }
  },
  created() {
    this.pushMessagesSubscriber = this.$pubsub.subscribe(
      'MESSAGE',
      this.topLevelMessage,
    )
  },
  methods: {
    topLevelMessage(channel, payload) {
      this.levelLog.push({
        channel,
        payload,
      })
    },
  }
}
</script>

<style scoped>
</style>
