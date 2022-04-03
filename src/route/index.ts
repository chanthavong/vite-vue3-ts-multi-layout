import { createWebHistory, createRouter, RouteRecordRaw } from "vue-router";

import main from '../layouts/main.vue';
import blank from '../layouts/blank.vue';

const routes: Array<RouteRecordRaw> = [
    {
        path: '/',
        name: 'home',
        component: () => import('../views/Home.vue'),
        meta:{
            layout: main
        }
    },
    {
        path: '/add',
        name: 'add',
        component: () => import('../views/add.vue'),
        meta:{
            layout: blank
        }
    }
]

const router = createRouter({
    history: createWebHistory(),
    routes
})

export default router