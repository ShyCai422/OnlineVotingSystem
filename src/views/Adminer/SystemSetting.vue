<template>
  <div class="about">
    
    <headerbar></headerbar>

    <v-navigation-drawer
      app
      color="blue-grey darken-1"
      clipped
    >
      <v-list>
        <v-list-item
          v-for="(item, index) in navItems"
          :key=index
          :to="item.to"
          color="white"
          style="font-size:22px;"
          class="navListItemColor"
        >
          <v-list-item-icon>
            <v-icon color="white">
              {{item.icon}}
            </v-icon>
          </v-list-item-icon>
          <v-list-item-content style="color:white">
            {{item.text}}
          </v-list-item-content>
        </v-list-item>
      </v-list>

    </v-navigation-drawer>

    <div id="adminerSystem">
        <h2>
<el-button type="primary">登录</el-button>
      This is AdminerSystem Homepage
        </h2>
    </div>

    <footerbar></footerbar>

  </div>
</template>

<script>
import headerbar from '../../components/headerbar.vue'
import footerbar from '../../components/footerbar.vue'

export default {
  components: { footerbar, headerbar},
  name: 'AdminerSystem',

  data: () => ({
    
    navItems: [
      {text:'首页', icon:'mdi-send', to:'/Adminer/Home'},
      {text:'投票信息', icon:'mdi-send', to:'/Adminer/VotingInfo'},
      {text:'用户信息', icon:'mdi-send', to:'/Adminer/UserInfo'},
      {text:'权限管理', icon:'mdi-send', to:'/Adminer/AccessManagement'},
      {text:'系统设置', icon:'mdi-send', to:'/Adminer/SystemSetting'},
    ],
  })
  
}
</script>

<style>
  .navListItemColor:hover {
    background: rgb(55, 55, 58);
  }
</style>