<template>
  <div class="all-app">
    <div class="app-operation">
      <span @click="ok">取消</span>
      <span>服务定制</span>
      <span @click="ok">确定</span>
    </div>
    <div class="app-container">
      <div class="ac-wrapper">
        <div class="meapp">
          <div>我的服务</div>
          <ul>
            <li v-for="(appList,index) in appLists" :key="index">
              <div class="dele-app"><van-icon name="minus" /></div>
              <div v-if="appList.link">
                <a href="javascript:;" @click="toLink(appList.link)">
                  <img :src="appList.appYesLinkImg" alt="">
                  <span>{{appList.appName}}</span>
                </a>
              </div>
              <div v-else>
                <a href="javascript:;">
                  <img :src="appList.appNoLinkImg" alt="">
                  <span>{{appList.appName}}</span>
                </a>
              </div>
            </li>
          </ul>
        </div>
        <!-- 其他app -->
        <div class="other-app">
          <div class="app-group">
            <div v-for="(allAppGroup, index) in allAppLists" :key="index">
              <div class="app-group-title">
                <span>{{allAppGroup.title}}</span>
              </div>
              <!-- <div class="app-list">
                <div v-for="(item, index) in allAppGroup.children" :key="index">
                  <div v-if="!item.children" class="app-item">
                    <a :href="item.link ? item.link : 'javascript:void(0);'"
                      :target="item.link ? '_blank' : ''">
                      <div>
                        <img :src="item.link ? item.appYesLinkImg : item.appNoLinkImg" alt="">
                        <span>{{item.appName}}</span>
                      </div>
                    </a>
                  </div>
                  <div v-if="item.children" class="item-son">
                    <span>{{item.title}}</span>
                    <div>
                      <div v-for="(itemSon, index) in item.children" :key="index" class="app-item">
                        <a href="javascript:void(0);" @click="toLink(itemSon.link)">
                          <div>
                            <img :src="itemSon.link ? itemSon.appYesLinkImg : itemSon.appNoLinkImg" alt="">
                            <span>{{itemSon.appName}}</span>
                          </div>
                        </a>
                      </div>
                    </div>
                  </div>
                  
                </div>
              </div> -->
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "AllApp",
  props:{
    appLists:{
      type:Array,
    }
  },
  computed:{
    
  },
  data() {
    return {
      allAppLists: [
        {
          title: "综合驾驶舱",
          children: [
            {
              appName: "综合专题",
              appNoLinkImg: require("../../../assets/images/zxgz2.png"),
              appYesLinkImg: require("../../../assets/images/zxgz2.png"),
              link: ``,
            },
            {
              appName: "综合专题",
              appNoLinkImg: require("../../../assets/images/zxgz2.png"),
              appYesLinkImg: require("../../../assets/images/zxgz2.png"),
              link: ``,
            },
            {
              appName: "综合专题",
              appNoLinkImg: require("../../../assets/images/zxgz2.png"),
              appYesLinkImg: require("../../../assets/images/zxgz2.png"),
              link: ``,
            },
            {
              appName: "综合专题",
              appNoLinkImg: require("../../../assets/images/zxgz2.png"),
              appYesLinkImg: require("../../../assets/images/zxgz2.png"),
              link: ``,
            },
          ],
        },
        {
          title:'防范防治',
          children:[
            {
              title:'风险监测',
              children:[
                {
                  appName: "全要素信息管理",
                  appNoLinkImg: require("../../../assets/images/zxgz2.png"),
                  appYesLinkImg: require("../../../assets/images/zxgz2.png"),
                  link: ``,
                },
                {
                  appName: "全要素信息管理",
                  appNoLinkImg: require("../../../assets/images/zxgz2.png"),
                  appYesLinkImg: require("../../../assets/images/zxgz2.png"),
                  link: ``,
                }
              ]
            }
          ]
        }
      ],
      allAppSonLists:[]
    };
  },
  methods: {
    toLink(link){
      if(link){
        window.open(link,'_blank');
      }
    },
    ok(){
      this.$emit('onshowchonge',false);
    }
  },
};
</script>

<style lang="less" scoped>
.all-app {
  .app-operation {
    height: 4.3rem;
    border-bottom: 0.1rem solid #f3f3f3;
    display: flex;
    justify-content: space-between;
    align-items: center;
    font-size: 1.7rem;
    padding: 0 1.5rem;
    span:nth-child(2) {
      font-weight: 700;
    }
  }
  .app-container {
    padding: 0 1.5rem;
    .ac-wrapper {
      .meapp{
        &>div{
          font-size: 1.4rem;
          font-weight: 700;
          margin: 1.5rem 0;
        }
        ul{
          display: flex;
          flex-wrap: wrap;
          background-color: #F5F5F5;
          padding: 1rem 1.5rem;
          li{
            width: 20%;
            text-align: center;
            margin: 0.5rem 0;
            position: relative;
            &>.dele-app{
              width: 1.5rem;
              height: 1.5rem;
              color: #fff;
              background-color: #F55545;
              position: absolute;
              top: -0.5rem;
              right: 0.5rem;
              border-radius: 50%;
              .van-icon-minus{
                margin-top: 0.2rem;
              }
            }
            img{
              width: 4rem;
            }
            span{
              display: inline-block;
              width: 5rem;
              color: #959595;
            }
          }
        }
      }
      .other-app{
        .app-group{
          .app-group-title{
            margin: 1.5rem 0;
            font-size: 1.4rem;
            font-weight: 700;
          }

        }
      }
    }
  }
}
</style>