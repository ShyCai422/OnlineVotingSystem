<template>
  <div class="about">
    
    <headerbar></headerbar>

    <v-navigation-drawer
      app
      color="blue-grey darken-1"
      clipped
      width="220"
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

    <div id="adminerHome">
      <div id="top" style="margin:4px; background-color:black" max-height="50">
        <el-row>
          <el-col :span="4.5">
            <v-card
              height="30"
              color="black"
              elevation="0"
              style="margin:10px 0 10px 10px;"
              >
              <el-row>
                <el-col :span="8">
                  <v-card
                    color="black"
                    elevation="0"
                    style="color:white; font-size:18px;
                           margin:1px 0 1px 6px;">节点：</v-card>
                </el-col>
                <el-col :span="16">
                  <input
                    type="text"
                    placeholder=" 选择节点"
                    style="width:120px; height:30px;
                            background-color:white; border-radius:3px">
                </el-col>
              </el-row>
            </v-card>
          </el-col>
          <el-col :span="4.5">
            <v-card
              height="30"
              color="black"
              elevation="0"
              style="margin:10px 17px;"
              >
              <el-row>
                <el-col :span="8">
                  <v-card
                    color="black"
                    elevation="0"
                    style="color:white; font-size:18px;
                           margin:1px 0 1px 6px;">地区：</v-card>
                </el-col>
                <el-col :span="16">
                  <input
                    type="text"
                    placeholder=" 选择地区"
                    style="width:120px; height:30px;
                            background-color:white; border-radius:3px">
                </el-col>
              </el-row>
            </v-card>
          </el-col>
          <el-col :span="5">
            <v-card
              height="30"
              color="black"
              elevation="0"
              style="margin:10px 0;"
              >
              <el-row>
                <el-col :span="8">
                  <v-card
                    color="black"
                    elevation="0"
                    style="color:white; font-size:18px;
                           margin:1px 0 1px 8px;">运营商：</v-card>
                </el-col>
                <el-col :span="16">
                  <input
                    type="text"
                    placeholder=" 选择运营商"
                    style="width:120px; height:30px;
                            background-color:white; border-radius:3px">
                </el-col>
              </el-row>
            </v-card>
          </el-col>
          <el-col :span="4.5">
            <v-card
              height="30"
              color="black"
              elevation="0"
              style="margin:10px 15px 10px 100px;"
              >
              <el-row>
                <el-col :span="8">
                  <v-card
                    color="black"
                    elevation="0"
                    style="color:white; font-size:18px;
                           margin:1px 0 1px 6px;">时段：</v-card>
                </el-col>
                <el-col :span="16">
                  <input
                    type="text"
                    placeholder=" 选择时段"
                    style="width:120px; height:30px;
                            background-color:white; border-radius:3px">
                </el-col>
              </el-row>
            </v-card>
          </el-col>
          <el-col :span="4.5">
            <v-card
              height="30"
              color="black"
              elevation="0"
              style="margin:10px 0;"
              >
              <el-row>
                <el-col :span="8">
                  <v-card
                    color="black"
                    elevation="0"
                    style="color:white; font-size:18px;
                           margin:1px 0 1px 6px;">间隔：</v-card>
                </el-col>
                <el-col :span="16">
                  <input
                    type="text"
                    placeholder=" 选择间隔"
                    style="width:120px; height:30px;
                            background-color:white; border-radius:3px">
                </el-col>
              </el-row>
            </v-card>
          </el-col>
        </el-row>
      </div>
      <div id="mainn" style="margin:0 4px 0 4px">
        <div
          id="mainnleft"
          style="width:25vh; height:80vh; background-color:green; float:left">
          <el-table
            :data="nodeInfo"
            style="width: 100%; border:2px solid black; height:80vh">
            <el-table-column
              type="selection"
              align="center">
            </el-table-column>
            <el-table-column
              prop="name"
              label="节点">
            </el-table-column>
          </el-table>
        </div>
        <div
          id="mainnright"
          style="width:83vw; height:80vh; border:2px solid black">
          <div 
            id="cardList"
            style="height:72vh">
            <v-card
              height="280"
              width="483"
              tile
              style="float:left; margin: 5px"
              v-for="(item, index) in nodeInfoData"
              :key="index">
              <el-row
                style="text-align:center; font-size:18px; padding:2px; height:32px;
                      color:white; background-color:black">
                <el-col :span="7">{{ item.num }}</el-col>
                <el-col :span="10">{{ item.data }}</el-col>
                <el-col :span="7">
                  <v-btn color="grey" height="25">上浮</v-btn>
                </el-col>
              </el-row>
              <el-row style="; height:250px">
                <el-col :span="24">
                  <v-card height="240" style="margin:5px" color="white">
                    <div :id="item.id" :style="{width:'460px', height:'280px', margin:'-20px, 0,0,0'}" ></div>
                  </v-card>
                </el-col>
              </el-row>
            </v-card>
          </div>
          <div
            id="pageChange"
            style="height:35px; margin:10px 35vw">
            <el-pagination
              :page-size="9"
              :pager-count="5"
              layout="prev, pager, next"
              :total="50"
              style="color:black">
            </el-pagination>
          </div>
        </div>
      </div>
    </div>

    <footerbar></footerbar>

  </div>
</template>

<script>
import headerbar from '../../components/headerbar.vue'
import footerbar from '../../components/footerbar.vue'

export default {
  components: { footerbar, headerbar},
  name: 'AdminerHome',

  data: () => ({
    card: 'card',
    nodeInfo: [
      {name: 'beijing1'},
      {name: 'beijing2'},
      {name: 'beijing3'},
      {name: 'hongkong1'},
      {name: 'hongkong2'},
      {name: 'hongkong3'},
    ],
    nodeInfoData: [
      {num: "1", data: "aaa", id: "card1"},
      {num: "2", data: "bbb", id: "card2"},
      {num: "3", data: "ccc", id: "card3"},
      {num: "4", data: "ddd", id: "card4"},
    ],
    
    navItems: [
      {text:'首页', icon:'mdi-send', to:'/Adminer/Home'},
      {text:'投票信息', icon:'mdi-send', to:'/Adminer/VotingInfo'},
      {text:'用户信息', icon:'mdi-send', to:'/Adminer/UserInfo'},
      {text:'权限管理', icon:'mdi-send', to:'/Adminer/AccessManagement'},
      {text:'系统设置', icon:'mdi-send', to:'/Adminer/SystemSetting'},
    ],
  }),

  methods: {
    init_echarts() {
      for(let i = 0; i < this.nodeInfoData.length; i++) {
        let echarts = require('echarts')
        let cardID = this.nodeInfoData[i].id
        let myChart = echarts.init(document.getElementById(cardID))
        myChart.setOption({
          // title: {
          //   text: '节点状况'
          // },
          tooltip: {},
          xAxis: {
            show: 'true',
            name: '时间',
            nameLocation: 'end',
            data: ['1', '2', '3', '4', '5']
          },
          yAxis: {
            show: 'true',
            name: '转发量/B',
          },
          series: [{
            name: '分析',
            type: 'line',
            data: [5, 23, 13, 12, 19]
          }]
        })

      }
    }
  },

  mounted() {
    this.init_echarts()
  }
}
</script>

<style>
  .navListItemColor:hover {
    background: rgb(55, 55, 58);
  }

</style>