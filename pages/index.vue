<template>
  <LoginPage />
</template>

<script>
import LoginPage from './LoginPage.vue'

export default {
  name: 'IndexPage',
  mounted() {
    this.checkTokenAndRedirect()
  },
  methods: {
    checkTokenAndRedirect() {
      let token = localStorage.getItem('tokenAuth')
      if (token) {
        this.$router.push('/')
      }
    }
  },
  components: { LoginPage }
}
</script>
