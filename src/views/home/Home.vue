<template>
  <div id="home">
    <nav-bar class="home_nav"><div slot="center">首页</div></nav-bar>
    <home-swiper :banners="banners"></home-swiper>
    <recommend-views :recommends="recommends"></recommend-views>
    <feature-views></feature-views>
    <tab-control :titles="['流行','新款','精选']" class="tab-control"></tab-control>
    <goods-list :goods="goods['pop'].list"></goods-list>
  </div>
</template>

<script>

  import HomeSwiper from "./childComps/HomeSwiper";
  import RecommendViews from "./childComps/RecommendViews";
  import FeatureViews from "./childComps/FeatureViews";

  import NavBar from "components/common/navbar/NavBar";
  import TabControl from "../../components/content/tabControl/TabControl";
  // import Swiper from "../../components/common/swiper/Swiper";
  // import SwiperItem from "../../components/common/swiper/SwiperItem";

  import {getHomeMultidata,getHomeGoods} from "../../network/home";

  import GoodsList from "../../components/goods/GoodsList";
  export default {
    name: "Home",
    data(){
      return{
        // result:null
        banners:[],
        recommends:[],
        // titles:['流行','新款','精选']
        //数据模型
        goods:{
          'pop':{page:0,list:[]},
          'new':{page:0,list:[]},
          'sell':{page:0,list:[]},
        }
      }
    },
    components:{
      HomeSwiper,
      RecommendViews,
      FeatureViews,
      NavBar,
      TabControl,
      GoodsList
    },
    created() {
      //1.请求多个数据
      this.getHomeMultidata(),

      //2.请求商品数据
          //封装一层，留到methods里面调用
      this.getHomeGoods('pop');
      this.getHomeGoods('new');
      this.getHomeGoods('sell');
    },

    methods:{
      getHomeMultidata(){
        getHomeMultidata().then(res => {
          //this.result =res
          console.log(res);
          this.banners =res.data.data.banner;
          this.recommends =res.data.data.recommend.list
        })
      },

      getHomeGoods(type){
        //动态改变页码,当前页面+1
        const page =this.goods[type].page +1;
        getHomeGoods('pop',page).then(res => {
          console.log(res);
          this.goods[type].list.push(...res.data.data.list);
          this.goods[type].page += 1
        })
      },
    }
  }
</script>

<style scoped>
  #home{
    padding-top: 44px;
  }
  .home_nav{
    background-color: pink;
    color: #ef4562;
    position: fixed;
    left: 0;
    right: 0;
    top: 0;
    z-index: 9;
  }

  .tab-control{
    position: sticky;
    top:44px;
    z-index: 9;
  }
</style>