import { createRouter, createWebHashHistory } from 'vue-router'

import RedPage from '../pages/RedPage.vue'
import BluePage from '../pages/BluePage.vue'
import GreenPage from '../pages/GreenPage.vue'
import PinkPage from '../pages/PinkPage.vue'

const routes = [
  { path: '/',      component: RedPage,   name: 'Red'   },
  { path: '/blue',  component: BluePage,  name: 'Blue'  },
  { path: '/green', component: GreenPage, name: 'Green' },
  { path: '/pink', component: PinkPage, name: 'Pink' },
]

export const router = createRouter({
  history: createWebHashHistory(),
  routes,
})