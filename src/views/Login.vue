<template>
  <div class="login">
    <v-app-bar
    app
    color="blue-grey darken-3"
    >
      <v-icon color="white">mdi-home</v-icon>
      <v-app-bar-title 
      style="
            color:white;
            font-size:28px;
            "
      width="200"
      >在线电子投票系统</v-app-bar-title>
      <v-spacer></v-spacer>

      <v-btn color="blue-grey darken-3" depressed width="72" height="30">
        <v-text
          style="color:white;
                font-size:14px;
                "
        >语言设置 | </v-text>
      </v-btn>
      <v-btn color="blue-grey darken-3" depressed width="73" height="30">
        <v-text
          style="color:white;
                font-size:14px;
                "
        >帮助中心 | </v-text>
      </v-btn>
      <v-btn color="blue-grey darken-3" depressed width="70" height="30">
        <v-text
          style="color:white;
                font-size:14px;
                "
        >登录反馈</v-text>
      </v-btn>

    </v-app-bar>

    <v-row align="center">
      <v-col cols="2"></v-col>
      <v-col cols="3">
        <v-card height="400">
          <v-card width="300" class="mx-auto">
            <v-form v-model="valid">
              <v-container>
                <v-row>
                  <v-col
                    cols="10"
                  >

                    <v-text-field
                      solo
                      
                      v-model="firstname"
                      :rules="nameRules"
                      
                      label="请输入您的账号"
                      prepend-icon="mdi-account-circle"
                      required
                    ></v-text-field>

                    <v-text-field
                      solo
                      v-model="lastname"
                      :rules="nameRules"
                      
                      label="请输入您的密码"
                      prepend-icon="mdi-lock"
                      required
                    ></v-text-field>
                
                  </v-col>
                </v-row>
                
                <v-row>
                  <v-col cols="10">
                    <v-checkbox v-model="checkbox">
                      <template v-slot:label>
                        <div>
                          我接受
                          <v-tooltip bottom>
                            <template v-slot:activator="{ on }">
                              <a
                                target="_blank"
                                href="https://vuetifyjs.com"
                                @click.stop
                                v-on="on"
                              >
                                该服务协议
                              </a>
                            </template>
                          </v-tooltip>
                        </div>
                      </template>
                    </v-checkbox>
                  </v-col>
                </v-row>

                <v-btn
                  depressed
                  color="primary"
                  to="/Adminer/Home"
                >
                  Primary
                </v-btn>

              </v-container>
            </v-form>
          </v-card>
        </v-card>
      </v-col>
      <v-col cols="2"></v-col>
      <v-col cols="3">
        <v-row style="height: 100px"></v-row>
        <v-row
        >
          <v-card
            height="400"
            width="330"
            color="blue-grey darken-2"
            light
            elevation="2"
          >
            <v-card
              height="50"
              color="primary"
            ></v-card>
            <v-divider style="color:white"></v-divider>
            <v-card width="280" class="mx-auto mt-5">
              <v-card-title>
                <h2>用户登录</h2>
              </v-card-title>
              <v-card-text>
                <v-form>
                  <v-text-field  prepend-icon="mdi-account-circle" />
                  <v-text-field :type="showPassword ? 'text' : 'password'"  prepend-icon="mdi-lock"
                          :append-icon="showPassword ? 'mdi-eye' : 'mdi-eye-off'"
                          @click:append="showPassword = !showPassword" />
                </v-form>
              </v-card-text>
              <v-divider></v-divider>
              <v-card-actions>
                  <v-btn color="info">注册</v-btn>
                  <v-btn color="success" @click="login" to="/Adminer/Home">管理员登录</v-btn>
                  <v-btn color="success" @click="login" to="/User/Home">用户登录</v-btn>
              </v-card-actions>
            </v-card>
        
          </v-card>
        </v-row>
      </v-col>
      <v-col cols="2"></v-col>
    </v-row>

    <footerbar></footerbar>
  </div>
</template>

<script>

import footerbar from '../components/footerbar.vue'

export default {
  components: { footerbar },
  name: 'Login',

  data: () => ({
      valid: false,
      firstname: '',
      lastname: '',
      nameRules: [
        v => !!v || 'Name is required',
        v => v.length <= 10 || 'Name must be less than 10 characters',
      ],
      email: '',
      emailRules: [
        v => !!v || 'E-mail is required',
        v => /.+@.+/.test(v) || 'E-mail must be valid',
      ],
    showPassword: false,
    checkbox: false, 
  })
}
</script>

<style>
  .login {
    background-image: url('https://pic1.zhimg.com/80/v2-bd3434579ecc3b073275fbccffbf11d4_1440w.jpg');
    background-size: 1692px, 600px;
    background-attachment: fixed;
    height: 732px;
  }
</style>