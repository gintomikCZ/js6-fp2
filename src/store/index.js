import { createStore } from 'vuex'
import db from '../utilities/db.js'

const store = createStore({
  state: {
    testStore: 'vuex frčí',
    projects: [],
    projectToEdit: {}
  },
  mutations: {
    setProjects(state, data) {
      state.projects = data
    },
    setProjectToEdit(state, record) {
      state.projectToEdit = record
    }
  },
  actions: {
    fetchProjects(context) {
      return db.get('js6projects')
        .then(data => {
          context.commit('setProjects', data)
        })
    },
    addProject(context, body) {
      return db.post('js6projects', body)
        .then(() => {
          context.dispatch('fetchProjects')
        })
    },
    editProject (context, body) {
      return db.put('js6projects', body)
        .then(() => {
          context.dispatch('fetchProjects')
        })
    },
    fetchProjectToEdit(context, id) {
      return db.get('js6projects/' + id)
      .then((record) => {
        context.commit('setProjectToEdit', record)
      })
    }
  }
})

export default store