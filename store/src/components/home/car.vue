<template>
    <div class="car">
        <div class="header">购物车</div>
        <div class="main" :style="{'height':screenHeight+'px'}">
          <div v-if="empty" class="empty">
            <p><img src="http://www.51mkf.com/wap/images/cart_w.png" alt=""></p>
            <p>您的购物车还是空的</p>
            <p>去挑一些中意的商品吧</p>
            <p @click="goHome">随便逛逛</p>
          </div>
          <div v-for="(item,index) in goodList[0]"  class="oneGood" v-if="showCar">
            <div>
              <div @click="opposite(index)"><el-checkbox style="margin-left: 10px;" v-model="allChoose[index]" ></el-checkbox></div>
              <div style="margin-top: 25px"><img :src="item.imgurl" alt=""></div>
            </div>
            <div>
              <p style="font-size: 13px;color: red">{{item.name}}</p>
              <p style="font-size: 13px;">{{item.descript}}</p>
              <p style="font-size: 15px;color: red;margin-top: 5px">{{item.price}}</p>
            </div>
            <div style="vertical-align: top;width: 30.8%;height: 100%;margin-left: -33px;color:#666">
              <p class="count"><el-input-number size="mini" v-model="count[index]" :min="1" @change="handleChange"></el-input-number></p>
              <p style="float: right"><i class="el-icon-delete" @click="C(index)"></i></p>
              <p style="font-size: 13px;color:orangered;margin-left: 30px">全场包邮</p>
              <p style="margin-top: 20px;margin-left: 15px">更多信息></p>
              <p style="margin-top: 10px;margin-left: 15px">查看优惠</p>
            </div>
          </div>
        </div>
        <!--总计-->
        <div class="All">
          <div style="text-align: center;width: 20%;margin-top: 15px;font-size: 15px ">
            <el-checkbox v-model="choose">全选 总计:{{allNum}}件</el-checkbox>
          </div>
          <div>
            结算 {{allMoney}}元
          </div>
        </div>
    </div>
</template>

<script>
    import axios from "axios"
    import qs from 'qs'
    export default {
        data(){
          return{
            goodList:[],
            num:1,
            count:[],
            allMoney:0,
            allNum:0,
            empty:false,
            allChoose:[],
            choose:true,
            screenHeight:'',
            showCar:false
          }
        },
        name: "car",
        mounted(){
          let h = window.innerHeight || document.documentElement.clientHeight || document.body.clientHeight;
          this.screenHeight=h-165;
          let key=JSON.parse(localStorage.getItem("id"));
          if(key==""||key==null){
              this.empty=true;
              this.allMoney=0;
              this.allNum=0;
          }else{
            this.showCar=true;
            //请求商品详细信息
            axios.post("http://118.89.158.174/phone/findcar.php",qs.stringify({
              type:1,
              uid:localStorage.id
            })).then((res)=>{
              for(let i=0;i<res.data[0].length;i++){
                this.allChoose.push(res.data[0][i].checked);
              }
              //将数据库中的值转为boolean值
              for(let i=0;i<this.allChoose.length;i++){
                this.allChoose[i]=true;
              }
              this.goodList=res.data;
              this.count=res.data[1];
              if(res.data==0){
                this.empty=true;
              }else {
                //计算商品总数和价格
                let x=0;
                let y=0;
                if(this.count!==''){
                  for(let i=0;i<this.count.length;i++){
                    y+=this.count[i]*this.goodList[0][i].price;
                    x+=this.count[i];
                  }
                  this.allNum=x;
                  this.allMoney=y;
                }
              }
            });
          }

        },
        methods:{
          //点击清除购物车商品
          C(index){
            axios.post("http://118.89.158.174/phone/car.php",qs.stringify({
              type:2,
              uid:localStorage.id,
              gid:this.goodList[0][index].id
            })).then((res)=>{
              //计算商品总数
              let x=0;
              let y=0;
              for(let i=0;i<this.count.length;i++){
                x+=this.count[i];
                y+=this.count[i]*this.goodList[0][i].price;
              }
              this.allNum=x;
              this.allMoney=y;
            });
            if(this.goodList!==''){
              this.goodList[0].splice(index,1);
              this.count.splice(index,1);
              if(this.goodList[0].length==0){
                this.empty=true;
              }
            }
          },
          handleChange(value,index){
            this.allMoney=value;
            let x=0;
            let y=0;
            for (let i = 0; i < this.count.length; i++) {
              x+=this.count[i];
              y+=this.count[i]*this.goodList[0][i].price;
            }
            this.allNum=x;
            this.allMoney=y;
          },
          goHome(){
            this.$router.push({
              path:'/homeDetail'
            })
          },
          //反选
          opposite(index){
            this.choose=false;
          }
        }
    }
</script>

<style scoped>
  .header{
    width: 100%;
    height: 50px;
    text-align: center;
    line-height: 50px;
    font-size: 20px;
    color: red;
  }
  .main{
    width: 99.6%;
    overflow: scroll;
  }
  .oneGood{
    width: 99.5%;
    height:150px;
    background: rgb(245,245,245);
    position: relative;
  }
  .oneGood img{
    width:100px;
    height:100px;
  }
  .oneGood div{
    vertical-align: middle;
    display: inline-block;
  }
  .oneGood>div:nth-child(1){
    width: 35%;
    height: 100%;
  }
  .oneGood>div:nth-child(2){
    width: 40%;
    height:100%;
  }
  .All{
    width: 99.5%;
    height: 50px;
    border: 1px solid black;
    position: relative;
  }
  .oneGood>div:nth-child(2) p{
    width: 120px;
  }
  .oneGood>div:nth-child(2) p:nth-child(1){
    margin-top: 35px;
  }
  .count{
    position: absolute;
    bottom: 5px;
    right: 5px;
  }
  .All div{
    display: inline-block;
  }
  .All div:nth-child(2){
    width: 40%;
    height: 100%;
    background: rgb(173,38,35);
    vertical-align: top;
    text-align: center;
    line-height: 50px;
    font-size: 15px;
    position: absolute;
    right: 0;
  }
  .empty{
    text-align: center;
    margin-top: 100px;
  }
  .empty img{
    width: 40px;
    height: 40px;
    margin-top: 10px;
  }
  .empty p{
    margin-top: 10px;
  }
  .empty p:nth-child(1){
    width: 60px;
    height: 60px;
    border: 1px solid rgb(220,220,220);
    background: rgb(220,220,220);
    margin: 0 auto;
    border-radius: 50%;
  }
  .empty p:nth-child(2){
    font-size: 18px;
  }
  .empty p:nth-child(3){
    font-size: 13px;
    color: #666;
  }
  .empty p:nth-child(4){
    margin: 10px auto;
    width: 80px;
    height: 30px;
    border: 1px solid #999;
    line-height: 30px;
  }
</style>
