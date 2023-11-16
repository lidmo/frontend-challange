// store/posts.js
import axios from 'axios'

axios.defaults.headers.common['Authorization'] = `Bearer ${localStorage.getItem(
  'tokenAuth'
)}`

export default {
  namespaced: true,
  state: {
    posts: [],
    showModalDelete: null
  },
  mutations: {
    setPosts(state, posts) {
      state.posts = posts
    },
    addPost(state, post) {
      state.posts.push(post)
    },
    updatePost(state, updatedPost) {
      const index = state.posts.findIndex((post) => post.id === updatedPost.id)
      if (index !== -1) {
        state.posts.splice(index, 1, updatedPost)
      }
    },
    deletePost(state, postId) {
      state.posts = state.posts.filter((post) => post.id !== postId)
    }
  },
  actions: {
    async fetchPosts({ commit }) {
      try {
        const response = await axios.get(
          'https://challenge.lidmo.com.br/api/tasks'
        )
        const data = response.data.data
        commit('setPosts', data)
      } catch (error) {
        console.error('Erro ao buscar as tarefas:', error)
      }
    },
    async createPost({ commit, dispatch }, { title, description }) {
      try {
        await axios.post('https://challenge.lidmo.com.br/api/tasks', {
          title,
          description
        })
        // Após criar a postagem, busca novamente as postagens
        dispatch('fetchPosts')
      } catch (error) {
        console.error('Erro ao criar a tarefa:', error)
      }
    },
    async updatePost({ commit, dispatch }, { id, title, description }) {
      try {
        await axios.put(`https://challenge.lidmo.com.br/api/tasks/${id}`, {
          title,
          description
        })
        // Após atualizar a postagem, busca novamente as postagens
        dispatch('fetchPosts')
      } catch (error) {
        console.error('Erro ao atualizar a tarefa:', error)
      }
    },
    async deletePost({ commit, dispatch }, postId) {
      try {
        await axios.delete(`https://challenge.lidmo.com.br/api/tasks/${postId}`)
        // Após excluir a postagem, busca novamente as postagens
        dispatch('fetchPosts')
      } catch (error) {
        console.error('Erro ao deletar a tarefa:', error)
      }
    }
  }
}
