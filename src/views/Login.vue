<template>
  <div class="login">
    <outheaderbar></outheaderbar>
 
    <div class="bg-content">
      <v-row align="center">
        <v-col cols="2"></v-col>
        <v-col cols="3"></v-col>
        <v-col cols="2"></v-col>
        <v-col cols="3">
          <div id="loginBox">
            <v-row style="height: 140px"></v-row>
            <v-row>
              <v-card width="280" class="mx-auto mt-5" elevation="16">
                <v-card-title>
                  <h2>用户登录</h2>
                </v-card-title>
                <v-divider></v-divider>
                <v-card-actions>
                  <el-form :model="ruleForm" :rules="rules" ref="ruleForm" label-width="70px">
                    <el-form-item label="用户名" prop="username">
                      <el-input v-model="ruleForm.username" type="text" prefix-icon="el-icon-user"></el-input>
                    </el-form-item>
                    <el-form-item label="密码" prop="password">
                      <el-input v-model="ruleForm.password" type="password" prefix-icon="el-icon-key" ></el-input>
                    </el-form-item>
                    <el-row :gutter="10" class="checkCodeBox">
                      <el-col :span="15">
                        <el-input v-model="checkNode" placeholder="请输入验证码" clearable size="small"></el-input>
                      </el-col>
                      <el-col :span="6">
                        <img src="../assets/ting2.jpg" alt="验证码图片" width="90" height="32">
                      </el-col>
                    </el-row>
                    <div class="buttonGroup">
                      <el-button type="primary" @click="login" size="small">登录</el-button>
                      <span class="registerButton">
                        <router-link to="/Register">
                          <el-button type="warning" size="small">注册</el-button>
                        </router-link>
                      </span>
                    </div>
                    <!-- </el-button> -->
                  </el-form>
                </v-card-actions>
              </v-card>
            </v-row>
          </div>
        </v-col>
        <v-col cols="2"></v-col>
      </v-row>
    </div>

    <footerbar></footerbar>
  </div>
</template>

<script>
import footerbar from '../components/footerbar.vue'
import outheaderbar from '../components/outheaderbar.vue'

export default {
  components: { outheaderbar, footerbar },
  name: 'Login',

  data: () => ({
    checkNode: '',
    adminerInfo: null,
    userInfo: null,
    ruleForm: {
      username: '',
      password: '',
    },
    rules: {
      username: [
        { required: true, message: '请输入您的账号', trigger: 'blur' },
        { min: 5, max: 16, message: '长度在 5 到 16 个字符', trigger: 'blur' }
      ],
      password: [
        { required: true, message: '请输入您的密码', trigger: 'blur' },
        { min: 5, max: 16, message: '长度在 5 到 16 个字符', trigger: 'blur' }
      ],
    },
  }),
  methods: {
    // 输入账号密码后验证登录
    login() {
      let {username, password} = this.ruleForm;
      this.$http.post(
        '/api/login',
        {
          username: username,
          password: password
        }
      ).then(res=>{
        let code = res.data.code;
        let result = res.data.result;
        if(code == '200'){
          sessionStorage.setItem('username',username);
          // 获取用户的基本信息
          if(username == "adminer") {
            this.adminerInfo = result;
            this.$router.push('/Adminer/Home')
          }else{
            this.userInfo = result;
            this.$router.push('/User/Home');
          }
        }else{
          this.$message({
            message: '账号名或密码错误!',
            type: 'error',
            center: true,
            offset: 350
          });
        }
      })
    }
  },
}
</script>

<style>
  * {
    margin: 0;
    padding: 0;
  }
  .login {
    background-image: url('https://pic1.zhimg.com/80/v2-bd3434579ecc3b073275fbccffbf11d4_1440w.jpg');
    background-size: 100% 100%;
    height: 102%;
    background-attachment: fixed;
  }

  .registerButton {
    margin: 12px;
  }

  .check {
    margin: 2px;
  }

  .checkCodeBox {
    padding: 0 10px;
  }

  .buttonGroup {
    margin: 14px 1px;
  }
  #loginBox .row {
    margin: 0;
  }
</style>