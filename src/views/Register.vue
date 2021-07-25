<template>
  <div class="register">
    <outheaderbar></outheaderbar>

    <div class="bg-content">
      <v-row align="center">
        <v-col cols="3"></v-col>
        <v-col cols="2"></v-col>
        <v-col cols="3">
          <div id="registerBox">
            <v-row style="height: 140px"></v-row>
            <el-card class="box-card">
              <div slot="header" class="clearfix">
                <span  style="font-size:22px">请注册您的账号</span>
                <el-button style="float: right; padding: 3px 5px" type="primary" @click="goLogin">
                  <span  style="font-size:18px">返回登录</span>
                </el-button>
              </div>
              <div class="registerInfo">
                <el-form :model="ruleForm" :rules="rules" ref="ruleForm" label-width="70px">
                  <el-form-item label="用户名" prop="username">
                  <el-input v-model="ruleForm.username"></el-input>
                  </el-form-item>
                  <el-form-item label="密码" prop="password">
                    <el-input type="password" v-model="ruleForm.password" autocomplete="off"></el-input>
                  </el-form-item>
                  <el-form-item label="确认密码" prop="checkPass">
                    <el-input type="password" v-model="ruleForm.checkPass" autocomplete="off"></el-input>
                  </el-form-item>
                  <!-- <el-button type="primary" @click="adminerLogin" size="small">管理员登录</el-button>
                  <el-button type="primary" @click="userLogin" size="small">用户登录</el-button> -->
                  <span style="margin:0 40px 0 90px">
                  <el-button type="primary" @click="submitForm('ruleForm')" size="medium">注册</el-button></span>
                  <el-button type="warning" @click="resetForm('ruleForm')" size="medium">重置</el-button>
                </el-form>
              </div>
            </el-card>
          </div>
        </v-col>
        <v-col cols="2"></v-col>
      </v-row>
    </div>

    <footerbar></footerbar>
  </div>
</template>

<script>
// import axios from "axios"
import outheaderbar from '../components/outheaderbar.vue'
import footerbar from '../components/footerbar.vue'

export default {
  components: { outheaderbar,footerbar },
  name: 'Register',

  data() {
    var validatePass = (rule, value, callback) => {
      if (value === '') {
        callback(new Error('请输入密码'));
      } else {
        if (this.ruleForm.checkPass !== '') {
          this.$refs.ruleForm.validateField('checkPass');
        }
        callback();
      }
    };
    var validatePass2 = (rule, value, callback) => {
      if (value === '') {
        callback(new Error('请再次输入密码'));
      } else if (value !== this.ruleForm.password) {
        callback(new Error('两次输入密码不一致!'));
      } else {
        callback();
      }
    };
    return {
      count: "",
      ruleForm: {
        username: '',
        password: '',
        checkPass: ''
      },
      rules: {
        username: [
          { required: true, message: '请输入您的账号', trigger: 'blur' },
          { min: 5, max: 16, message: '长度在 5 到 16 个字符', trigger: 'blur' }
        ],
        password: [
          { required: true, message: '请输入您的密码', trigger: 'blur' },
          { min: 5, max: 16, message: '长度在 5 到 16 个字符', trigger: 'blur' },
          { validator: validatePass, trigger: 'blur' }
        ],
        checkPass: [
          { validator: validatePass2, trigger: 'blur' },
        ],
      },
    }
  },
  methods: {
    // 返回登录
    goLogin() {
      this.$router.push('/Login');
    },
    // 提交注册验证
    submitForm(formName) {
      let {username, password} = this.ruleForm
      this.$refs[formName].validate((valid) => {
        if (valid) {
          // 将注册信息上传到后端，后端返回200状态码
          this.$http.post(
            '/api/register',
            {
              username: username,
              password: password
            }
          ).then(res=>{
            let {code} = res.data;
            if(code == '200'){
              this.$message({
                message: '注册成功!',
                type: 'success',
                center: true,
                offset: 400
              });
              this.sleep(1);//等待 1 秒并返回登录页
            }else{
              this.$message({
                message: '该用户名已被注册!',
                type: 'error',
                center: true,
                offset: 400
              });
            };
          });
        } else {
          console.log('注册失败');
          return false;
        }
      });
    },
    // 重置清空表单
    resetForm(formName) {
      this.$refs[formName].resetFields();
    },
    // 等待几秒并返回登录页
    sleep(time){
      const TIME_COUNT = time;
      if(!this.timer){
        this.count = TIME_COUNT;
        this.show = false;
        this.timer = setInterval(()=>{
          if(this.count > 0 && this.count <= TIME_COUNT){
            this.count--;
          }else{
            this.show = true;
            clearInterval(this.timer);
            this.timer = null;
            this.$router.push('/Login');
          }
        },1000)
      };
    },
  },
}
</script>

<style>
  .register {
    background-image: url('https://pic1.zhimg.com/80/v2-bd3434579ecc3b073275fbccffbf11d4_1440w.jpg');
    background-size: 100%, 100%;
    height: 102%;
    background-attachment: fixed;
  }
</style>