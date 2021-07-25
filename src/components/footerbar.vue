<template>
  <div class="footerbar">
    <v-footer
    app
    color="blue-grey darken-3"
    height="34"
    style="color:white"
    >
      <v-spacer></v-spacer>
      <a
        v-for="(item,i) in footerItems"
        :key="i"
        :href="item.href"
        target="_blank"
        style="color:white; text-decoration:none; font-size:14px; text-indent:4px"
      >
        {{item.text}} |
      </a>


      <span style="color:grey; font-size:14px; text-indent:4px">
        ©2021 GZHU. All Rights Reserved.
      </span>
      <v-spacer></v-spacer>
    </v-footer>
  </div>
</template>
 
<script>
export default {
  name: 'footerbar',
  data () {
    return {
			footerItems: [
			{href:'http://www.baidu.com', text:'关于系统'},
			{href:'http://www.taobao.com', text:'服务条款'},
			{href:'#', text:'隐私政策'},
			{href:'#', text:'联系我们'},
			],
    }
  }
}
</script>
