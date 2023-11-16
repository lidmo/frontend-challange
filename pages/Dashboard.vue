<template>
  <div id="dashboard">
    <section class="section-banner">
      <div class="header-color" />
      <div class="nav-container">
        <img src="../assets/logo.png" alt="" />
        <div class="nav-links">
          <button @click="handleLogout">Logout</button>
        </div>
      </div>
      <div class="image-banner">
        <div class="section-dashboard">
          <p>LOREM IPSUM IS SIMPLE DUMMY TEXT</p>
          <h1>
            Olá, faça <br />
            esse desafio!
          </h1>
          <p>
            Lorem lpsum is simply dummy text of the printing and typesetting
            <br />
            industry. Lorem ipsum has been the industry's
          </p>
          <div class="btn-container">
            <button style="color: white; background-color: #eea822">
              CONTATO
            </button>
            <button style="color: #01182e; background-color: white">
              VEJA MAIS
            </button>
          </div>
        </div>
      </div>
    </section>
    <section class="about-container">
      <div class="cards-about">
        <div class="card-svg-text" style="color: #01182e">
          <img src="../assets/icons/team.svg" alt="" />
          <h3>Lorem Icon</h3>
          <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit.</p>
        </div>
        <div class="card-about-image">
          <img src="../assets/img-2.jpg" alt="" />
        </div>
      </div>
      <div class="cards-about" style="margin-top: 2%">
        <div class="card-about-image">
          <img src="../assets/img-2.jpg" alt="" />
        </div>
        <div style="background: #01182e; color: white" class="card-svg-text">
          <img src="../assets/icons/calendar(1).svg" alt="" />
          <h3>Lorem Icon</h3>
          <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit.</p>
        </div>
      </div>
      <div class="about-texts">
        <h3>SOBRE NÓS</h3>
        <h1>Lorem ipsum <br />dolor sit amet</h1>
        <p>
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Commodi
          eaque, expedita sint molestias quae facere cupiditate, inventore
          maiores placeat consequuntur dolor quibusdam repellendus consectetur
        </p>
        <button>ADQUIRA AGORA</button>
      </div>
    </section>
    <section>
      <div class="section-portfolio">
        <p>PORTFOLIO</p>
        <h1>Lorem ipsim dolor</h1>
        <div class="carousel">
          <div
            class="slides"
            :style="{ transform: `translateX(${currentSlide * -100}%)` }"
          >
            <div v-for="(slide, index) in images" :key="index" class="slide">
              <img :src="slide.src" :alt="slide.alt" />
              <div class="info-slide">
                <div>
                  <div>
                    <h2>lorem ipsum dolor</h2>
                    <p>
                      Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    </p>
                  </div>
                  <h5>{{ slide.price }}</h5>
                </div>
              </div>
            </div>
          </div>
          <button
            class="button-carousel-prev"
            @click="prevSlide"
            aria-label="Slide anterior"
          >
            ←
          </button>
          <button
            class="button-carousel-next"
            @click="nextSlide"
            aria-label="Próximo slide"
          >
            →
          </button>
        </div>
      </div>
    </section>
    <section class="section-crud">
      <div class="header-crud">
        <p>IMPLEMENTE UMA LISTA DE TAREFAS</p>
        <h1>List of tasks</h1>
      </div>
      <div class="select-tasks-crud">
        <div class="select-type-tasks" style="visibility: hidden">
          <button>Todas as listas</button>
          <button>Editadas</button>
          <button>Para fazer</button>
          <button>Removidas</button>
        </div>

        <div>
          <button class="add-tasks-btn" @click="openFormModal">
            Adicionar task
          </button>
        </div>
      </div>

      <div class="container-cards-tasks">
        <CardTask
          v-for="(post, index) in this.$store.state.crud.posts"
          :key="post.id"
          :post="post"
          :onDeletePost="handleDeletePost"
          @openModal="openModalHandler"
          @editTask="editTaskHandler"
        />
      </div>
      <ModalConfirm
        :showModal="showModal"
        :onConfirm="confirmDelete"
        :onCancel="cancelDelete"
      />

      <ModalForm
        :showModal="showModalForm"
        :onConfirm="editMode ? editTaskHandler : addTask"
        :onCancel="cancelForm"
      />

      <TaskEditForm
        v-if="editMode && postToEdit"
        :initialTitle="postToEdit.title"
        :initialDescription="postToEdit.description"
        @editTask="editTaskHandler"
        @cancelEdit="cancelEditHandler"
        :postId="postToEdit.id"
      />
    </section>

    <section class="section-email">
      <div class="texts-email">
        <p>ENTRE EM CONTATO AGORA</p>
        <h1>Lorem ipsum dolor sit amet consectetur</h1>
        <b
          >Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestias
          vel quas voluptas enim dignissimos quis magnam illo? Unde quisquam qui
          iste provident libero, facilis porro laborum voluptate facere officiis
          consequatur.</b
        >
        <button>WHATSAPP</button>
      </div>

      <div class="form-email">
        <h1>Email Contact</h1>

        <input type="email" placeholder="Seu Nome" required />
        <input type="text" placeholder="Seu Email" required />
        <button>ENVIAR AGORA</button>
      </div>
    </section>
    <footer>
      <div class="about-footer">
        <img src="../assets/logo.png" alt="" />
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Error quia
          quo sit pariatur itaque sapiente quis consequuntur consectetur, quas
          doloribus aperiam esse tempore et inventore, expedita voluptatem
          voluptate ipsum cum?
        </p>
      </div>
      <div class="links-footer">
        <h4>Links úteis</h4>
        <p>+ Home</p>
        <p>+ About</p>
        <p>+ Dashboard</p>
        <p>+ Contact</p>
      </div>
      <div class="contact-footer">
        <h4>Contact</h4>

        <div class="type-contact">
          <div>
            <img src="../assets/icons/phone-call.svg" alt="" />
          </div>
          <div>
            <h5>Phone Number</h5>
            <p>+55 86 0000-0000</p>
          </div>
        </div>

        <div class="type-contact">
          <div>
            <img src="../assets/icons/mail.svg" alt="" />
          </div>
          <div>
            <h5>Email</h5>
            <p>example@email.com</p>
          </div>
        </div>

        <div class="type-contact">
          <div>
            <img src="../assets/icons/maps-and-flags.svg" alt="" />
          </div>
          <div>
            <h5>Location</h5>
            <p>location, 123, center of Brasil</p>
          </div>
        </div>
      </div>
    </footer>
  </div>
