<template>
  <div class="task-edit-form">
    <div class="modal-content">
      <h2>Editar tarefa!</h2>
      <form @submit.prevent="editTask">
        <label for="title">Title:</label>
        <input v-model="editedTitle" type="text" id="title" required />

        <label for="description">Description:</label>
        <input v-model="editedDescription" id="description" required />

        <div class="button-container">
          <button type="submit">Editar Task</button>
          <button type="button" @click="cancelEdit">Cancel</button>
        </div>
      </form>
    </div>
  </div>
</template>

<script>
import { mapActions } from 'vuex'

export default {
  props: {
    initialTitle: {
      type: String,
      required: true
    },
    initialDescription: {
      type: String,
      required: true
    },
    postId: {
      type: Number,
      required: true
    }
  },
  data() {
    return {
      editedTitle: '',
      editedDescription: ''
    }
  },
  mounted() {
    // Inicializa as propriedades com os valores iniciais
    this.editedTitle = this.initialTitle
    this.editedDescription = this.initialDescription
  },
  methods: {
    ...mapActions('crud', ['updatePost']),
    editTask() {
      // Verifica se há dados para editar
      if (!this.postId || !this.editedTitle || !this.editedDescription) {
        console.error('Dados de edição ausentes.')
        return
      }

      // Chame a ação Vuex updatePost com as informações da tarefa editada
      this.updatePost({
        id: this.postId,
        title: this.editedTitle,
        description: this.editedDescription
      })
        .then(() => {
          // Sai do modo de edição
          this.$emit('cancelEdit')
        })
        .catch((error) => {
          console.error('Erro ao atualizar a tarefa:', error)
          // Implemente um tratamento de erro adicional, se necessário
        })
    },
    cancelEdit() {
      // Cancela as edições e sai do modo de edição
      this.$emit('cancelEdit')
    }
  }
}
</script>

<style lang="scss">
@import './styles.scss';
</style>
