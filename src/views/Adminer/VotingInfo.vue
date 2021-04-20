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

    <div id="adminerVoting">
      <v-card width="1400" class="mx-auto" elevation="1">
        <v-card-title>
          <v-spacer></v-spacer>
          <v-text-field
            v-model="search"
            append-icon="mdi-magnify"
            label="Search"
            single-line
            hide-details
          ></v-text-field>
          <v-spacer></v-spacer>
        </v-card-title>

        <v-data-table
          :headers="tableHeaders"
          :items="votingItems"
          :search="search"
          :item-key="num"
          :sort-by="startTime"
        ></v-data-table>
      </v-card>
    </div>

    <footerbar></footerbar>

  </div>
</template>

<script>
import headerbar from '../../components/headerbar.vue'
import footerbar from '../../components/footerbar.vue'

export default {
  components: { footerbar, headerbar},
  name: 'AdminerVoting',

  data: () => ({
    search: '',
    tableHeaders: [
      {
        text: '事件编号',
        align: 'start',
        filterable: false,
        value: 'num',
      },
      { text: '主题', value: 'theme' },
      { text: '创建者', value: 'author' },
      { text: '信息简介', value: 'info' },
      { text: '啊啊啊啊', value: 'other' },
      { text: '创建时间', value: 'startTime' },
    ],
    votingItems: [
      {
        num: 'Frozen Yogurt',
        theme: 159,
        author: 6.0,
        info: 24,
        other: 4.0,
        startTime: '1',
      },
      {
        num: 'Ice cream sandwich',
        theme: 237,
        author: 9.0,
        info: 37,
        other: 4.3,
        startTime: '1',
      },
      {
        num: 'Eclair',
        theme: 262,
        author: 16.0,
        info: 23,
        other: 6.0,
        startTime: '7',
      },
      {
        num: 'Cupcake',
        theme: 305,
        author: 3.7,
        info: 67,
        other: 4.3,
        startTime: '8',
      },
      {
        num: 'Gingerbread',
        theme: 356,
        author: 16.0,
        info: 49,
        other: 3.9,
        startTime: '16',
      },
      {
        num: 'Jelly bean',
        theme: 375,
        author: 0.0,
        info: 94,
        other: 0.0,
        startTime: '3',
      },
      {
        num: 'Lollipop',
        theme: 392,
        author: 0.2,
        info: 98,
        other: 0,
        startTime: '2%',
      },
      {
        num: 'Honeycomb',
        theme: 408,
        author: 3.2,
        info: 87,
        other: 6.5,
        startTime: '45%',
      },
      {
        num: 'Donut',
        theme: 452,
        author: 25.0,
        info: 51,
        other: 4.9,
        startTime: '22%',
      },
      {
        num: 'KitKat',
        theme: 518,
        author: 26.0,
        info: 65,
        other: 7,
        startTime: '6%',
      },
    ],
    navItems: [
      {text:'首页', icon:'mdi-send', to:'/Adminer/Home'},
      {text:'投票信息', icon:'mdi-send', to:'/Adminer/VotingInfo'},
      {text:'历史投票', icon:'mdi-send', to:'/Adminer/VotingHistory'},
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