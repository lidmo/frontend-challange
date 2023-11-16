<template>
  <div class="card">
    <img src="../../assets/business-icon.png" alt="" />
    <h3>{{ post.title }}</h3>
    <p>{{ post.description }}</p>
    <div style="display: flex">
      <button class="delete-task-btn" @click="openModal('delete')">
        Remover Task
      </button>
      <button class="edit-task-btn" @click="openModal('edit')">
        Editar Task
      </button>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      editMode: false,
      editedTitle: '',
      editedDescription: ''
    }
  },
  methods: {
    openModal(action) {
      console.log(action)
      if (action === 'delete') {
        this.$emit('openModal', 'delete', this.post)
      } else if (action === 'edit') {
        this.editMode = true
        this.editedTitle = this.post.title
        this.editedDescription = this.post.description

        this.$emit('openModal', 'edit', this.post)
      }
    },
    editTask() {
      // Emitir um evento para indicar que a tarefa foi editada
      this.$emit('editTask', {
        ...this.post,
        title: this.editedTitle,
        description: this.editedDescription
      })

      // Sair do modo de edição
      this.editMode = false
    },

    cancelEdit() {
      // Cancelar as edições e sair do modo de edição
      this.editMode = false
    }
  },
  props: {
    post: {
      type: Object,
      required: true
    },
    onDeletePost: {
      type: Function,
      required: true
    }
  }
}
</script>

<style scoped lang="scss">
@import './styles.scss';
</style>
