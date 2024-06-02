import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import NewDropView from '@/views/NewDropView.vue'
import MenView from '@/views/MenView.vue'
import WomenView from '@/views/WomenView.vue'
const router = createRouter({
    history: createWebHistory(
        import.meta.env.BASE_URL),
    routes: [{
            path: '/',
            name: 'home',
            component: HomeView
        },
        {
            path: '/NewDrop',
            name: 'NewDrop',

            component: NewDropView
        }, {
            path: '/Men',
            name: 'Men',
            component: MenView
        },
        {
            path: '/Women',
            name: 'Women',
            component: WomenView
        }
    ]
})

export default router