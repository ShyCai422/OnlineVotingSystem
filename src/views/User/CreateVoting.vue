<template>
  <div class="userVoting">

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

    <div id="userCreateVoting" v-if="resultCard_show==false">
      <el-row style="padding:50px 20px 50px 50px">
        <el-col :span="14" style="padding:70px 73px 0 20px">
          <div class="createVoteForm" v-if="createVoteForm_show">
            <el-form :model="formData" label-width="80px" :rules="rule1" ref="formData">
              <el-form-item label="投票主题" prop="theme">
                <el-input v-model="formData.theme"></el-input>
              </el-form-item>
              <el-form-item label="简要描述" prop="description">
                <el-input v-model="formData.description"></el-input>
              </el-form-item>
              <el-form-item label="开始时间" prop="startTime">
                <el-date-picker
                  v-model="formData.startTime"
                  type="datetime"
                  placeholder="选择开始时间"
                  style="width:350px">
                </el-date-picker>
              </el-form-item>
              <el-form-item label="截止时间" prop="endTime">
                <el-date-picker
                  v-model="formData.endTime"
                  type="datetime"
                  placeholder="选择截止时间"
                  style="width:350px">
                </el-date-picker>
              </el-form-item>
              <el-form-item label="投票类型" style="float:left" prop="classify">
                <el-select v-model="formData.classify" placeholder="请选择">
                  <el-option
                    v-for="item in option1"
                    :key="item.value"
                    :label="item.label"
                    :value="item.value">
                  </el-option>
                </el-select>
              </el-form-item>
              <el-form-item label="权限设置" style="margin: 0 0 0 300px" prop="authorization">
                <el-select v-model="formData.authorization" placeholder="请选择">
                  <el-option
                    v-for="item in option2"
                    :key="item.value"
                    :label="item.label"
                    :value="item.value">
                  </el-option>
                </el-select>
              </el-form-item>
              <el-form-item style="margin:10px">
                <v-btn color="blue darken-2" width="120px" height="45px" 
                      style="font-size:18px; color:white; margin:0 5px"
                      @click="submitForm('formData')">
                      立即创建</v-btn>
                <v-btn color="orange darken-3" width="120px" height="45px" 
                      style="font-size:18px; color:white; margin:0 5px"
                      @click="resetForm('formData')">
                      重置</v-btn>
              </el-form-item>
            </el-form>
          </div>

          <div class="addCandidateForm" v-if="addCandidateForm_show">
            <v-btn
              color="grey"
              height="32px"
              width="70px"
              style="font-size:18px; margin:20px"
              @click="back" >
              返回
            </v-btn>
            <el-row>
              <el-col :span="8">
                <div class="addImage" style="margin:20px">
                  <button style="border:1.5px solid grey">
                    <v-card
                      height="140"
                      width="120"
                      style="font-size:100px; text-align:center; line-height:1.3">
                      +
                    </v-card>
                  </button>
                  <v-card
                    width="120"
                    height="30"
                    elevation="0"
                    style="text-align:center; font-size:18px">
                    头 像
                  </v-card>
                </div>
              </el-col>
              <el-col :span="16">
                <el-form :model="candidateForm" label-width="80px" :rules="rule2" ref="candidateForm">
                  <el-form-item label="编 号" prop="num">
                    <el-input v-model="candidateForm.num"></el-input>
                  </el-form-item>
                  <el-form-item label="候选人" prop="name">
                    <el-input v-model="candidateForm.name"></el-input>
                  </el-form-item>
                  <el-form-item label="个人简介" prop="description">
                    <el-input
                      type="textarea"
                      v-model="candidateForm.description"
                      rows="3"></el-input>
                  </el-form-item>
                </el-form>
              </el-col>
            </el-row>
            <el-row>
              <el-col :span="24" style="padding:8px 150px 8px 170px">
                <v-btn
                  height="36px"
                  width="92px"
                  color="blue"
                  style="font-size:18px; margin:6px; color:white"
                  @click="createCandidate('candidateForm')">
                  完成
                </v-btn>
                <v-btn
                  height="36px"
                  width="92px"
                  color="orange darken-3"
                  style="font-size:18px; margin:6px; color:white"
                  @click="resetForm('candidateForm')">
                  重置
                </v-btn>
              </el-col>
            </el-row>
          </div>
        </el-col>

        <el-col :span="10">
          <div style="border-left:2px solid grey;
                      padding:0 10px 0 30px;
                      height:600px"
          >
            <v-card
              color="grey darken-3"
              width="480"
              height="36"
              style="font-size:24px; color:white; text-indent:18px;
                     margin:0 0 2px 0; text-align:center"
            >
              候选人信息
            </v-card>
            <div style="max-height:530px;overflow:auto;">
              <v-card
              color="grey darken-1"
              width="480"
              height="120"
              style="font-size:18px; color:white; margin: 1px 0; float:left"
              v-for="item in candidateList"
              :key="item.num"
              >
                <el-row>
                  <el-col :span="10">
                    <img src="../../assets/tou02.jpg"
                        alt="候选人头像" height="100" width="140"
                        style="margin:10px">
                  </el-col>
                  <el-col :span="14">
                    <v-card color="grey darken-1" style="margin:10px 0 2px 0" elevation="0">
                      <span style="margin: 10px; color:#ECEFF1">编 号： {{ item.num }}</span>
                    </v-card>
                    <v-card color="grey darken-1" style="margin:2px 0 2px 0" elevation="0">
                      <span style="margin: 10px; color:#ECEFF1">候选人： {{ item.name }}</span>
                    </v-card>
                    <v-card color="grey darken-1" style="margin:2px 0 2px 0" elevation="0">
                      <span style="margin: 10px; color:#ECEFF1">简 介： {{ item.description }}</span>
                    </v-card>
                  </el-col>
                </el-row>
              </v-card>
            </div>
            <v-btn
              width="200"
              height="40"
              color="#FFAB40"
              style="margin:10px 100px; font-size:20px"
              @click="addCandidate">添加</v-btn>
          </div>
        </el-col>
      </el-row>
    </div>

    <div class="resultCard" v-if="resultCard_show">
      <v-card
        color="blue"
        height="42"
        width="600"
        style="margin:100px auto 0; font-size:26px; padding:0 20px">
        <el-row>
          <el-col :span="16">
            <b>投票信息</b>
          </el-col>
          <el-col :span="5">
            <v-btn style="font-size:16px" to="VotingInfo">查看详情</v-btn>
          </el-col>
          <el-col :span="3">
            <v-btn style="font-size:16px" @click="goback">返回</v-btn>
          </el-col>
        </el-row>
      </v-card>
      <v-card
        color="red"
        min-height="380"
        width="600"
        style="margin:0 auto; font-size:22px; padding:7px 20px">
        <el-row>
          <el-col :span="24">
            投票ID：{{ createdInfo.voteID }}
          </el-col>
        </el-row>
        <el-row>
          <el-col :span="24">
            投票主题：{{ createdInfo.theme}}
          </el-col>
        </el-row>
        <el-row>
          <el-col :span="24">
            简介：{{ createdInfo.description}}
          </el-col>
        </el-row>
        <el-row>
          <el-col :span="24">
            创建者：{{ createdInfo.author}}
          </el-col>
        </el-row>
        <el-row>
          <el-col :span="24">
            投票类型：{{ createdInfo.classify}}
          </el-col>
        </el-row>
        <el-row>
          <el-col :span="24">
            权限设置：{{ createdInfo.authorization}}
          </el-col>
        </el-row>
        <el-row>
          <el-col :span="24">
            投票状态：{{ createdInfo.status}}
          </el-col>
        </el-row>
        <el-row>
          <el-col :span="24">
            候选人数量：{{ createdInfo.candidateInfo.candidateCount}}
          </el-col>
        </el-row>
        <el-row>
          <el-col :span="24">
            创建时间：{{ createdInfo.createTime}}
          </el-col>
        </el-row>
        <el-row>
          <el-col :span="24">
            开始时间：{{ createdInfo.startTime}}
          </el-col>
        </el-row>
        <el-row>
          <el-col :span="24">
            结束时间：{{ createdInfo.endTime}}
          </el-col>
        </el-row>
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
  name: 'UserCreateVoting',

  data: () => ({
    candidateCount: 0,
    createVoteForm_show: true,
    addCandidateForm_show: false,
    resultCard_show: false,
    formData: {
      theme: '',
      description: '',
      startTime: '',
      endTime: '',
      classify: '',
      authorization: '',
    },
    candidateList: [],
    candidateForm: {
      num: '',
      name: '',
      description: '',
      image: ''
    },
    newVoteInfo: {},
    createdInfo: {},
    option1: [
      { label: '计票制', value: '计票制'},
      { label: '打分制', value: '打分制'}
    ],
    option2: [
      { label: '公开', value: '公开'},
      { label: '私密', value: '私密'}
    ],
    rule1: {
      theme: [{required: true, message: '请输入投票主题', trigger: 'blur'}],
      description: [{required: true, message: '请简要描述该投票', trigger: 'blur'}],
      startTime: [{ type: 'date', required: true, message: '请选择开始时间', trigger: 'change'}],
      endTime: [{ type: 'date', required: true, message: '请选择截止时间', trigger: 'change'}],
      classify: [{ required: true, message: '请选择', trigger: 'change'}],
      authorization: [{ required: true, message: '请选择', trigger: 'change'}]
    },
    rule2: {
      num: [{required: true, message: '请输入候选人编号', trigger: 'blur'}],
      name: [{required: true, message: '请输入候选人名称', trigger: 'blur'}],
      description: [{required: true, message: '请输入候选人简介', trigger: 'blur'}]
    },
    navItems: [
      {text:'我的主页', icon:'mdi-send', to:'/User/Home'},
      {text:'投票信息', icon:'mdi-send', to:'/User/VotingInfo'},
      {text:'创建投票', icon:'mdi-send', to:'/User/CreateVoting'},
      {text:'用户设置', icon:'mdi-send', to:'/User/UserSetting'},
    ],
  }),

  methods: {
    test() {
      console.log(this.classify);
    },

    addCandidate() {
      this.createVoteForm_show = false;
      this.addCandidateForm_show = true;
    },

    back() {
      this.createVoteForm_show = true;
      this.addCandidateForm_show = false;
    },

    createCandidate(formName) {
      this.$refs[formName].validate((valid) => {
        if (valid) {
          console.log(this.candidateForm);
          let dic = new Object();
          dic.num = this.candidateForm.num
          dic.name = this.candidateForm.name
          dic.description = this.candidateForm.description
          dic.image = this.candidateForm.image
          this.candidateList.push(dic)
          // 清空candidateForm
          this.candidateForm.num = ''
          this.candidateForm.name = ''
          this.candidateForm.description = ''
          this.candidateForm.image = ''

          this.createVoteForm_show = true;
          this.addCandidateForm_show = false;

          this.$message({
            message: '添加成功!',
            type: 'success',
            center: true,
            offset: 400
          });
          console.log(sessionStorage.getItem('username'));
        } else {
          return false;
        }
      });
    },

    goback() {
      this.resultCard_show = false
      this.newVoteInfo = {}
      this.candidateList = []
      this.createdInfo = {}
    },

    submitForm(formName) {
      this.$refs[formName].validate((valid) => {
        if (valid) {

          this.newVoteInfo.theme = this.formData.theme
          this.newVoteInfo.classify = this.formData.classify
          this.newVoteInfo.authorization = this.formData.authorization
          this.newVoteInfo.description = this.formData.description
          this.newVoteInfo.startTime = this.formData.startTime.toString()
          this.newVoteInfo.endTime = this.formData.endTime.toString()
          this.newVoteInfo.author = sessionStorage.getItem('username')
          this.newVoteInfo.voteCount = '0'

          let candidateInfo = new Object()
          let candidates = new Array()
          candidateInfo.candidateCount = this.candidateList.length.toString()
          for(let i = 0; i < this.candidateList.length; i++) {
            let candidateItem = new Object()
            candidateItem.num = this.candidateList[i].num
            candidateItem.name = this.candidateList[i].name
            candidateItem.image = this.candidateList[i].image
            candidateItem.description = this.candidateList[i].description
            candidates.push(candidateItem)
          }
          candidateInfo.candidates = candidates
          this.newVoteInfo.candidateInfo = candidateInfo

          let voteResults = new Array()
          for(let i = 0; i < this.candidateList.length; i++) {
            let voteResult = new Object()
            voteResult.num = this.candidateList[i].num
            voteResult.name = this.candidateList[i].name
            voteResult.count = '0'
            voteResults.push(voteResult)
          }
          this.newVoteInfo.voteResults = voteResults

          // 将newVoteInfo发送到后端处理
          this.$http.post(
            '/api/createVote',
            {
              voteData: this.newVoteInfo
            }
          ).then(res=>{
            let code = res.data.code;
            let createdData = res.data.createdData
            if(code == '200') {
              this.createdInfo = createdData
              this.formData.theme = ''
              this.formData.description = ''
              this.formData.startTime = ''
              this.formData.endTime = ''
              this.formData.classify = ''
              this.formData.authorization = ''
              this.candidateList = []
              this.$message({
                message: '创建成功!',
                type: 'success',
                center: true,
                offset: 400
              });
              this.resultCard_show = true
            }else{
              this.$message({
                message: '创建失败!',
                type: 'error',
                center: true,
                offset: 400
              });
            }
          })

          
        } else {
          return false;
        }
      });
    },

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

  }
  
}
</script>

<style>
  .navListItemColor:hover {
    background: rgb(55, 55, 58);
  }

</style>