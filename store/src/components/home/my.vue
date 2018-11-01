<template>
    <div class="my">
      <div class="top">
        <div class="top-click">
          <p @click="login()"><img src="http://www.51mkf.com/wap/images/member_w.png" alt=""></p>
          <p @click="login()" style="height: 20px;margin: 0 auto">{{cLogin}}</p>
        </div>
        <div class="top-span">
          <span>商品收藏</span>
          <span>店铺收藏</span>
          <span>我的足迹</span>
        </div>
      </div>
      <!--我的订单-->
      <div class="myOrder">
        <div class="order">
          <span><img src="http://www.51mkf.com/wap/images/mc_01.png" alt=""> 我的订单</span>
          <span>查看全部订单></span>
        </div>
        <div class="state">
            <div>
              <p><img src="http://www.51mkf.com/wap/images/mcc_01.png" alt=""></p>
              <p>待付款</p>
            </div>
            <div>
              <p><img src="http://www.51mkf.com/wap/images/mcc_04.png" alt=""></p>
              <p>待发货</p>
            </div>
            <div>
              <p><img src="http://www.51mkf.com/wap/images/mcc_02.png" alt=""></p>
              <p>待收货</p>
            </div>
            <div>
              <p><img src="http://www.51mkf.com/wap/images/mcc_03.png" alt=""></p>
              <p>待自提</p>
            </div>
            <div>
              <p><img src="http://www.51mkf.com/wap/images/mcc_05.png" alt=""></p>
              <p>退款/退货</p>
            </div>
        </div>
      </div>
      <!--我的财产-->
      <div class="myMoney" style="background:rgb(245,245,245);margin-top: 10px;padding-bottom: 10px">
        <div class="order">
          <span><img src="http://www.51mkf.com/wap/images/mc_02.png" alt=""> 我的财产</span>
          <span>查看全部财产></span>
        </div>
      </div>
      <!--收货地址/设置-->
      <div class="address" style="background:rgb(245,245,245);margin-top: 10px">
        <div class="order" @click="goAddress">
          <span><img src="http://www.51mkf.com/wap/images/mc_02.png" alt=""> {{myAddress}}</span>
          <span>></span>
        </div>
        <div class="order">
          <span><img src="http://www.51mkf.com/wap/images/mc_02.png" alt=""> 用户设置</span>
          <span>></span>
        </div>
      </div>
      <!--退出登录-->
      <div class="tuichu" @click="tuichu">
        <p style="width: 100px;height: 30px;border: 1px solid black;margin:0 auto;line-height: 30px">退出登录</p>
      </div>
    </div>
</template>

<script>
    export default {
        name: "my",
        data(){
          return{
            cLogin:'点击登录',
            myAddress:'收货地址管理'
          }
        },
        methods:{
            login(){
              this.$router.push({
                path:'/login'
              })
            },
            goAddress(){
              this.$router.push({
                path:'/myAddress'
              })
            },
          tuichu(){
              localStorage.clear();
              this.cLogin="点击登录";
          }
        },
        mounted(){
          let key=JSON.parse(localStorage.getItem("id"));
          if(key==""||key==null){
            this.cLogin="点击登录";
          }else{
            this.cLogin=localStorage.id;
          }

          // if(this.$router){
          //   this.myAddress=this.$route.params.province+this.$route.params.city+this.$route.params.area;
          // }
        }
    }
</script>

<style scoped>
  .top{
    width: 100%;
    height: 242px;
    background: skyblue;
    position: relative;
  }
  .top-click{
    width: 100%;
    height: 70%;
    text-align: center;
  }
  .top-click p img{
    display: inline-block;
    margin-top: 15px;
    width: 50px;
    height: 50px;
  }
  .top-click>p:nth-child(1){
    position: absolute;
    top: 50px;
    left: 39.5%;
    width: 80px;
    height: 80px;
    border-radius: 100%;
    background: rgba(0,0,0,0.5);
  }
  .top-click p:nth-child(2){
    font-weight: bold;
    font-size: 20px;
    line-height: 285px;
  }
  .top-span{
    background: rgba(0,0,0,0.1);
  }
  .top-span span{
    display: inline-block;
    width: 32%;
    height: 68px;
    line-height: 110px;
    text-align: center;
    overflow: hidden;
  }
  .top-span span:nth-child(1){
    background-image: url(http://www.51mkf.com/wap/images/favorite_w.png);
    background-repeat: no-repeat;
    background-position: 50% 25%;
    background-size: 30%;
  }
  .top-span span:nth-child(2){
    background-image: url(http://www.51mkf.com/wap/images/store_w.png);
    background-repeat: no-repeat;
    background-position: 50% 25%;
    background-size: 30%;
  }
  .top-span span:nth-child(3){
    background-image: url(http://www.51mkf.com/wap/images/goods-browse_w.png);
    background-repeat: no-repeat;
    background-position: 50% 25%;
    background-size: 30%;
  }
  .myOrder{
    width: 100%;
    height: 125px;
    margin-top: 10px;
    background: rgb(245,245,245);
  }
  .order{
    margin: 0 auto;
    width: 95%;
    height: 50px;
    border-bottom: 1px solid rgb(180,180,180);
  }
  .order span{
    line-height: 50px;
    vertical-align: top;
  }
  .order span:nth-child(2){
    float: right;
  }
  .order img{
    width: 22px;
    height: 22px;
    margin-top: 13px;
  }
  .state{
    width: 95%;
    height: 40px;
    margin: 20px auto;
  }
  .state div{
    display: inline-block;
    width: 19%;
    text-align: center;
    vertical-align: top;
    font-size: 14px;
  }
  .state img{
    width: 22px;
    height: 22px;
  }
  .tuichu{
    margin-top: 10px;
    text-align: center;
  }
</style>
