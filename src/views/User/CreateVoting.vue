<template>
  <div class="userVoting">

    <headerbar></headerbar>

    <v-navigation-drawer
      app
      color="blue-grey darken-1"
      clipped
    >
      <v-list>
        <v-list-item
          v-for="(item) in navItems"
          :key=item
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

    <div id="userCreateVoting">
      <h2>

      This is UserCreateVoting Homepage
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
  name: 'UserCreateVoting',

  data: () => ({
    
    navItems: [
      {text:'首页', icon:'mdi-send', to:'/User/Home'},
      {text:'投票信息', icon:'mdi-send', to:'/User/VotingInfo'},
      {text:'创建投票', icon:'mdi-send', to:'/User/CreateVoting'},
      {text:'用户设置', icon:'mdi-send', to:'/User/UserSetting'},
    ],
  })
  
}
</script>

<style>
  .navListItemColor:hover {
    background: rgb(55, 55, 58);
  }

</style>