<template>
  <div class="app-list">
    <div class="al-wrapper">
      <ul>
        <li v-for="(appList,index) in appLists" :key="index">
          <div v-if="appList.link">
            <a href="javascript:;" @click="toLink(appList.link)">
              <img :src="appList.appYesLinkImg" alt="">
              <p>{{appList.appName}}</p>
            </a>
          </div>
          <div v-else>
            <a href="javascript:;">
              <img :src="appList.appNoLinkImg" alt="">
              <p>{{appList.appName}}</p>
            </a>
          </div>
        </li>
        <!-- <li class="app-more">
          <a href="javascript:;">
            <img src="../../../assets/images/zxgz2.png" alt="">
            <p>专项工作</p>
          </a>
        </li> -->
        <li class="app-more">
          <a href="javascript:;" @click="appMoreFn">
            <img src="../../../assets/images/gd.png" alt="">
            <p>定制</p>
          </a>
        </li>
      </ul>
    </div>
    <van-popup v-model="show" round position="bottom" :style="{ height: '90%' }">
      <all-app :app-lists="appLists" @onshowchonge="showChonge"  @onappadd="appAddFn" @onappreduce="appReduceFn"></all-app>
    </van-popup>
  </div>
</template>

<script>
import AllApp from './AllApp'
export default {
  components:{
    AllApp,
  },
  data(){
    return{
      show:false,
      appLists:[
        {
          appName:'信用管理',
          appNoLinkImg:require('../../../assets/images/xygl1.png'),
          appYesLinkImg:require('../../../assets/images/xygl2.png'),
          link:``,
        },
        {
          appName:'标准化管理',
          appNoLinkImg:require('../../../assets/images/bzhgl1.png'),
          appYesLinkImg:require('../../../assets/images/bzhgl2.png'),
          link:``,
        },
        {
          appName:'风险管控',
          appNoLinkImg:require('../../../assets/images/fxgk1.png'),
          appYesLinkImg:require('../../../assets/images/fxgk2.png'),
          link:``,
        },
        {
          appName:'隐患管理',
          appNoLinkImg:require('../../../assets/images/yhgl1.png'),
          appYesLinkImg:require('../../../assets/images/yhgl2.png'),
          link:``,
        },
        // {
        //   appName:'危化品运输',
        //   appNoLinkImg:require('../../../assets/images/whpys1.png'),
        //   appYesLinkImg:require('../../../assets/images/whpys2.png'),
        //   link:``,
        // },
        // {
        //   appName:'企业精准监管',
        //   appNoLinkImg:require('../../../assets/images/qyjz1.png'),
        //   appYesLinkImg:require('../../../assets/images/qyjz2.png'),
        //   link:``,
        // },
        // {
        //   appName:'区域精准督导',
        //   appNoLinkImg:require('../../../assets/images/qyjz1.png'),
        //   appYesLinkImg:require('../../../assets/images/qyjz2.png'),
        //   link:``,
        // },
        // {
        //   appName:'应急救援响应',
        //   appNoLinkImg:require('../../../assets/images/yjjy1.png'),
        //   appYesLinkImg:require('../../../assets/images/yjjy2.png'),
        //   link:``,
        // },
        // {
        //   appName:'专项工作',
        //   appNoLinkImg:require('../../../assets/images/zxgz2.png'),
        //   appYesLinkImg:require('../../../assets/images/zxgz2.png'),
        //   link:``,
        // },
      ],
    }
  },
  methods:{
    toLink(link){
      window.open(link,"_blank");
    },
    appMoreFn(){
      this.show = true;
    },
    showChonge(v){
      this.show = v;
    },
    appAddFn(data){
      // console.log(data)
      // this.appLists.filter(item=>item.appName === data.appName);

      if(this.appLists.filter(item=>item.appName === data.appName).length){
        this.$toast('应用已添加');
        // item.children.splice(index,1);
      }else{
        this.appLists.push(data);
      }
    },
    appReduceFn(data){
      console.log(data)
      // if(this.appLists.length <= 1){
      //   this.$toast('最少保留一个');
      // }
      this.appLists.forEach((item,index)=>{
        if(item.appName === data.appName){
          this.appLists.splice(index,1);
        }
      })
    }
  }
}
</script>

<style lang="less" scoped>
.app-list{
  z-index: 9999;
  .al-wrapper{
    width: 98%;
    background-color: #fff;
    margin: 0 auto;
    margin-top: -2rem;
    ul{
      height: 100%;
      display: flex;
      flex-wrap: wrap;
      padding: 2rem 1.2rem;
      align-content: space-between;
      li{
        text-align: center;
        width: 20%;
        img{
          width: 4rem;
          height: 4rem;
        }
      }
    }
  }
}
</style>