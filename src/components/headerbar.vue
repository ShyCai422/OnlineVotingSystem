<template>
  <div class="headerbar">
    <v-app-bar
      app
      color="blue-grey darken-3"
      clipped-left
    >
      <v-icon color="white">mdi-home</v-icon>
      <v-app-bar-title style="color:white; font-size:28px">在线电子投票系统</v-app-bar-title>
      <v-spacer></v-spacer>
      <v-btn color="blue-grey darken-3" depressed width="72" height="30">
        <v-text style="color:white; font-size:14px;">
          语言设置
        </v-text>
      </v-btn>
      <v-btn color="blue-grey darken-3" depressed width="72" height="30">
        <v-text style="color:white; font-size:14px;">
          <a href="http://www.baidu.com" style="text-decoration:none; color:white">
            退出系统
          </a>
        </v-text>
      </v-btn>
    </v-app-bar>
  </div>
</template>
 
<script>
export default {
  name: 'headerbar',

  data () {
    return {
			
    }
  }
}
</script>