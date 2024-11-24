import { createRouter, createWebHashHistory } from 'vue-router'
import { Characters, WeaponClasses, Items, Weapons } from '@/pages'

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
      name: 'WeaponClasses',
      component: WeaponClasses,
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
