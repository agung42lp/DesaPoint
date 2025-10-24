import { createRouter, createWebHashHistory } from 'vue-router'
import Home from './Pages/Home.vue'
import Form from './Pages/Form.vue'

const routes = [
  { path: '/', name: 'Home', component: Home },
  { path: '/form', name: 'Form', component: Form },
  { path: '/pengaduan', redirect: '/form' },
]

const router = createRouter({
  history: createWebHashHistory('/DesaPoint/'),
  routes
})

export default router
