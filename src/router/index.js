import Vue from 'vue'
import VueRouter from 'vue-router'
import Login from '../views/Login.vue'
import Register from '../views/Register.vue'
import AdminerHome from '@/views/Adminer/Home.vue'
import AdminerAccess from '@/views/Adminer/AccessManagement.vue'
import AdminerSystem from '@/views/Adminer/SystemSetting.vue'
import AdminerVoting from '@/views/Adminer/VotingInfo.vue'
import AdminUserInfo from '@/views/Adminer/UserInfo.vue'
import UserHome from '@/views/User/Home.vue'
import UserSetting from '@/views/User/UserSetting.vue'
import UserCreateVoting from '@/views/User/CreateVoting.vue'
import UserVotingInfo from '@/views/User/VotingInfo.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    redirect: '/Login'
  },
  {
    path: '/Login',
    name: 'Login',
    component: Login
  },
  {
    path: '/Register',
    name: 'Register',
    component: Register
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
    path: '/Adminer/UserInfo',
    name: 'AdminUserInfo',
    component: AdminUserInfo
  },
  {
    path: '/Adminer/SystemSetting',
    name: 'AdminerSystem',
    component: AdminerSystem
  },
  {
    path: '/User/Home',
    name: 'UserHome',
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

router.beforeEach(function(to, from, next){
  if(!sessionStorage.getItem('username')){
    if(to.path == '/Register'){
      next()
    }else{
      if(to.path !== '/Login'){
        next('/Login')
      }
    }
  };
  next();
})

export default router
