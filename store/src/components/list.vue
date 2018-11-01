<template>
  <div class="list">
    <!--头部返回-->
    <div class="header">
      <p @click="home()"><img src="http://www.51mkf.com/wap/images/arrow_left_r.png" alt=""></p>
      <p><img src="http://www.51mkf.com/wap/images/more_r.png" alt=""></p>
    </div>
    <!--主要详情-->
    <div class="mainList" style="overflow: scroll;height: 550px;">
      <div v-for="item in goodList">
        <img :src="item.imgurl" alt="">
        <dl class="name">
          <dt>{{item.name}}{{item.descript}}</dt>
        </dl>
        <p>￥{{item.price}}.00元 <span>销量:{{item.onsale}}件</span></p>
      </div>
      <div class="choose">
        <div class="goods-detail-item">
          <div>送至</div>
          <div>{{myAddress}}</div>
        </div>
        <div class="goods-detail-item">
          <div>自提</div>
          <div>选择有现货的门店下单,可立即提货</div>
        </div>
        <div class="goods-detail-item">
          <div>已选</div>
          <div class="type">
            <p>颜色:亮黑色</p>
            <p>内存:64G</p>
          </div>
        </div>
        <div class="goods-detail-item">
          <div style="vertical-align: top;">服务</div>
          <div>
            <p>由"官方自营"销售和发货,并享受售后服务</p>
            <div class="sever">
              <div style="color: red"><img src="http://www.51mkf.com/data/upload/shop/contracticon/7day_60.gif" alt="">门店保证</div>
              <div><img src="http://www.51mkf.com/data/upload/shop/contracticon/pz_60.gif
" alt="">正品承诺</div>
              <div><img src="http://www.51mkf.com/data/upload/shop/contracticon/psbf_60.gif" alt="">全国联保</div>
              <div><img src="http://www.51mkf.com/data/upload/shop/contracticon/jswl_60.gif" alt="">极速物流</div>
            </div>
          </div>
        </div>
      </div>
      <!--好评-->
      <div class="goods-detail-item good">
        <div>商品评价</div>
        <div style="color: red;font-size: 13px">好评率100%</div>
      </div>
    </div>
    <!--底部-->
    <div class="bottom">
      <div>
        <p><img src="http://www.51mkf.com/wap/images/kefu_b.png" alt=""></p>
        <p>客服</p>
      </div>
      <div @click="goCar()">
        <p><img src="http://www.51mkf.com/wap/images/cart_b.png" alt=""></p>
        <p>购物车</p>
      </div>
      <div @click="goCar()">立即购买</div>
      <div @click="joinCar()">加入购物车</div>
    </div>
  </div>
</template>

<script>
  import axios from "axios"
  import qs from 'qs'
  export default {
    name: "list",
    data(){
      return {
        goodList:'',
        myAddress:'北京 北京市 东城区',
      }
    },
    mounted(){
      let type=this.$route.params.id;
      axios.post("http://118.89.158.174/phone/list.php",'type='+type).then((res)=>{
        this.goodList=res.data;
      });
    },
    methods:{
      home(){
        this.$router.push({
          path:'/homeDetail'
        })
      },
      goCar(){
        this.$router.push({
          name:'car'
        })
      },
      joinCar(){
        this.$toast.center('加入购物车成功');
        let that=this;
        axios.post("http://118.89.158.174/phone/car.php",qs.stringify({
          type:0,
          gid:that.goodList[0].id,
          uid:localStorage.id
        })).then((res)=>{

        });
      }
    }
  }
</script>

<style scoped>
  .list{
    position: relative;
  }
  .header{
    width: 100%;
    height: 50px;
    position: relative;
  }
  .header p{
    height: 30px;
    width: 30px;
    display: inline-block;
    border: 1px solid #999;
    background: #fff;
    border-radius: 50%;
    text-align: center;
  }
  .header p:nth-child(1){
    position: absolute;
    top: 10px;
    left: 10px;
  }
  .header p:nth-child(2){
    position: absolute;
    top: 10px;
    right: 10px;
  }
  .header img{
    width: 22px;
    height: 22px;
    margin-top: 4px;
  }
  .mainList{
    width: 100%;
  }
  .mainList img{
    width: 100%;
  }
  .name dt{
    margin-left: 15px;
  }
  .mainList div p:nth-child(3){
    margin-left: 15px;
    font-size: 25px;
    color: red;
  }
  .mainList div p:nth-child(3) span{
    font-size: 15px;
    color: black;
    float: right;
    margin-right: 10px;
  }
  .choose{
    width: 100%;
  }
  .choose dt{
    border-bottom: 1px solid rgb(237,237,237);
    width:100%;
    height: 40px;
    margin: 0 auto;
  }
  .goods-detail-item{
    position: relative;
    padding: 0.6rem;
    background: #FFF;
    border-bottom: solid 0.05rem #EEE;
  }
  .goods-detail-item div{
    display: inline-block;
    font-size: 15px;
  }
  .goods-detail-item div:nth-child(1){
    color: #666;
  }
  .type p{
    text-align: center;
    font-size: 13px;
    width: 74px;
    display: inline-block;
    border: 1px solid black;
  }
  .sever img{
    width:13px;
    height: 13px;
  }
  .sever{
    font-size: 10px;
    color: red;
  }
  .good{
    margin: 10px 0;
  }
  .bottom{
    width: 99.5%;
    height: 64px;
    border: 1px solid rgb(238,225,178);
    background: rgb(246,246,246);
    text-align: center;
  }
  .bottom div{
    display: inline-block;
    vertical-align: middle;
  }
  .bottom div:nth-child(1),.bottom div:nth-child(2){
    width: 15%;
  }
  .bottom div:nth-child(3),.bottom div:nth-child(4){
    height: 100%;
    width: 33%;
    line-height: 64px;
    font-size: 20px;
  }
  .bottom img{
    width: 20px;
    height: 20px;
  }
  .bottom div:nth-child(3){
    background: rgb(207,86,100);
  }
  .bottom div:nth-child(4){
    background: rgb(213,109,85);
  }
</style>

