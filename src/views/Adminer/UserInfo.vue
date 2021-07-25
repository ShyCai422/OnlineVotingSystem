<template>
  <div class="userInfo">
    
    <headerbar></headerbar>

    <v-navigation-drawer
      app
      color="blue-grey darken-1"
      clipped
    >
      <v-list>
        <v-list-item
          v-for="(item,index) in navItems"
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

    <div id="AdminUserInfo" style="margin:20px">
      <el-row>
        <el-col :span="24">
          <el-table
            highlight-current-row="true"
            :data="userInfoTable"
            style="width: 100%">
            <el-table-column
              type="selection"
              width="55">
            </el-table-column>
            <el-table-column
              prop="username"
              label="用户名"
              width="110">
            </el-table-column>
            <el-table-column
              prop="gender"
              label="性别"
              width="80">
            </el-table-column>
            <el-table-column
              prop="age"
              label="年龄"
              width="80">
            </el-table-column>
            <el-table-column
              prop="phone"
              label="电话"
              width="150">
            </el-table-column>
            <el-table-column
              prop="status"
              label="状态"
              width="90">
            </el-table-column>
            <el-table-column
              prop="votedNum"
              label="已投票"
              width="90">
            </el-table-column>
            <el-table-column
              prop="votingNum"
              label="进行中"
              width="90">
            </el-table-column>
            <el-table-column
              prop="createTime"
              label="注册时间"
              width="160">
            </el-table-column>
            <el-table-column
              label="操作"
              align="center"
              width="160">
              <template slot-scope="props">
                <div>
                  <v-btn
                    color="blue"
                    width="40"
                    height="25"
                    min-width="50"
                    style="padding:0 10px"
                    @click="checkOneUser(props.row.username);dialogVisible = true">查看</v-btn>
                </div>
              </template>
            </el-table-column>
          </el-table>
        </el-col>
      </el-row>

      <el-dialog
        title="提示"
        :visible.sync="dialogVisible"
        width="35%">
        <span>这是一段信息</span>
        <span slot="footer" class="dialog-footer">
          <el-button @click="dialogVisible = false">取 消</el-button>
          <el-button type="primary" @click="dialogVisible = false">确 定</el-button>
        </span>
      </el-dialog>
    </div>

    <footerbar></footerbar>

  </div>
</template>

<script>
import headerbar from '../../components/headerbar.vue'
import footerbar from '../../components/footerbar.vue'

export default {
  components: { footerbar, headerbar},
  name: 'AdminUserInfo',

  data: () => ({
    dialogVisible: false,
    userInfoTable: [],
    selectOneUser: [],
    navItems: [
      {text:'首页', icon:'mdi-send', to:'/Adminer/Home'},
      {text:'投票信息', icon:'mdi-send', to:'/Adminer/VotingInfo'},
      {text:'用户信息', icon:'mdi-send', to:'/Adminer/UserInfo'},
      {text:'权限管理', icon:'mdi-send', to:'/Adminer/AccessManagement'},
      {text:'系统设置', icon:'mdi-send', to:'/Adminer/SystemSetting'},
    ],
  }),

  methods: {
    getUserInfoData() {
      this.$http.get(
        '/api/getUserInfoData'
      ).then(res => {
        this.userInfoTable = []
        let tempList = new Array()
        tempList = res.data.userInfoData
        for(let i = 0; i < tempList.length; i++) {
          let tempDict = new Object()
          tempDict.image = tempList[i].image
          tempDict.username = tempList[i].username
          if(tempList[i].gender == 'male') {
            tempDict.gender = '男'
          }else{
            tempDict.gender = '女'
          }
          tempDict.age = tempList[i].age
          tempDict.phone = tempList[i].phone
          if(tempList[i].status == 'on') {
            tempDict.status = '有效'
          }else{
            tempDict.status = '注销'
          }
          tempDict.votedNum = tempList[i].votedInfo.count
          tempDict.votingNum = tempList[i].votingInfo.count
          tempDict.createTime = tempList[i].createTime
          this.userInfoTable.push(tempDict)
        }
      })
    },
    checkOneUser(row) {
      for(let i = 0; i < this.userInfoTable.length; i++) {
        if(row == this.userInfoTable[i].username) {
          let tempDict = new Object()
          tempDict = this.userInfoTable[i]
          this.selectOneUser.push(tempDict)
        }
      }
      console.log(this.selectOneUser);
    }
  },

  mounted() {
    this.getUserInfoData()
  },
  

  
}
</script>

<style>
  .navListItemColor:hover {
    background: rgb(55, 55, 58);
  }
</style>