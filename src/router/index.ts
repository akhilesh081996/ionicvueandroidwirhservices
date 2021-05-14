import { createRouter, createWebHistory } from '@ionic/vue-router';
import { RouteRecordRaw } from 'vue-router';
import Tabs from '../views/Tabs.vue'
import Login from '@/views/login.vue';
import Home from '@/views/home.vue';
import AddUser from '@/views/add-user.vue';
import blogContainer from '@/views/component-interaction.vue';
import Landing from '@/views/landing.vue';
import AddBlog from '@/views/add-blog.vue';
import Bloglist from '@/views/Bloglist.vue';
import Accessservices from '@/views/servicefile.vue';

const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    redirect: '/landing'
  },
  {
    path: '/landing',
    name: 'landing',
    component: Landing
  },
  {
    path: '/login',
    name: 'login',
    component: Login
  },
  {
    path: '/home',
    name: 'home',
    component: Home
  },
  {
    path: '/add-user',
    name: 'add-user',
    component: AddUser
  },
  {
    path: '/blogs',
    name: 'blog-container',
    component: blogContainer
  },

  {
    path: '/blogs',
    name: 'blog-container',
    component: blogContainer
  },
  {
    path: '/add-blog',
    name: 'add-blog',
    component: AddBlog
  },
  {
    path: '/blog-list',
    name: 'blog-list',
    component: Bloglist
  },
  {
    path: '/accessservices',
    name: 'accessservices',
    component: Accessservices
  },
  
 {
    path: '/tabs/',
    component: Tabs,
    children: [
      {
        path: '',
        redirect: '/tabs/tab1'
      },
      {
        path: 'tab1',
        component: () => import('@/views/Tab1.vue')
      },
      {
        path: 'tab2',
        component: () => import('@/views/Tab2.vue')
      },
      {
        path: 'tab3',
        component: () => import('@/views/Tab3.vue')
      }
    ]
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
