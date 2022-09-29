
import { createRouter, createWebHashHistory } from 'vue-router'
import Home from '@/views/Home.vue'
import Habilidades from '@/views/Habilidades.vue'

const routes = [
    {
        path: '/home',
        component: Home
    },
    {
        path: '/habilidades',
        component: Habilidades
    }
]

const router = createRouter({
    history: createWebHashHistory(),
    routes
})

export default router