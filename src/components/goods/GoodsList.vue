<template>
  <div class="goods">
    <goods-list-item v-for="item in goods" :goods-item="item"></goods-list-item>
<!--    {{goods}}-->
  </div>
</template>

<script>
  import GoodsListItem from "./GoodsListItem";
  export default {
    name: "GoodsList",
    props:{
      goods:{
        type:Array,
        default(){
          return []
        }
      }
    },
    components:{
      GoodsListItem
    }
  }
</script>

<style scoped>
 .goods{
   display: flex;
   /*包裹*/
   flex-wrap: wrap;
   /*均等分*/
   justify-content: space-around;
 }
</style>