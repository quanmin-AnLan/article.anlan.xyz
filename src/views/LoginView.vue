<template>
  <section>
    <div>用户名</div>
    <el-input v-model="user"></el-input>
    <div>密码</div>
    <el-input v-model="password" type="password"></el-input>
    <el-button @click="submit()">登录</el-button>
  </section>
</template>

<script>
import apis from '@/api'
export default {
  name: 'LoginView',
  data () {
    return {
      user: '',
      password: ''
    }
  },
  methods: {
    submit () {
      if (!this.user) {
        this.$message.error('请输入用户名')
      }
      if (!this.password) {
        this.$message.error('请输入密码')
      }
      const params = {
        user: this.user,
        password: this.password
      }
      apis.login(params).then(res => {
        console.log(res)
      })
    }
  }
}
</script>
