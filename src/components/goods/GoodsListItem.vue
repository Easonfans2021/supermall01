<template>
  <div class="goods-item">
    <img :src="goodsItem.show.img" alt="">
    <div class="goods-info">
      <p>{{goodsItem.title}}</p>
      <span class="price">{{goodsItem.price}}</span>
      <span class="collect">{{goodsItem.cfav}}</span>
    </div>
  </div>
</template>

<script>
  export default {
    name: "GoodsListItem",
    props:{
      goodsItem:{
        type:Object,
        default(){
          return {}
        }
      }
    }
  }
</script>

<style scoped>
  .goods-item {
    padding-bottom: 40px;
    width: 48%;
  }
  .goods-item img{
    width: 100%;
    height: auto;
    border-radius: 4px;
  }
  .goods-item price {
    display: flex;
    justify-content: space-between;
    margin: 6px 0;
  }

</style>