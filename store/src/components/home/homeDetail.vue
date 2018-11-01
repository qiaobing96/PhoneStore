<template>
    <div class="homeDetail">
        <!--顶部轮播图-->
        <div class="swiper-container">
          <div class="swiper-wrapper">
            <div class="swiper-slide">
              <img :src="swiper1" alt="">
            </div>
            <div class="swiper-slide">
              <img :src="swiper2" alt="">
            </div>
            <div class="swiper-slide">
              <img :src="swiper3" alt="">
            </div>
          </div>
          <div class="swiper-pagination"></div>
        </div>
        <!--优惠券gif-->
        <div class="regImg">
          <img :src="reg" alt="">
        </div>
        <!-- 品质推荐-->
        <div class="center">
          <p style="text-align:center;font-size:20px;">--品质推荐--</p>
          <div class="center-left" @click.once="MainGoList(9)">
            <img src="http://www.51mkf.com/data/upload/mobile/special/s0/s0_05830025920471548.jpg" alt="">
          </div>
          <div class="center-right" @click.once="MainGoList(3)">
            <img src="http://www.51mkf.com/data/upload/mobile/special/s0/s0_05830026106976508.jpg" alt="">
          </div>
          <img src="http://www.51mkf.com/data/upload/mobile/special/s0/s0_05893733429399139.png" alt="">
        </div>
        <!--热门专区-->
        <div class="hotImg">
          <img src="http://www.51mkf.com/data/upload/mobile/special/s0/s0_05872427174157909.jpg" alt="">
          <div class="hotImg-main">
            <div class="hotImg-left" @click="MainGoList(10)">
              <img src="http://www.51mkf.com/data/upload/mobile/special/s0/s0_05839274097902919.png" alt="">
            </div>
            <div class="hotImg-right">
              <img  @click.once="MainGoList(9)" src="http://www.51mkf.com/data/upload/mobile/special/s0/s0_05830025920471548.jpg" alt="">
              <img  @click.once="MainGoList(3)" src="http://www.51mkf.com/data/upload/mobile/special/s0/s0_05830026106976508.jpg" alt="">
            </div>
          </div>
        </div>
      <!--发现-->
      <div class="find">
        <img src="http://www.51mkf.com/data/upload/mobile/special/s0/s0_05872427367680592.jpg" alt="">
        <ol>
          <li><img src="http://www.51mkf.com/data/upload/mobile/special/s0/s0_05829074542317149.jpg" alt=""></li>
          <li><img src="http://www.51mkf.com/data/upload/mobile/special/s0/s0_05829074620732692.jpg" alt=""></li>
          <li><img src="http://www.51mkf.com/data/upload/mobile/special/s0/s0_05829074688735229.jpg" alt=""></li>
          <li><img src="http://www.51mkf.com/data/upload/mobile/special/s0/s0_05829074740982512.jpg" alt=""></li>
        </ol>
        <ol>
          <li><img src="http://www.51mkf.com/data/upload/mobile/special/s0/s0_05829074862293826.jpg" alt=""></li>
          <li><img src="http://www.51mkf.com/data/upload/mobile/special/s0/s0_05829074924730348.jpg" alt=""></li>
          <li><img src="http://www.51mkf.com/data/upload/mobile/special/s0/s0_05829075112043759.jpg" alt=""></li>
          <li><img src="http://www.51mkf.com/data/upload/mobile/special/s0/s0_05829075247421403.jpg" alt=""></li>
        </ol>
        <ol>
          <li><img src="http://www.51mkf.com/data/upload/mobile/special/s0/s0_05829076820712826.jpg" alt=""></li>
          <li><img src="http://www.51mkf.com/data/upload/mobile/special/s0/s0_05829076905113949.jpg" alt=""></li>
          <li><img src="http://www.51mkf.com/data/upload/mobile/special/s0/s0_05829077552635290.jpg" alt=""></li>
          <li><img src="http://www.51mkf.com/data/upload/mobile/special/s0/s0_05829077939222473.jpg" alt=""></li>
        </ol>
        <ol>
          <li><img src="http://www.51mkf.com/data/upload/mobile/special/s0/s0_05829078031932955.jpg" alt=""></li>
          <li><img src="http://www.51mkf.com/data/upload/mobile/special/s0/s0_05829078115274232.jpg" alt=""></li>
          <li><img src="http://www.51mkf.com/data/upload/mobile/special/s0/s0_05829078313596286.jpg" alt=""></li>
          <li><img src="http://www.51mkf.com/data/upload/mobile/special/s0/s0_05829078546533771.jpg" alt=""></li>
      </ol>
      <!--热门手机-->
        <div class="hotPhone">
          <img src="http://www.51mkf.com/data/upload/mobile/special/s0/s0_05506778612994991.png" alt="">
          <div v-for="(item,index) in goodsList" class="GList" @click="goList(index)">
              <img v-lazy="item.imgurl" alt="">
              <p>{{item.name}}{{item.descript}}</p>
              <p>￥{{item.price}}.00元</p>
          </div>
        </div>
      </div>
    </div>
