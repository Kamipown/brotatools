import { createRouter, createWebHashHistory } from 'vue-router'
import { Characters, Classes, Items, Weapons } from '@/pages'

const router = createRouter({
  history: createWebHashHistory(),
  routes: [
    {
      path: '/',
      name: 'Characters',
      component: Characters,
    },
    {
      path: '/classes',
      name: 'Classes',
      component: Classes,
    },
    {
      path: '/items',
      name: 'Items',
      component: Items,
    },
    {
      path: '/weapons',
      name: 'Weapons',
      component: Weapons,
    },
  ],
})

export default router
