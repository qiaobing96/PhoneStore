<template>
    <div class="kind">
      <div class="left">
        <div v-for="(item,index) in wpList" :key="item.name" :class="{'active':index==checkindex}">
          <p @click="toggle(index)">{{item.name}}</p>
        </div>
      </div>
      <div class="right" :style="{'height':screenHeight+'px'}">
        <div v-for="(item,index) in goodsList" class="GList" @click="goList(index)">
          <img v-lazy="item.imgurl" alt="">
          <p>{{item.name}}{{item.descript}}</p>
          <p>￥{{item.price}}.00元</p>
        </div>
      </div>
    </div>
</template>

<script>
    import axios from "axios"
    import qs from 'qs'
    export default {
        name: "kind",
        data(){
          return {
            wpList:[
              {name:'全部'},
              {name:'华为'},
              {name:'荣耀'},
              {name:'VIVO'},
              {name:'OPPO'},
              {name:'IPHONE'}
            ],
            checkindex: 0,
            goodsList:'',
            screenHeight:''
          }
        },
        mounted(){
          let h = window.innerHeight || document.documentElement.clientHeight || document.body.clientHeight;
          this.screenHeight=h-64;
          axios.post("http://118.89.158.174/phone/goods.php",'type=0').then((res)=>{
            this.goodsList=res.data;
          });
        },
        methods:{
          toggle (index) {
            this.checkindex = index;
            axios.post("http://118.89.158.174/phone/goods.php",qs.stringify({
              type:index
            })).then((res)=>{
              this.goodsList=res.data;
            });
          },
          goList(index){
            this.$router.push({
              name:'list',
              params:{
                  id:index+1
              }
            })
          }
        }
    }
</script>

<style scoped>
  .kind{
    padding-bottom: 64px;
  }
  .left,.right{
    display: inline-block;
    vertical-align:top;
  }
  .left{
    width: 20%;
  }
  .right{
    width: 78.5%;
    overflow: scroll;
    white-space:normal;
    word-wrap:break-word;
  }
  .left p{
    width: 100%;
    height: 50px;
    line-height: 50px;
    text-align: center;
    font-size: 15px;
  }
  .active{
    color: rgb(207,87,101);
    border-bottom: 3px solid rgb(207,87,101);
  }
  .GList{
    display: inline-block;
    width: 49.5%;
    font-size: 15px;
    vertical-align: top;
    margin-top: 10px;
  }
  .GList p{
    margin-left: 16px;
  }
  .GList p:nth-child(3){
    width: 100%;
    height: 40px;
    font-size: 18px;
    color: red;
  }
  .GList img{
    width: 100%;
    display: inline-block;
  }
</style>
