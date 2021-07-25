<template>
  <div class="userSetting">
    
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

    <div id="userSetting" style="margin:80px 360px 0 240px">
      <!-- <img :src="mh" alt="aaa"/> -->
      
      <el-row>
        <el-col :span="10" style="">
          <div class="left" style="margin:10px 10px 0 20px">
            <button style="border:1.5px solid grey; width:120px; height:140px; margin:0 0 0 40px">
              <v-card
                height="137"
                width="120"
                elevation="0"
                style="font-size:100px; text-align:center; line-height:1.3">
                +
              </v-card>
            </button>
            
            <v-card
              width="120"
              height="30"
              elevation="0"
              style="text-align:center; font-size:18px; margin:10px auto 25px">
              头 像
            </v-card>
            <el-form :model="newUserInfo" label-width="70px" label-position="top">
              <el-form-item label="个性签名" prop="description">
                <el-input type="textarea" :rows="3" v-model="newUserInfo.description"></el-input>
              </el-form-item>
            </el-form>
          </div>
        </el-col>
        <el-col :span="14" style="">
          <el-form label-position="right" label-width="70px" :model="newUserInfo">
            <el-form-item label="用户名" prop="username">
              <el-input v-model="newUserInfo.username"></el-input>
            </el-form-item>
            <el-form-item label="密码" prop="password1">
              <el-input v-model="newUserInfo.password1"></el-input>
            </el-form-item>
            <el-form-item label="确认密码" prop="password2">
              <el-input v-model="newUserInfo.password2"></el-input>
            </el-form-item>
            <el-form-item label="年龄" prop="age">
              <el-input-number
                v-model="newUserInfo.age"
                controls-position="right"
                :min="12" :max="60">
                </el-input-number>
            </el-form-item>
            <el-form-item label="性别" prop="gender">
              <el-select v-model="newUserInfo.gender" placeholder="请选择">
                <el-option
                  v-for="item in genderOption"
                  :key="item.value"
                  :label="item.label"
                  :value="item.value">
                </el-option>
              </el-select>
            </el-form-item>
            <el-form-item label="手机号" prop="phone">
              <el-input v-model="newUserInfo.phone"></el-input>
            </el-form-item>
          </el-form>
        </el-col>
      </el-row>
      <el-row>
        <el-col :span="24" style="margin 10px; padding:10px 150px">
          <v-btn
            color="blue"
            width="70"
            style="margin:0 15px"
            @click="updateUserInfo"
            >保存</v-btn>
          <v-btn color="orange"  width="70" @click="resetForm">重置</v-btn>
        </el-col>
      </el-row>
    </div>

    <footerbar></footerbar>

  </div>
</template>

<script>
import headerbar from '../../components/headerbar.vue'
import footerbar from '../../components/footerbar.vue'

