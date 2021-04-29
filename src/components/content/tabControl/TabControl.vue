<template>
<!--  文字模块都不同时才预留插槽，只有文字不同不需要预留插槽-->
  <div class="tab-control">
    <div v-for="(item,index) in titles" class="tab-control-item"
         :class="{active:index===currentIndex}" @click="itemClick(index)">
      <span>{{item}}</span>
    </div>
  </div>
</template>

<script>
  export default {
    name: "TabControl",
    props:{
      titles:{
        type:Array,
        default(){
          return []
        }
      }
    },

    data(){
      return{
        currentIndex:0
      }
    },

    methods:{
      itemClick(index){
        this.currentIndex = index;
      }
    }
  }
</script>

<style scoped>
/*<!--  大盒子用display-->*/
  .tab-control{
    display: flex;
    /*让每个模块都居中，儿子可以继承*/
    text-align: center;
    background-color: #E4E4E4;
  }
  /*子组件用flex:1*/
  .tab-control-item{
    flex: 1;
    height: 40px;
    /*line-height没有文字无法撑起行高*/
    line-height: 40px;
    font-size: 15px;
  }

  .tab-control-item span{
    padding: 5px;
  }

  .active span{
    color: red;
    border-bottom: 3px solid  pink;
  }
</style>