</template>

<script>
import ModalForm from '../components/ModalForm/ModalForm.vue'
import ModalConfirm from '../components/ModalConfirm/ModalConfirm.vue'
import CardTask from '../components/CardComponent/CardTask.vue'
import { mapActions, mapState } from 'vuex'

export default {
  data() {
    return {
      showModal: false,
      showModalForm: false,
      postToDelete: null,
      postToEdit: null,
      editMode: false,
      currentSlide: 0,
      images: [
        {
          src: '../assets/carrousel/img-3.webp',
          price: 'R$445',
          alt: 'Descrição da imagem 1'
        },
        {
          src: '../assets/carrousel/img-4.jpg',
          price: 'R$745',
          alt: 'Descrição da imagem 2'
        },
        {
          src: '../assets/carrousel/img-5.jpg',
          price: 'R$145',
          alt: 'Descrição da imagem 3'
        }
      ]
    }
  },
  mounted() {
    this.checkTokenAndRedirect()
    this.fetchPosts()
  },
  methods: {
    openAddModal() {
      this.editMode = false // Certifique-se de que editMode seja falso para adição
      this.postToEdit = null // Limpe a tarefa em edição
      this.showModalForm = true // Abra o modal de adição
    },
    openEditModal(post) {
      this.editMode = true
      this.postToEdit = { ...post }
      this.showModalForm = true
    },
    openEditModal(post) {
      this.editMode = true
      this.postToEdit = { ...post }
      this.showModalForm = true
    },
    cancelForm() {
      this.editMode = false
      this.showModalForm = false
    },
    addTask(task) {
      // Lógica para adicionar uma nova tarefa
      // Feche o modal após adicionar a tarefa
      this.showModalForm = false
    },
    cancelForm() {
      // Feche o modal sem adicionar a tarefa
      this.showModalForm = false
    },
    openModalHandler(action, post) {
      if (action === 'delete') {
        this.postToDelete = post
        this.showModal = true
      } else if (action === 'edit') {
        this.editMode = true
        this.postToEdit = post
        this.showModalForm = true
      }
    },
    openFormModal() {
      this.showModalForm = true
    },
    confirmDelete() {
      if (this.postToDelete) {
        // Chame sua ação deletePost aqui
        this.deletePost(this.postToDelete.id)
        this.postToDelete = null
        this.showModal = false
      }
    },
    cancelDelete() {
      this.postToDelete = null
      this.showModal = false
    },
    nextSlide() {
      this.currentSlide = (this.currentSlide + 1) % this.images.length
    },
    prevSlide() {
      this.currentSlide =
        (this.currentSlide - 1 + this.images.length) % this.images.length
    },
    ...mapActions('auth', ['logout']),
    ...mapActions('crud', ['fetchPosts', 'deletePost', 'updatePost']),
    ...mapState('crud', ['posts']),

    handleDeletePost(postId) {
      try {
        // Chame a ação deletePost do Vuex passando o postId
        this.deletePost(postId)
      } catch (error) {
        console.error('Erro ao deletar o post:', error)
      }
    },
    editTaskHandler(editedTask) {
      try {
        // Chame a ação updatePost do Vuex passando o objeto com as propriedades da tarefa editada
        this.updatePost({
          id: editedTask.id,
          title: editedTask.title,
          description: editedTask.description
        })
        // Sair do modo de edição
        this.editMode = false
        // Fechar o modal
        this.showModalForm = false
      } catch (error) {
        console.error('Erro ao editar a tarefa:', error)
      }
    },
    cancelEditHandler() {
      // Cancelar as edições e sair do modo de edição
      this.editMode = false
      // Fechar o modal
      this.showModalForm = false
    },

    handleLogout() {
      this.logout()
        .then(() => {
          this.$router.push('/')
        })
        .catch((error) => {
          console.error('Erro durante o logout:', error)
        })
    },
    checkTokenAndRedirect() {
      let token = localStorage.getItem('tokenAuth')
      if (!token) {
        this.$router.push('/')
      }
    }
  }
}
</script>
