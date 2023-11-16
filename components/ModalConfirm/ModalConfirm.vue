<template>
  <div v-if="showModal" class="modal">
    <div class="modal-content">
      <h1>Deseja remover essa tarefa?</h1>
      <div class="container-btns">
        <button class="remove-btn" @click="confirm">Confirmar</button>
        <button class="cancel-btn" @click="cancel">Cancelar</button>
      </div>
    </div>
  </div>
</template>

<script lang="js">
export default {
  mounted() {

  },
  props: {
    showModal: {
      type: Boolean,
      required: true
    },
    onConfirm: {
      type: Function,
      required: true
    },
    onCancel: {
      type: Function,
      required: true
    }
  },
  methods: {
    confirm() {
      this.onConfirm();
    },
    cancel() {
      this.onCancel();
    }
  }
}
</script>

<style scoped lang="scss">
@import './styles.scss';
</style>