export default {
  components: { footerbar, headerbar},
  name: 'UserSetting',

  data: () => ({
    newUserInfo: {
      username: '',
      password1: '',
      password2: '',
      age: '',
      gender: '',
      phone: '',
      description: '',
      image: ''
    },
    oldUserInfo: {
      username: '',
      password1: '',
      password2: '',
      age: '',
      gender: '',
      phone: '',
      description: '',
      image: ''
    },
    genderOption: [
      { label: '男', value: 'male'},
      { label: '女', value: 'female'},
    ],
    userAvatarInfo: [
      {
        num: "1",
        url: "../../assets/userAvatar/tou1.jpg",
        imgUrl: require("../../assets/userAvatar/tou1.jpg")
      },
      {
        num: "2",
        url: "../../assets/userAvatar/tou2.jpg",
        imgUrl: require("../../assets/userAvatar/tou2.jpg")
      },
      {
        num: "3",
        url: "../../assets/userAvatar/tou3.jpg",
        imgUrl: require("../../assets/userAvatar/tou3.jpg")
      },
      {
        num: "4",
        url: "../../assets/userAvatar/tou4.jpg",
        imgUrl: require("../../assets/userAvatar/tou4.jpg")
      },
      {
        num: "5",
        url: "../../assets/userAvatar/tou5.jpg",
        imgUrl: require("../../assets/userAvatar/tou5.jpg")
      },
      {
        num: "6",
        url: "../../assets/userAvatar/tou6.jpg",
        imgUrl: require("../../assets/userAvatar/tou6.jpg")
      },
      {
        num: "7",
        url: "../../assets/userAvatar/tou7.jpg",
        imgUrl: require("../../assets/userAvatar/tou7.jpg")
      },
      {
        num: "8",
        url: "../../assets/userAvatar/tou8.jpg",
        imgUrl: require("../../assets/userAvatar/tou8.jpg")
      },
      {
        num: "9",
        url: "../../assets/userAvatar/tou9.jpg",
        imgUrl: require("../../assets/userAvatar/tou9.jpg")
      },
      {
        num: "10",
        url: "../../assets/userAvatar/tou10.jpg",
        imgUrl: require("../../assets/userAvatar/tou10.jpg")
      },
      {
        num: "11",
        url: "../../assets/userAvatar/tou11.jpg",
        imgUrl: require("../../assets/userAvatar/tou11.jpg")
      },
      {
        num: "12",
        url: "../../assets/userAvatar/tou12.jpg",
        imgUrl: require("../../assets/userAvatar/tou12.jpg")
      },
      {
        num: "13",
        url: "../../assets/userAvatar/tou13.jpg",
        imgUrl: require("../../assets/userAvatar/tou13.jpg")
      },
      {
        num: "14",
        url: "../../assets/userAvatar/tou14.jpg",
        imgUrl: require("../../assets/userAvatar/tou14.jpg")
      },
      {
        num: "15",
        url: "../../assets/userAvatar/tou15.jpg",
        imgUrl: require("../../assets/userAvatar/tou15.jpg")
      },
      {
        num: "16",
        url: "../../assets/userAvatar/tou16.jpg",
        imgUrl: require("../../assets/userAvatar/tou16.jpg")
      },
      {
        num: "17",
        url: "../../assets/userAvatar/tou17.jpg",
        imgUrl: require("../../assets/userAvatar/tou17.jpg")
      }
    ],
    navItems: [
      {text:'我的主页', icon:'mdi-send', to:'/User/Home'},
      {text:'投票信息', icon:'mdi-send', to:'/User/VotingInfo'},
      {text:'创建投票', icon:'mdi-send', to:'/User/CreateVoting'},
      {text:'用户设置', icon:'mdi-send', to:'/User/UserSetting'},
    ],
  }),
  methods: {
    getUserInfoData() {
      let username = sessionStorage.getItem('username')
      this.$http.post(
        '/api/getUserInfoData',
        {
          username: username
        }
      ).then( res => {
        let dataDic = new Object()
        dataDic = res.data.data
        this.oldUserInfo.username = dataDic.username
        this.oldUserInfo.password1 = dataDic.password
        this.oldUserInfo.password2 = dataDic.password
        this.oldUserInfo.age = dataDic.age
        this.oldUserInfo.gender = dataDic.gender
        this.oldUserInfo.phone = dataDic.phone
        this.oldUserInfo.description = dataDic.description
        this.oldUserInfo.image = dataDic.image
        
        this.newUserInfo.username = dataDic.username
        this.newUserInfo.password1 = dataDic.password
        this.newUserInfo.password2 = dataDic.password
        this.newUserInfo.age = dataDic.age
        this.newUserInfo.gender = dataDic.gender
        this.newUserInfo.phone = dataDic.phone
        this.newUserInfo.description = dataDic.description
        this.newUserInfo.image = dataDic.image
      })
    },
    updateUserInfo() {
      let username = sessionStorage.getItem('username')
      this.$http.post(
        '/api/updateUserInfo',
        {
          username: username,
          newname: this.newUserInfo.username,
          password: this.newUserInfo.password1,
          age: this.newUserInfo.age,
          gender: this.newUserInfo.gender,
          phone: this.newUserInfo.phone,
          description: this.newUserInfo.description,
          image: this.newUserInfo.image
        }
      ).then( res => {
        let code = res.data.code
        if(code == '200') {
          this.oldUserInfo.username = this.newUserInfo.username
          this.oldUserInfo.password1 = this.newUserInfo.password1
          this.oldUserInfo.password2 = this.newUserInfo.password2
          this.oldUserInfo.age = this.newUserInfo.age
          this.oldUserInfo.gender = this.newUserInfo.gender
          this.oldUserInfo.phone = this.newUserInfo.phone
          this.oldUserInfo.description = this.newUserInfo.description
          this.oldUserInfo.image = this.newUserInfo.image
          this.$message({
            message: '保存成功!',
            type: 'success',
            center: true,
            offset: 350
          });
          sessionStorage.setItem('username', this.newUserInfo.username)
        }else{
          this.$message({
            message: '该用户名已存在！',
            type: 'error',
            center: true,
            offset: 350
          });
        }
      })
    },
    resetForm() {
      this.newUserInfo.username = this.oldUserInfo.username
      this.newUserInfo.password1 = this.oldUserInfo.password1
      this.newUserInfo.password2 = this.oldUserInfo.password2
      this.newUserInfo.age = this.oldUserInfo.age
      this.newUserInfo.gender = this.oldUserInfo.gender
      this.newUserInfo.phone = this.oldUserInfo.phone
      this.newUserInfo.description = this.oldUserInfo.description
      this.newUserInfo.image = this.oldUserInfo.image
    }
  },
  
  mounted() {
    this.getUserInfoData()
  }
}
</script>

<style>
  .navListItemColor:hover {
    background: rgb(55, 55, 58);
  }
  #userSetting .el-input-number .el-input__inner {
    text-align: left;
  }
</style>