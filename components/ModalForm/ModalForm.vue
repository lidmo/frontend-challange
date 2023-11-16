<template>
  <div v-if="showModal" class="modal">
    <div class="modal-content">
      <div class="header-modal">
        <div>
          <img src="../../assets/business-icon.png" alt="" />
        </div>
        <h2>{{ editMode ? 'Editar Tarefa' : 'Adicionar Nova Tarefa' }}</h2>
      </div>
      <form @submit.prevent="handleSubmit">
        <input
          v-model="title"
          type="text"
          id="title"
          placeholder="Titulo da Tarefa"
          required
        />

        <input
          v-model="description"
          id="description"
          placeholder="Descrição da Tarefa"
          required
        />

        <div class="button-container">
          <button type="submit">ADICIONAR TAREFA</button>
          <button class="cancel-btn" type="button" @click="cancel">
            CANCELAR
          </button>
        </div>
      </form>
    </div>
  </div>
</template>

<script scoped>
import { mapActions } from 'vuex'

export default {
  mounted() {},
  props: {
    showModal: {
      type: Boolean,
      required: true
    },
    onCancel: {
      type: Function,
      required: true
    },
    editMode: {
      type: Boolean,
      default: false
    }
  },
  data() {
    return {
      title: '',
      description: ''
    }
  },
  methods: {
    ...mapActions('crud', ['createPost']),
    handleSubmit() {
      // Chame a ação createPost da store passando title e description
      this.createPost({ title: this.title, description: this.description })
        .then(() => {
          // Limpe os campos após a criação bem-sucedida
          this.title = ''
          this.description = ''
          // Chame a função do pai para fechar o modal
          this.onCancel()
        })
        .catch((error) => {
          console.error('Erro ao criar a tarefa:', error)
          // Implemente um tratamento de erro adicional, se necessário
        })
    },
    cancel() {
      // Chame a função do pai para cancelar
      this.onCancel()
    }
  }
}
</script>

<style scoped lang="scss">
@import './styles.scss';
</style>
