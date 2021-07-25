<template>
  <div class="votingInfoPage">
    
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

    <div id="votingInfo" v-if="votingInfo_show">
      <v-card color="blue-grey lighten-3" style="margin:10px">
        <v-tabs
          v-model="tab"
          background-color="transparent"
          color="blue-grey darken-4"
          grow
        >
          <v-tab
            v-for="headItem in headItems"
            :key="headItem.num"
            style="font-size:20px"
            @click="selectVoteData(headItem.num);searchVote=null"
          >
            {{ headItem.text }}
          </v-tab>
        </v-tabs>
        <v-tabs-items v-model="tab">
          <v-tab-item
            v-for="headItem in headItems"
            :key="headItem.num"
          >
            <hr><hr>
            <el-table
              :data="voteDataTable"
              style="width: 100%">
              <el-table-column
                label=""
                width="30">
              </el-table-column>
              <el-table-column
                prop="voteID"
                label="编号"
                width="120">
              </el-table-column>
              <el-table-column
                prop="theme"
                label="主题"
                width="180">
              </el-table-column>
              <el-table-column
                prop="author"
                label="创建者"
                width="120">
              </el-table-column>
              <el-table-column
                prop="classify"
                label="分类"
                width="120">
              </el-table-column>
              <el-table-column
                prop="status"
                label="状态"
                width="120">
              </el-table-column>
              <el-table-column
                prop="endTime"
                label="截止日期"
                width="200">
              </el-table-column>
              <el-table-column
                label="操作"
                width="250">
                <template slot="header" slot-scope="props">
                  <el-row :gutter="10">
                    <el-col :span="18">
                      <el-input v-model="searchVote" placeholder="请输入投票编号">
                      </el-input>
                    </el-col>
                    <el-col :span="6">
                      <v-btn icon @click="searchVoteData(headItem.num)">
                        <v-icon large>mdi-magnify</v-icon>
                      </v-btn>
                    </el-col>
                  </el-row>
                </template>
                <template slot-scope="props">
                  <div v-if="headItem.num=='4'">
                    <span v-if="props.row.status=='进行中'">
                      <v-btn color="blue" width="80" height="30"
                            @click="showVoteInfo(props.row.voteID, headItem.num)">查看</v-btn>
                      <v-btn color="yellow" width="80" height="30"
                          style="margin:0 0 0 5px"
                          @click="takePartIn()">参与</v-btn>
                    </span>
                    <span v-else>
                      <v-btn color="blue" width="100" height="30"
                             style="margin:0 30px"
                             @click="showVoteInfo(props.row.voteID, headItem.num)">查看</v-btn>
                    </span>
                  </div>
                  <div v-if="headItem.num!='4'">
                    <v-btn color="blue" width="80" height="30"
                           @click="showVoteInfo(props.row.voteID, headItem.num)">查看</v-btn>
                    <v-btn color="red" width="80" height="30"
                          style="margin:0 0 0 5px">删除</v-btn>
                  </div>
                </template>
              </el-table-column>
            </el-table>
          </v-tab-item>
        </v-tabs-items>
      </v-card>
    </div>

    <div id="checkVotingInfo" v-if="checkVotingInfo_show">
      <v-card color="blue-grey lighten-3" style="margin:10px 10px 2px" height="60">
        <el-row>
          <el-col>
            <v-card height="44"
                    width="950"
                    style="float:left; margin:8px 40px 8px 30px"
                    color="blue-grey lighten-3" elevation="0">
              <span style="font-size:32px">投票详情</span>
            </v-card>
            <v-btn color="blue"
                   width="80" 
                   height="40"
                   style="margin: 10px 20px"
                   @click="checkVotingInfo_show=false;
                           votingInfo_show=true;
                           voteItOneTicket_show=true">
              <span style="font-size:20px">返回</span>          
            </v-btn>
          </el-col>
        </el-row>
      </v-card>
      <v-card  style="margin:0 10px">
        <el-row style="background-color:green;height:200px">
          <el-col :span="6">
            <img src="../../assets/tou04.jpg" alt="" height="180" width="250" style="margin:10px 15px"> 
          </el-col>
          <el-col :span="18">
            <el-row style="background-color:blue; height:80px; padding:5px 0">
              <el-col :span="24">
                <span style="color:white; font-size:28px; margin: 0 20px">
                  {{voteDetail[0].theme}}
                </span>
                <span style="color:white; font-size:28px; margin: 0 80px">
                  {{voteDetail[0].voteID}}
                </span>
                <span style="color:white; font-size:28px; margin: 0 90px">
                  {{voteDetail[0].status}}
                </span>
                <br>
                <span style="color:white; font-size:18px; margin: 0 60px">
                  简要描述：{{voteDetail[0].description}}
                </span>
              </el-col>
            </el-row>
            <el-row style="background-color:purple; height:120px; padding:5px 0">
              <el-col :span="12">
                <span style="color:white; font-size:22px; margin: 0 20px">
                  创建者：{{voteDetail[0].author}}
                </span>
                <br>
                <span style="color:white; font-size:22px; margin: 0 20px">
                  投票类型：{{voteDetail[0].classify}}
                </span>
                <br>
                <span style="color:white; font-size:22px; margin: 0 20px">
                  投票权限：{{voteDetail[0].authorization}}
                </span>
              </el-col>
              <el-col :span="12">
                <span style="color:white; font-size:22px; margin: 0 20px">
                  投票人数：{{voteDetail[0].voteCount}}
                </span>
                <br>
                <span style="color:white; font-size:22px; margin: 0 20px">
                  开始日期：{{voteDetail[0].startTime}}
                </span>
                <br>
                <span style="color:white; font-size:22px; margin: 0 20px">
                  截止日期：{{voteDetail[0].endTime}}
                </span>
              </el-col>
            </el-row>
          </el-col>
        </el-row>
      </v-card>
      <v-card max-width="1147" style="margin:0 10px; padding:10px" elevation="0">
        <v-card
          height="200"
          width="552"
          style="margin:5px 5px; float:left"
          color="green"
          v-for="item in voteResultList"
          :key="item.rank"
        >
          <el-row>
            <el-col :span="8">
              <img src="../../assets/tou01.jpg" alt="候选人头像" height="172" width="150" style="margin:14px">
            </el-col>
            <el-col :span="16">
              <el-row>
                <el-col :span="12">
                  <v-card elevation="0" color="green" style="text-indent:30px; margin:10px; font-size:36px">
                    {{ item.num }}
                  </v-card>
                </el-col>
                <el-col :span="12">
                  <v-card elevation="0" color="green" style="text-indent:28px; margin:10px; font-size:36px">
                    {{ item.name }}
                  </v-card>
                </el-col>
              </el-row>
              <el-row style="height:70px">
                <el-col :span="24">
                  <v-card elevation="0" color="green" style="text-indent:8px; font-size:20px">
                    选手描述： {{ item.description}}
                  </v-card>
                </el-col>
              </el-row>
              <el-row v-if="voteDetail[0].status=='进行中'">
                <el-col :span="14">
                  <v-card
                    elevation="0"
                    color="green"
                    style="text-indent:8px; font-size:20px"
                    v-if="voteDetail[0].classify=='计票制'">
                    目前票数：{{ item.count }}
                  </v-card>
                  <v-card
                    elevation="0"
                    color="green"
                    style="text-indent:8px; font-size:20px"
                    v-if="voteDetail[0].classify=='打分制'">
                    目前得分：{{ (item.count/parseInt(voteDetail[0].voteCount)).toFixed(2)}}
                  </v-card>
                </el-col>
                <el-col :span="10">
                  <v-btn @click="voteItOneTicket(voteDetail[0].voteID, item.num);voteItOneTicket_show=false" v-if="voteItOneTicket_show">投TA一票</v-btn>
                  <v-btn disabled v-else>已投票</v-btn>
                </el-col>
              </el-row>
              <el-row v-if="voteDetail[0].status=='已结束'">
                <el-col :span="12">
                  <v-card elevation="0" color="green" style="text-indent:8px; font-size:20px">
                    最终票数：{{ item.count }}
                  </v-card>
                </el-col>
                <el-col :span="12">
                  <v-card elevation="0" color="green" style="text-indent:28px; font-size:20px">
                    排名：{{ item.rank }}
                  </v-card>
                </el-col>
              </el-row>
            </el-col>
          </el-row>
        </v-card>
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
  name: 'UserVotingInfo',

  data: () => ({
    tab: null,
    searchVote: null,
    localnum: "1",
    votingInfo_show: true,
    checkVotingInfo_show: false,
    voteItOneTicket_show: true,
    headItems: [
      {
        "text":"我创建的投票",
        "num": "1"
      },
      {
        "text":"正在进行的投票",
        "num": "2"
      },
      {
        "text":"已结束的投票",
        "num": "3"
      },
      {
        "text":"投票大厅",
        "num": "4"
      }
    ],
    voteDataTable: [],
    voteDetail: [],
    voteResultList: [],
    userHaveVoted: [],
    navItems: [
      {text:'我的主页', icon:'mdi-send', to:'/User/Home'},
      {text:'投票信息', icon:'mdi-send', to:'/User/VotingInfo'},
      {text:'创建投票', icon:'mdi-send', to:'/User/CreateVoting'},
      {text:'用户设置', icon:'mdi-send', to:'/User/UserSetting'},
    ],
  }),
  methods: {
    selectVoteData(num) {
      let name = sessionStorage.getItem("username");
      this.$http.post(
        '/api/selectVoteData',
        {
          num: num,
          name: name
        }
      ).then(res=>{
          let arr = new Array()
          arr = res.data.result
          this.voteDataTable = []
          this.voteDataTable = arr
      });
    },
    searchVoteData(theNum) {
      let name = sessionStorage.getItem("username");
      this.$http.post(
        '/api/searchVoteData',
        {
          searchId: this.searchVote,
          num: theNum,
          name: name
        }
      ).then(res=>{
          let arr = new Array()
          arr = res.data.result
          this.voteDataTable = []
          this.voteDataTable = arr
      });
    },
    showVoteInfo(id, num) {
      let name = sessionStorage.getItem("username");
      this.$http.post(
        '/api/selectVoteData',
        {
          num: num,
          name: name
        }
      ).then(res=>{
          let arr = new Array()
          arr = res.data.result
          this.voteDataTable = []
          this.voteDataTable = arr

          for(let i = 0; i < this.userHaveVoted.length; i++) {
            if(id == this.userHaveVoted[i]) {
              this.voteItOneTicket_show = false
            }
          }

          let item_dic = new Object();
          for(let i = 0; i < this.voteDataTable.length; i++) {
            let item = this.voteDataTable[i];
            if(id == item.voteID) {
              item_dic.voteID = item.voteID
              item_dic.theme = item.theme
              item_dic.author = item.author
              item_dic.classify = item.classify
              item_dic.authorization = item.authorization
              item_dic.status = item.status
              item_dic.voteCount = item.voteCount
              item_dic.createTime = item.createTime
              item_dic.startTime = item.startTime
              item_dic.endTime = item.endTime
              item_dic.candidateInfo = item.candidateInfo
              item_dic.voteResults = item.voteResults
              item_dic.description = item.description
            }
          }
          this.voteDetail = [];
          this.voteDetail.push(item_dic);

          let templist = new Array()
          for(let i = 0; i < this.voteDataTable.length; i++) {
            let item = this.voteDataTable[i];
            if(id == item.voteID) {
              templist = item.candidateInfo.candidates
              for(let j = 0; j < templist.length; j++) {
                for(let k = 0; k < item.voteResults.length; k++) {
                  if(templist[j].num == item.voteResults[k].num) {
                    templist[j].count = item.voteResults[k].count
                  }
                }
              }
              // 冒泡排序
              for(let m = 0; m < templist.length - 1; m++) {
                let min_count = parseInt(templist[0].count) 
                for(let n = 0; n < templist.length - 1 - m; n++) {
                  if(min_count > parseInt(templist[n+1].count)) {
                    min_count = parseInt(templist[n+1].count)
                  }else{
                    let temp = new Object()
                    temp = templist[n]
                    templist[n] = templist[n+1]
                    templist[n+1] = temp
                  }
                }
              }
              // 添加rank字段
              for(let t = 0; t < templist.length; t++) {
                templist[t].rank = (t + 1) + ""
              }
              this.voteResultList = templist
            }
          }
          this.searchVote=null
          this.checkVotingInfo_show=true
          this.votingInfo_show=false
      });
    },
    voteItOneTicket(voteId, candidateNum) {
      let username = sessionStorage.getItem('username')
      this.$http.post(
        '/api/voteItOneTicket',
        {
          username: username,
          voteId: voteId,
          candidateNum: candidateNum
        }
      ).then(res => {
        this.getUserHaveVoted()
        let code = res.data.code
        let dataDic = res.data.data
        if(code == '200') {
          this.voteDetail= [],
          this.voteResultList= []
          this.voteDetail.push(dataDic);
          
          let templist = new Array()
          let item = this.voteDetail[0];
        
          templist = item.candidateInfo.candidates
          for(let j = 0; j < templist.length; j++) {
            for(let k = 0; k < item.voteResults.length; k++) {
              if(templist[j].num == item.voteResults[k].num) {
                templist[j].count = item.voteResults[k].count
              }
            }
          }
          // 冒泡排序
          for(let m = 0; m < templist.length - 1; m++) {
            let min_count = parseInt(templist[0].count) 
            for(let n = 0; n < templist.length - 1 - m; n++) {
              if(min_count > parseInt(templist[n+1].count)) {
                min_count = parseInt(templist[n+1].count)
              }else{
                let temp = new Object()
                temp = templist[n]
                templist[n] = templist[n+1]
                templist[n+1] = temp
              }
            }
          }
          // 添加rank字段
          for(let t = 0; t < templist.length; t++) {
            templist[t].rank = (t + 1) + ""
          }
          this.voteResultList = templist
            
          console.log(this);
        }else{
          this.$message({
            message: '出现错误!',
            type: 'error',
            center: true,
            offset: 350
          });
        }
      })
    },
    getUserHaveVoted() {
      let username = sessionStorage.getItem('username')
      this.$http.post(
        '/api/getUserHaveVoted',
        {
          username: username
        }
      ).then( res => {
        this.userHaveVoted = res.data.data
      })
    },
    takePartIn() {

    }
  },
  // 跳转到该页面的时候自动触发函数，请求该用户创建的投票
  mounted() {
    this.selectVoteData("1");
    this.getUserHaveVoted();
  }
}
</script>

<style>
  .navListItemColor:hover {
    background: rgb(55, 55, 58);
  }
</style>