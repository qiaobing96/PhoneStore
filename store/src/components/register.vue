<template>
    <div class="register">
      <div class="header">
        <div style="position: relative">
          <div class="header-l" @click="home()"><img src="http://www.51mkf.com/wap/images/home_b.png" alt=""></div>
          <div class="header-title">会员注册</div>
        </div>
      </div>
      <!--登录框-->
      <div class="loginInp">
        <div>
          <p>账号</p>
          <p><input type="text" placeholder="请输入用户名/手机号" v-model="username"></p>
        </div>
        <div>
          <p>密码</p>
          <p><input type="password" placeholder="请输入登录密码" v-model="password"></p>
        </div>
      </div>
      <div class="forget">
        <p><input type="checkbox" checked="checked">同意用户注册协议</p>
      </div>
      <!--登录按钮-->
      <div class="inp">
        <div @click="register">注册</div>
        <p>Copyright © 2005-2017 XXXXXXXX 版权所有</p>
      </div>
    </div>
</template>

<script>
    import axios from "axios"
    import qs from 'qs'
    export default {
        name: "register",
        data(){
            return {
                username:'',
                password:''
            }
        },
        mounted(){
        },
        methods:{
          home(){
            this.$router.push({
              path:'/homeDetail'
            })
          },
          register(){
            if(this.username==''||this.password==''){
              this.$toast.center("请输入用户名/密码");
            }else{
                axios.post("http://118.89.158.174/phone/login.php",qs.stringify({
                  type:0,
                  username:this.username,
                  password:this.password
                })).then((res)=>{
                    if(res.data==1){
                      this.$toast.center("注册成功");
                      this.$router.push({
                        path:'/login'
                      });
                    }else if(res.data==0){
                      this.$toast.center("该用户名已被注册");
                    }
                });
            }
          }
        }
    }
</script>

<style scoped>
  .header{
    width: 100%;
    height: 40px;
    background: rgb(245,245,245);
  }
  .header img{
    width: 22px;
    height: 22px;
  }
  .header-l{
    position: absolute;
    top: 10px;
    left: 10px;
  }
  .header-title{
    position: absolute;
    top: 10px;
    left: 40%;
    font-size: 20px;
  }
  .loginInp{
    background: white;
  }
  .loginInp div{
    width: 100%;
    height: 50px;
    line-height: 50px;
  }
  .loginInp input{
    height: 40px;
    width: 99.5%;
    font-size: 14px;
  }
  .loginInp div p{
    display: inline-block;
  }
  .loginInp div p:nth-child(1){
    width: 20%;
    text-align: right;
    font-size: 14px;
  }
  .loginInp div p:nth-child(2){
    width: 78.5%;
    font-size: 18px;
  }
  .forget{
    width: 100%;
    height: 80px;
  }
  .forget p{
    margin-top: 30px;
    display: inline-block;
  }
  .forget p:nth-child(1){
    float: left;
    margin-left: 50px;
  }
  .forget p:nth-child(2){
    float: right;
    margin-right: 50px;
    color: rgb(115,156,230);
  }
  .inp{
    width: 100%;
    height: 447px;
  }
  .inp div{
    text-align: center;
    line-height: 50px;
    width: 80%;
    height: 50px;
    margin: 0 auto;
    background: rgb(237,237,237);
    font-size: 18px;
  }
  .inp p{
    position: absolute;
    bottom: 0;
    left: 30px;
  }
</style>
