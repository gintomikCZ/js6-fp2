import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import ProjectsView from '../views/ProjectsView.vue'
import ProjectFormView from '../views/ProjectFormView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/projects',
      name: 'projects',
      component: ProjectsView
    },
    {
      path: '/project-form',
      name: 'projectForm',
      component: ProjectFormView
    },
    {
      path: '/project-form/:id',
      name: 'projectFormEdit',
      component: ProjectFormView
    }
  ]
})

export default router
