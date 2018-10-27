<template>
  <div class="chat-view">
    <div class="chat-header">
      Chat
    </div>
    <div class="chat-body" ref="conversation">
      <div v-for="(data, key) in message" :key="key">
        <div class="message-right" v-if="data.type === 'user'">
          <img src="https://gameaddict.in.th/wp-content/uploads/2018/04/spider_man_ps4_pro_ps_blog-2-1280x720.jpg" alt="">
          <b-tag class="tag-message" rounded size="is-medium" >{{data.value}}</b-tag>
        </div>
        <div class="message-right" v-else-if="data.type === 'noti'">
          <b-tag type="is-success" class="tag-message" rounded size="is-medium" >{{data.value}}</b-tag>
        </div>
      </div>
    </div>
    <div class="chat-footer">
      <input class="input-box" placeholder="Say something ..." type="text" v-model="inputMessage" @keyup.enter="sendMessage">
    </div>
  </div>
</template>

<script>
export default {
  name: 'Chat',
  data () {
    return {
      inputMessage: '',
      message: []
    }
  },
  created () {
    this.$pubsub.subscribe('chat.notification', this.pushLogNoti)
  },
  methods: {
    sendMessage () {
      if (this.inputMessage) {
        const data = { type: 'user', value: this.inputMessage }
        this.message.push(data)
        this.inputMessage = ''
        this.$nextTick(() => {
          this.$refs.conversation.scrollTop = this.$refs.conversation.scrollHeight
        })
        this.$pubsub.publish('SendMessage', data)
      }
    },
    pushLogNoti (channel, message) {
      const data = message
      this.message.push(data)
      this.$nextTick(() => {
        this.$refs.conversation.scrollTop = this.$refs.conversation.scrollHeight
      })
    }
  }
}
</script>

<style scoped>
</style>
