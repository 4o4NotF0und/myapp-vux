<template>
  <div class="login">
    <div v-if="isLogin">您好，您已登录</div>
    <div v-if="!isLogin">您还没有登录，请 <span style="color: red" @click="login()">登录</span>!</div>
  </div>
</template>

<script>
  import {mapState} from 'vuex'
  export default {
    name: 'Login',
    computed: { // 你store/login中定义的初始状态是什么，key值就是什么，中间{}中的store/index.js中的modules中的key值
      ...mapState({
        isLogin: ({login}) => login.isLogin
      })
    },
    mounted () {
      console.log(this)
    },
    methods: {
      login () {
        this.$store.dispatch('getLoginState')
      }
    }
  }
</script>

<style scoped>

</style>
