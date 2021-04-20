import Vue from 'vue'
import VueRouter from 'vue-router'
import Login from '../views/Login.vue'
import AdminerHome from '@/views/Adminer/Home.vue'
import AdminerAccess from '@/views/Adminer/AccessManagement.vue'
import AdminerSystem from '@/views/Adminer/SystemSetting.vue'
import AdminerVoting from '@/views/Adminer/VotingInfo.vue'
import AdminerHistory from '@/views/Adminer/VotingHistory.vue'
import UserHome from '@/views/User/Home.vue'
import UserSetting from '@/views/User/UserSetting.vue'
import UserCreateVoting from '@/views/User/CreateVoting.vue'
import UserVotingInfo from '@/views/User/VotingInfo.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'login',
    component: Login
  },
  {
    path: '/Adminer/Home',
    name: 'AdminerHome',
    component: AdminerHome
  },
  {
    path: '/Adminer/AccessManagement',
    name: 'AdminerAccess',
    component: AdminerAccess
  },
  {
    path: '/Adminer/VotingInfo',
    name: 'AdminerVoting',
    component: AdminerVoting
  },
  {
    path: '/Adminer/VotingHistory',
    name: 'AdminerHistory',
    component: AdminerHistory
  },
  {
    path: '/Adminer/SystemSetting',
    name: 'AdminerSystem',
    component: AdminerSystem
  },
  {
    path: '/User/Home',
    name: 'AdminerSystem',
    component: UserHome
  },
  {
    path: '/User/UserSetting',
    name: 'UserSetting',
    component: UserSetting
  },
  {
    path: '/User/CreateVoting',
    name: 'UserCreateVoting',
    component: UserCreateVoting
  },
  {
    path: '/User/VotingInfo',
    name: 'UserVotingInfo',
    component: UserVotingInfo
  },
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
