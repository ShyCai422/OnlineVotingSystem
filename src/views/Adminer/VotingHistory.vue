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

    <div id="adminerHistory">
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
          item-key="num"
          :search="search"
          :expanded.sync="expanded"
          :single-expand="singleExpand"
          show-expand
        >
          <template v-slot:top>
            <!--  <v-toolbar flat> -->
              <!-- <v-spacer></v-spacer> -->
              <!-- <v-switch
                v-model="singleExpand"
                label="Single expand"
                class="mt-2"
              ></v-switch> -->
            <!-- </v-toolbar> --> 
          </template>
          <template v-slot:expanded-item="{ headers}">
            <td :colspan="headers.length">
              <v-text style="color:white">hell</v-text>
              <v-card
                width="800"
                height="300"
                class="mx-auto"
                background-color="red"
              >
                <v-row>
                  <v-col cols="5">
                      fjaoei
                  </v-col>

                  <v-col cols="7">
                da
                  </v-col>
                </v-row>
              </v-card>
            </td>
          </template>
        </v-data-table>
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
  name: 'AdminerHisory',

  data: () => ({
    expanded: [],
    singleExpand: false,
    search: '',
    tableHeaders: [
      {
        text: '投票事件编号',
        align: 'start',
        filterable: false,
        value: 'num',
      },
      { text: '主题', value: 'theme' },
      { text: '创建者', value: 'author' },
      { text: '投票人数', value: 'votingNum' },
      { text: '创建时间', value: 'startTime' },
      { text: '结束时间', value: 'endTime' },
      { text: '查看详情', value: 'result' },
    ],
    votingItems: [
      {
        num: '012023',
        theme: '方班班长选举',
        author: '小明',
        votingNum: 24,
        startTime: '2020-07-12 12:00:00',
        endTime: '2020-07-19 12:00:00',
        result: "click it",
      },
      {
        num: '012341',
        theme: '优秀团员选举',
        author: '小刚',
        votingNum: 37,
        startTime: '2020-07-12 12:00:00',
        endTime: '2020-07-12 12:00:00',
        result: "click it",
      },
      {
        num: '001234',
        theme: '各小组组长投票',
        author: '阿花',
        votingNum: 23,
        startTime: '2020-07-12 12:00:00',
        endTime: '2020-07-12 12:00:00',
        result: "click it",
      },
      {
        num: '011922',
        theme: '优秀团员选举',
        author: '小胡',
        votingNum: 67,
        startTime: '2020-07-12 12:00:00',
        endTime: '2020-07-12 12:00:00',
        result: "click it",
      },
      {
        num: '120021',
        theme: '优秀团员选举',
        author: '卫健',
        votingNum: 49,
        startTime: '2020-07-12 12:00:00',
        endTime: '2020-07-12 12:00:00',
        result: "click it",
      },
      {
        num: '002122',
        theme: '优秀团员选举',
        author: '娜可露露',
        votingNum: 94,
        startTime: '2020-07-12 12:00:00',
        endTime: '2020-07-12 12:00:00',
        result: "click it",
      },
      {
        num: '001233',
        theme: '优秀团员选举',
        author: '裴擒虎',
        votingNum: 98,
        startTime: '2020-07-12 12:00:00',
        endTime: '2020-07-12 12:00:00',
        result: "click it",
      },
      {
        num: '001234',
        theme: '优秀团员选举',
        author: '百里玄策',
        votingNum: 87,
        startTime: '2020-07-12 12:00:00',
        endTime: '2020-07-12 12:00:00',
        result: "click it",
      },
      {
        num: '012033',
        theme: '优秀团员选举',
        author: '露娜',
        votingNum: 51,
        startTime: '2020-07-12 12:00:00',
        endTime: '2020-07-12 12:00:00',
        result: "click it",
      },
      {
        num: '012319',
        theme: '优秀团员选举',
        author: '马可波罗',
        votingNum: 65,
        startTime: '2020-07-12 12:00:00',
        endTime: '2020-07-12 12:00:00',
        result: "click it",
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