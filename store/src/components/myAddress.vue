<template>
    <div class="myAddress">
      <v-distpicker type="mobile" @province="onChangeProvince" @city="onChangeCity" @area="onChangeArea"></v-distpicker>
      <button @click="back()">确定</button>
    </div>
</template>

<script>
    export default {
        name: "myAddress",
        data(){
            return{
              province:'',
              city:'',
              area:''
            }
        },
       mounted(){
       },
       methods:{
         back(){
           this.$router.push({
             name:'my',
             params:{
                province:this.province.value,
                city:this.province.value,
                area:this.area.value
             }
           })
         },
         onChangeProvince(a){
            this.province=a;
         },
         onChangeCity(b){
           this.city=b;
         },
         onChangeArea(c){
           this.area=c;
         },
       }
    }
</script>

<style scoped>
    button{
      display: block;
      width: 70%;
      height: 50px;
      border: 1px solid black;
      margin: 0 auto;
    }
</style>
