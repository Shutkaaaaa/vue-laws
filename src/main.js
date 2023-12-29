import './assets/main.css'

import { createApp } from 'vue'
import { createRouter, createWebHistory } from 'vue-router';
import { autoAnimatePlugin } from '@formkit/auto-animate/vue'

import App from './App.vue'

import Home from './pages/Home.vue'
import Authorization from './pages/Authorization.vue'
import CallBack from './pages/CallBack.vue'
import About from './pages/AboutUs.vue'
import Personality from './pages/Personality.vue'
import Easy from './pages/Easy.vue'
import Difficult from './pages/Difficult.vue'
import Registration from './pages/Registration.vue'



const app = createApp(App)

const routes = [
    {
        path: '/',
        name: 'Home',
        component: Home
    },
    {
        path: '/auth',
        name: 'Authorization',
        component: Authorization
    },
    {
        path: '/regis',
        name: 'Registration',
        component: Registration
    },
    {
        path: '/callback',
        name: 'CallBack',
        component: CallBack
    },
    {
        path: '/about',
        name: 'About',
        component: About
    },
    {
        path: '/pers',
        name: 'Personality',
        component: Personality
    },
    {
        path: '/easy',
        name: 'Easy',
        component: Easy
    },
    {
        path: '/diff',
        name: 'Difficult',
        component: Difficult
    }
]

const router = createRouter({
    history: createWebHistory(),
    routes
})


app.use(autoAnimatePlugin)
app.use(router)

app.mount('#app')