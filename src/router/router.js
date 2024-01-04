// router.js
import { createRouter, createWebHistory } from 'vue-router'
import ViewInicio from '../views/ViewInicio.vue'
import ViewBlog from '../views/ViewBlog.vue'
import ViewContacto from '../views/ViewContacto.vue'
import ViewQuienesSomos from '../views/ViewQuienesSomos.vue'
import ViewServicios from '../views/ViewServicios.vue'


const routes = [
  { path: '/', component:ViewInicio },
  { path: '/blog', component:ViewBlog },
  { path: '/contactanos', name: 'ViewContacto', component: ViewContacto },
  { path: '/quienessomos', component:ViewQuienesSomos },
  { path: '/servicios', component:ViewServicios },
]

const router = createRouter({
  history: createWebHistory(),
  routes,
})

export default router
