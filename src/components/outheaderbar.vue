<template>
  <div class="outHeaderBar">
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
        <span
          style="color:white;
                font-size:15px;
                "
        >语言设置</span>
      </v-btn>
      <v-btn color="blue-grey darken-3" depressed width="90" height="30">
        <span
          style="color:white;
                font-size:15px;
                "
        >| 帮助中心 | </span>
      </v-btn>
      <v-btn color="blue-grey darken-3" depressed width="70" height="30">
        <span
          style="color:white;
                font-size:15px;
                "
        >登录反馈</span>
      </v-btn>

    </v-app-bar>
  </div>
</template>
 
<script>
export default {
  name: 'outheaderbar',

  data () {
    return {
			
    }
  },
}
</script>