</template>

<script>
    import Swiper from 'swiper'
    import 'swiper/dist/css/swiper.min.css'
    import axios from "axios"
    import Bus from '../../bus.js'
    export default {
        name: "homoDetail",
        data(){
            return {
              swiper1:'',
              swiper2:'',
              swiper3:'',
              reg:'',
              goodsList:''
            }
        },
        mounted(){
          let mySwiper=new Swiper('.swiper-container',{
              autoplay:true,
              pagination: {
                el: '.swiper-pagination',
              }
          });
          axios.defaults.headers['Content-Type'] = 'application/x-www-form-urlencoded;charset=UTF-8';
          axios.post("http://118.89.158.174/phone/index.php").then((res)=>{
            this.swiper1=res.data[0].imgurl;
            this.swiper2=res.data[1].imgurl;
            this.swiper3=res.data[2].imgurl;
            this.reg=res.data[3].imgurl;
            console.log(res);
          }).catch((res)=>{
            console.log(res);
          });
          axios.post("http://118.89.158.174/phone/goods.php",'type=0').then((res)=>{
            this.goodsList=res.data;
          });
        },
      methods:{
        goList(index){
            this.$router.push({
                name:'list',
                params:{
                  id:index+1
                }
            });
        },
        MainGoList(num){
            this.$router.push({
              name:'list',
              params:{
                id:num
              }
          });
        }
      }
    }
</script>

<style scoped>
  .homeDetail{
    padding-bottom: 64px;
  }
  .swiper-container,.swiper-wrapper,.swiper-slide,.swiper-slide img{
    width: 100%;
    height: 150px;
  }
  .regImg,.regImg img,.center{
    width: 100%;
  }
  .center-left{
    margin-left: 3px;
  }
  .center-right,.center-left{
    width: 49%;
    display: inline-block;
    height: 130px;
    background: rgb(245,245,245);
  }
  .center img{
    width: 100%;
    height: 130px;
  }
  .hotImg,.hotImg img{
    width: 100%;
  }
  .hotImg-main{
    width: 100%;
    display: inline-block;
  }
  .hotImg-left,.hotImg-right{
    width: 49%;
    display: inline-block;
  }
  .find,.find img{
    width: 100%;
  }
  li{
    display: inline-block;
    width: 24.4%;
    text-align: center;
    border: 1px solid #999;
    list-style: none;
    float: left;
  }
  li img{
    width: 100%;
  }
  .hotPhone{
    width: 100%;
    background: rgb(240,240,240);
  }
  .GList{
    vertical-align: top;
    padding: 5px;
    display: inline-block;
    width: 47.2%;
    height: 250px;
    font-size: 13px;
    white-space:normal;
    word-wrap:break-word;
  }
  .GList p:nth-child(2){
    width: 80%;
    white-space:normal;
    word-wrap:break-word;
    margin: 0 auto;
  }
  .GList p:nth-child(3){
    width: 95%;
    height: 40px;
    font-size: 18px;
    color: red;
    margin-left: 15px;
  }
</style>
