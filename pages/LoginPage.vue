<template>
  <div class="container">
    <section class="left-section">
      <div class="form-container">
        <h1 class="title">
          <b>Olá,</b><br />
          faça login
        </h1>

        <h6>
          Lorem Ipsum is simply dummy text to the printing and typesetting
          industry.
        </h6>

        <!-- Adicione uma verificação se o usuário está logado antes de exibir o formulário -->
        <div v-if="!isUserLoggedIn">
          <form @submit.prevent="submitForm">
            <input
              id="email"
              v-model="email"
              type="email"
              placeholder="Seu Email"
              required
            />
            <!-- Adicione uma div para exibir a mensagem de erro -->
            <div v-if="!isEmailValid" class="error-message">
              Por favor, insira um e-mail válido.
            </div>

            <input
              id="password"
              v-model="password"
              type="password"
              placeholder="Sua Senha"
              required
            />
            <a href="#">Esqueci minha senha</a>
            <button type="submit">Login</button>
          </form>
        </div>
      </div>
    </section>
    <section class="right-section">
      <img src="../assets/bg-login.jpg" alt="" />
    </section>
  </div>
</template>

<script>
import { mapActions } from 'vuex'

export default {
  data() {
    return {
      email: 'test@example.com',
      password: 'teste',
      successMessage: '',
      isEmailValid: true
    }
  },
  computed: {
    isUserLoggedIn() {
      return this.$store.state.auth.token // Retorna true se o usuário estiver logado, senão false
    }
  },
  mounted() {
    if (this.isUserLoggedIn) {
      this.$router.push({ name: 'dashboard' })
    }
  },
  methods: {
    ...mapActions('auth', ['login']),

    submitForm() {
      // Validar se o campo de e-mail está preenchido antes de continuar
      if (!this.email) {
        console.error('O campo de e-mail é obrigatório.')
        this.isEmailValid = false // Define a propriedade isEmailValid como false
        return
      }

      // Validar o formato do e-mail
      if (!this.isValidEmailFormat(this.email)) {
        this.isEmailValid = false // Define a propriedade isEmailValid como false
        return
      }

      // Se chegou até aqui, o e-mail é válido
      this.isEmailValid = true // Define a propriedade isEmailValid como true

      const credentials = {
        email: this.email,
        password: this.password
      }
      this.login(credentials)
        .then(() => {
          this.successMessage = 'Usuário autenticado com sucesso!'
          setTimeout(() => {
            this.$router.push({ name: 'Dashboard' })
          }, 2000)
        })
        .catch((error) => {})
    },
    isValidEmailFormat(email) {
      // Função para validar o formato do e-mail (pode ser ajustada conforme necessário)
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
      return emailRegex.test(email)
    }
  }
}
</script>
