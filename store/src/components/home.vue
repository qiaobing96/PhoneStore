<template>
    <div class="home">
      <router-view/>
      <div class="tabber">
        <div class="littleTab" @click="goHome(1)">
          <img :src="iconArr[0].url" alt="">
          <router-link to="/homeDetail">首页</router-link>
        </div>
        <div class="littleTab" @click="goHome(2)">
          <img :src="iconArr[1].url" alt="">
          <router-link to="/kind">分类</router-link>
        </div>
        <div class="littleTab" @click="goHome(3)">
          <img :src="iconArr[2].url" alt="">
          <router-link to="/car">购物车</router-link>
        </div>
        <div class="littleTab" @click="goHome(4)">
          <img :src="iconArr[3].url" alt="">
          <router-link to="/my">我的</router-link>
        </div>
      </div>
    </div>
</template>

<script>
    export default {
        name: "home",
        data(){
            return{
                iconArr:[
                  {url:require('../../static/index.png')},{url:require('../../static/list.png')},
                  {url:require('../../static/car.png')},{url:require('../../static/my.png')}
                ]
            }
        },
        methods:{
          goHome(res){
            if(res==1){
              this.$router.push({
                path:'/homeDetail'
              })
            }
            if(res==2){
              this.$router.push({
                path:'/kind'
              })
            }
            if(res==3){
              this.$router.push({
                path:'/car'
              })
            }
            if(res==4){
              this.$router.push({
                path4:'/my'
              })
            }
          }
        }
    }
</script>

<style scoped>
  .tabber{
    position: fixed;
    bottom: 0;
    border-top: 1px solid black;
    width: 100%;
    height: 64px;
    background: rgb(255,255,255);
  }
 .littleTab{
   display: inline-block;
   width: 24.1%;
   text-align: center;
 }
 .littleTab img{
   width: 30px;
   height: 30px;
   display: block;
   margin: 5px auto;
 }
  .tabber  a{
    text-decoration: none;
    font-size: 16px;
    color: skyblue;
  }
</style>
