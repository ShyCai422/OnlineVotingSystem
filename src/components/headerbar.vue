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
      <v-avatar size="44" style="margin: 0 20px">
        <img src="../assets/tou03.jpg" alt="用户头像">
      </v-avatar>
      <!-- <span style="color:white; font-size:15px;">
        {{name}}
      </span> -->
      <v-btn color="blue-grey darken-3" depressed width="72" height="30">
        <span style="color:white; font-size:15px;">
          语言设置 |
        </span>
      </v-btn>
      <v-btn color="blue-grey darken-3" depressed width="72" height="30" @click="exit">
        <span style="color:white; font-size:15px;">
          退出系统
        </span >
      </v-btn>
    </v-app-bar>
  </div>
</template>
 
<script>
export default {
  name: 'headerbar',

  data () {
    return {
			name: null,
      url: "../assets/tou03.jpg"
    }
  },
  methods: {
    exit() {
      sessionStorage.clear('username');
      this.$router.push('/Login');
    },
    // test() {
    //   this.name = sessionStorage.getItem("username")
    // }
  },
  // mounted() {
  //   this.test()
  // }
}
</script>