<template>
  <div class="widget-view">
    <div class="widget-header">
      widget
    </div>
    <div class="widget-body">
      ...
    </div>
    <div class="widget-footer">
      <button class="btn btn-primary" @click="sendNoti">send noti</button>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Widget',
  data () {
    return {
      meesage: []
    }
  },
  methods: {
    sendNoti () {
      const payload = {type: 'noti', value: 'Notification Success !'}
      this.$pubsub.publish('Notification', payload)
    }
  }
}
</script>

<style scoped>
</style>
