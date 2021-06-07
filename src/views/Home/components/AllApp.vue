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
              <div class="dele-app" @click="operationApp(appList,'-')"><img src="../../../assets/images/jian.png" alt=""></div>
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
              <div class="app-list">
                <div v-for="(item, index) in allAppGroup.children" :key="index">
                  <div class="dele-app" @click="operationApp(item,'+')"><img src="../../../assets/images/jia.png" alt=""></div>
                  <div v-if="!item.children" class="app-item">
                    <a :href="item.link ? item.link : 'javascript:void(0);'"
                      :target="item.link ? '_blank' : ''">
                      <div>
                        <img :src="item.link ? item.appYesLinkImg : item.appNoLinkImg" alt="">
                        <span>{{item.appName}}</span>
                      </div>
                    </a>
                  </div>
                </div>
              </div>
            </div>
            <div class="app-list-son">
              <div  v-for="(item, index) in allAppSonLists" :key="index">
                <span>{{item.title}}</span>
                <div>
                  <div v-for="(itemSon, index) in item.children" :key="index" class="child-box">
                    <span>{{itemSon.title}}</span>
                    <ul>
                      <li v-for="(itemSonSon, index) in itemSon.children" :key="index" class="app-item">
                        <div class="dele-app" @click="operationApp(itemSonSon,'+')"><img src="../../../assets/images/jia.png" alt=""></div>
                        <a href="javascript:void(0);" @click="toLink(itemSon.link)">
                          <div>
                            <img :src="itemSonSon.link ? itemSonSon.appYesLinkImg : itemSonSon.appNoLinkImg" alt="">
                            <span>{{itemSonSon.appName}}</span>
                          </div>
                        </a>
                      </li>
                    </ul>
                  </div>
                </div>
                
              </div>
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
              appNoLinkImg: require("../../../assets/images/zhzt2.png"),
              appYesLinkImg: require("../../../assets/images/zhzt2.png"),
              link: ``,
            },
            {
              appName: "安全生产专题",
              appNoLinkImg: require("../../../assets/images/aqsc2.png"),
              appYesLinkImg: require("../../../assets/images/aqsc2.png"),
              link: ``,
            },
            {
              appName: "自然灾害专题",
              appNoLinkImg: require("../../../assets/images/zrzhzt2.png"),
              appYesLinkImg: require("../../../assets/images/zrzhzt2.png"),
              link: ``,
            },
            {
              appName: "应急救援专题",
              appNoLinkImg: require("../../../assets/images/yjjyzt2.png"),
              appYesLinkImg: require("../../../assets/images/yjjyzt2.png"),
              link: ``,
            },
          ],
        },
        
      ],
      allAppSonLists:[
        {
          title:'防范防治',
          children:[
            {
              title:'风险监测',
              children:[
                {
                  appName: "全要素信息管理",
                  appNoLinkImg: require("../../../assets/images/qysxx2.png"),
                  appYesLinkImg: require("../../../assets/images/qysxx2.png"),
                  link: ``,
                },
                {
                  appName: "全要素监测管理",
                  appNoLinkImg: require("../../../assets/images/qysjc2.png"),
                  appYesLinkImg: require("../../../assets/images/qysjc2.png"),
                  link: ``,
                }
              ]
            },
            {
              title:'风险防控',
              children:[
                {
                  
                  appName: "企业风险防控",
                  appNoLinkImg: require("../../../assets/images/qyfx2.png"),
                  appYesLinkImg: require("../../../assets/images/qyfx2.png"),
                  link: ``,
                },
                {
                  appName: "区域安全生产风险评价",
                  appNoLinkImg: require("../../../assets/images/qyaqsc2.png"),
                  appYesLinkImg: require("../../../assets/images/qyaqsc2.png"),
                  link: ``,
                },
                {
                  appName: "异常处置管理",
                  appNoLinkImg: require("../../../assets/images/yccz2.png"),
                  appYesLinkImg: require("../../../assets/images/yccz2.png"),
                  link: ``,
                },
                {
                  appName: "绩效评估管理",
                  appNoLinkImg: require("../../../assets/images/jxpg2.png"),
                  appYesLinkImg: require("../../../assets/images/jxpg2.png"),
                  link: ``,
                },
                {
                  appName: "协同监督管理",
                  appNoLinkImg: require("../../../assets/images/xtjd2.png"),
                  appYesLinkImg: require("../../../assets/images/xtjd2.png"),
                  link: ``,
                },
              ]
            },
          ]
        }
      ]
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
    },
    operationApp(data,isAddOrSub){
      switch(isAddOrSub){
        case '+':
          // console.log(data)
          this.allAppLists.forEach(item => {
            item.children.map((item2)=>{
              if(data.appName === item2.appName){
                this.$emit('onappadd',data);
                // item.children.splice(index,1);
              }
            })
          });
          this.allAppSonLists.forEach(item => {
            item.children.forEach(item2=>{
              item2.children.map((item3)=>{
                if(data.appName === item3.appName){
                  this.$emit('onappadd',data);
                  // item2.children.splice(index,1);
                }
              })
            })
          });
          break;
        case '-':
          // console.log(data)
          this.$emit('onappreduce',data)
          break;
      }
    },
  },
  mounted(){
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
          padding: 1rem 0rem;
          li{
            width: 20%;
            text-align: center;
            margin: 0.5rem 0;
            position: relative;
            &>.dele-app{
              width: 1.5rem;
              height: 1.5rem;
              color: #fff;
              // background-color: #F55545;
              position: absolute;
              top: -0.5rem;
              right: 0.5rem;
              border-radius: 50%;
              img{
                width: 1.5rem;
                height: 1.5rem;
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
        .app-list{
          display: flex;
          flex-wrap: wrap;
          background-color: #F5F5F5;
          padding: 1rem 0;
          &>div{
            width: 20%;
            position: relative;
            &>.dele-app{
              width: 1.5rem;
              height: 1.5rem;
              color: #fff;
              position: absolute;
              top: -0.5rem;
              right: 0.5rem;
              border-radius: 50%;
              img{
                width: 1.5rem;
                height: 1.5rem;
              }
            }
            .app-item{
              text-align: center;
              img{
                width: 4rem;
              }
              span{
                display: block;
              }
            }
          }
        }
        .app-list-son{
          &>div{
            margin: 1.5rem 0;
            &>span{
              font-size: 1.4rem;
              font-weight: 700;
            }
          }
          .child-box{
            &>span{
              color: #959595;
              font-size: 1.4rem;
              padding-left: 1rem;
              border-left: 0.4rem solid #3296fa;
              margin: 1rem 0;
              display: inline-block;
            }
            ul{
              display: flex;
              flex-wrap: wrap;
              background-color: #F5F5F5;
              padding: 1rem 0rem;
              li{
                width: 20%;
                text-align: center;
                margin: 0.5rem 0;
                position: relative;
                &>.dele-app{
                  width: 1.5rem;
                  height: 1.5rem;
                  color: #fff;
                  position: absolute;
                  top: -0.5rem;
                  right: 0.5rem;
                  border-radius: 50%;
                  img{
                    width: 1.5rem;
                    height: 1.5rem;
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
        }
      }
    }
  }
}
</style>