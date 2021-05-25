<!-- 首页 -->
<template>
  <div class="home">
    <div class="title">
      <div class="title-bj">
        <div class="user-info">
          <div class="left">
            市应急管理局
          </div>
          <div class="right">
            上午好，刘国伟
          </div>
        </div>
        <div class="day-duty">
          <div class="duty-bj">
            <div class="top-wrapper">
              <!-- 今日值班 -->
              <div class="left-duty">
                <div class="duty-choice">
                  <div>
                    <img src="../../assets/images/rili.png" alt="">
                    <span>今日值班</span>
                  </div>
                  <div>
                    <span :class="{'active':dutyActive==0}" @click="ductChange(0)">白班</span> |
                    <span :class="{'active':dutyActive==1}" @click="ductChange(1)">夜班</span>
                  </div>
                </div>
                <div class="duty-content">
                  <div class="day" v-show="dutyActive==0">
                    <table cellspacing="0">
                      <thead>
                        <tr>
                          <td>值班领导</td>
                          <td>值班班长</td>
                          <td>值班人员</td>
                          <td>备勤司机</td>
                        </tr>
                      </thead>
                      <tbody>
                        <tr>
                          <td>{{dayShiftDatas.day1}}</td>
                          <td>{{dayShiftDatas.day2}}</td>
                          <td>{{dayShiftDatas.day3}}</td>
                          <td>{{dayShiftDatas.day4}}</td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                  <div class="night" v-show="dutyActive==1">
                    <table cellspacing="0">
                      <thead>
                        <tr>
                          <td>值班领导</td>
                          <td>值班班长</td>
                          <td>值班人员</td>
                          <td>备勤司机</td>
                        </tr>
                      </thead>
                      <tbody>
                        <tr>
                          <td>{{nightShiftDatas.night1}}</td>
                          <td>{{nightShiftDatas.night2}}</td>
                          <td>{{nightShiftDatas.night3}}</td>
                          <td>{{nightShiftDatas.night4}}</td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </div>
              </div>
              <!-- 应急响应 -->
              <div class="right-emergency">
                <div class="re-wrapper">
                  <div class="re-top">
                    <span>应急响应</span>
                  </div>
                  <div class="re-buttom">
                    <div>
                      <p>干旱</p>
                      <p>二级</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div class="buttom-notice">
              <img src="../../assets/images/xxts.png" alt="">
              <img src="../../assets/images/ggl.png" alt="">
              <span>暂无公告</span>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="home-wrapper">
      <!-- 应用 -->
      <div class="home-apply">
        <app-list></app-list>
      </div>
      <!-- 待办提醒 -->
      <div class="home-remind">
        <div class="hr-left">
          <img src="../../assets/images/dbtx.png" alt="">
        </div>
        <div class="hr-right">
          <div>待办总计：<span>18</span></div>
          <div>未读：<span>17</span></div>
          <div>已读：<span>0</span></div>
          <div><van-icon name="arrow" /></div>
        </div>
      </div>
      <!-- 学习强安 -->
      <div class="home-learning">
        <div class="hl-wrapper">
          <img src="../../assets/images/xxqa.png" alt="">
        </div>
      </div>
      <!-- 查询统计 -->
      <div class="home-selecount">
        <div class="hs-wrapper">
          <div class="hs-title">
            <span>查询统计</span>
          </div>
          <div class="hs-content">
            <div class="info-select">
              <div class="is-left">
                <img src="../../assets/images/xx.png" alt="">
              </div>
              <div class="is-right" @click="infoSelectFn">
                <p>信息查看</p>
                <p>提供企业基本信息、安全生产要素信息的查看信息查看</p>
              </div>
            </div>
            <div class="count-analysis">
              <div class="is-left">
                <img src="../../assets/images/tongji.png" alt="">
              </div>
              <div class="is-right" @click="countAnalysisFn">
                <p>统计分析</p>
                <p>提供安全生产风险管控指数及各类统计图表分析</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import AppList from './components/AppList'
export default {
  name: 'Home',
  components: {
    AppList,
  },
  data(){
    return{
      dayShiftDatas:{
        day1:'杨利伟',
        day2:'杨利伟',
        day3:'杨利伟',
        day4:'杨利伟',
      },
      nightShiftDatas:{
        night1:'张三',
        night2:'张三',
        night3:'张三',
        night4:'张三',
      },
      dutyActive:0, //0 白班  1 夜班
    }
  },
  methods:{
    ductChange(v){
      this.dutyActive = v;
    },

    infoSelectFn(){
      
    },
    countAnalysisFn(){
      
    }
  }
}
</script>
<style lang="less" scoped>
.home{
  .home-wrapper{
    padding: 7.5rem 1.5rem 1.5rem 1.5rem;
    .home-remind{
      height: 4.4rem;
      background-color: #fff;
      margin-top: 1.5rem;
      display: flex;
      justify-content: space-between;
      align-items: center;
      .hr-left{
        margin-top: 0.4rem;
        img{
          width: 8rem;
          height: 2.8rem;
        }
      }
      .hr-right{
        display: flex;
        &>div{
          margin-right: 1.5rem;
          &:nth-child(1)>span{
            color: #009DFA;
          }
          &:nth-child(2)>span{
            color: #FF9B00;
          }
          &:nth-child(3)>span{
            color: #00C36F;
          }
        }
        .van-icon{
          vertical-align: text-bottom;
        }
      }
    }
    .home-learning{
      margin-top: 1.5rem;
      img{
        height: 9rem;
      }
    }
    .home-selecount{
      height: 16.6rem;
      background-color: #fff;
      margin-top: 1.5rem;
      .hs-wrapper{
        padding:1.5rem 1.2rem 1.2rem 1.2rem;
        .hs-title{
          margin-bottom: 1.2rem;
          font-size: 1.5rem;
          font-weight: 700;
        }
        .hs-content{
          display: flex;
          flex-direction: column;
          &>div{
            flex: 1;
          }
          .info-select,.count-analysis{
            display: flex;
            .is-left{
              margin-right: 1.1rem;
              img{
                width: 1.9rem;
                height: 2.2rem;
              }
            }
            .is-right{
              border-bottom: 0.1rem solid #e9e9e9;
              padding-bottom: 1.5rem;
              line-height: 2.2rem;
              p:first-child{
                font-size: 1.4rem;
              }
              p:last-child{
                color: #9a9a9a;
              }
            }
          }
          .count-analysis{
              margin-top: 1rem;

            .is-left{
              img{
                width: 2.2rem;
                height: 2.2rem;
              }
            }
            .is-right{
              border-bottom: none;
              padding-bottom: 0;
            }
          }
        }
      }
    }
  }
  .title{
    .title-bj{
      height: 16.45rem;
      padding: 1.5rem;
      background-color: #3296FA;
      position: relative;
      .user-info{
        display: flex;
        justify-content: space-between;
        color: #fff;
        .left{
          font-size: 2rem;
          font-weight: 700;
        }
        .right{
          font-size: 1.6rem;
        }
      }
      .day-duty{
        margin-top: 1.15rem;
        .duty-bj{
          height: 17.9rem;
          background: url('../../assets/images/di.png') no-repeat;
          background-size: 100% 100%;
          .top-wrapper{
            padding:2.5rem 1.2rem 1.2rem 1.2rem;
            display: flex;
            .left-duty{
              flex: 3;
              .duty-choice{
                display: flex;
                justify-content: space-between;
                align-items: center;
                &>div:first-child{
                  padding-top: 0.1rem;
                  img{
                    width: 1.6rem;
                    height: 1.6rem;
                    margin-top: 0.2rem;
                  }
                  span{
                    font-size: 1.6rem;
                    margin-left: 0.5rem;
                    font-weight: 700;
                  }
                }
                &>div:last-child{
                  color: #1F1F1F;
                  span{
                    font-size: 1.35rem;
                    vertical-align: middle;
                    color: #333;
                    &.active{
                      color: #3296FA;
                    }
                  }
                }
              }
              .duty-content{
                margin-top: 0.8rem;
                table{
                  width: 100%;
                  text-align: center;
                  tr td{
                    background: #F5F5F5;
                    border: 1px solid #fff;
                    height: 3.5rem;
                  }
                  thead{
                    color: #1F1F1F;
                    tr td{
                      color: #9a9a9a;
                    }
                  }
                }
              }
            }
            .right-emergency{
              flex: 1;
              .re-wrapper{
                height: 99%;
                width: 7rem;
                background: url('../../assets/images/yj.png') no-repeat;
                background-size: 100% 100%;
                margin-top: 0.4rem;
                margin: 0 auto;
                .re-top{
                  font-size: 1.4rem;
                  color: #fff;
                  text-align: center;
                  height: 3.4rem;
                  line-height: 3.4rem;
                }
                .re-buttom{
                  height: 6.5rem;
                  display: flex;
                  justify-content: center;
                  align-items: center;
                  &>div{
                    text-align: center;
                  }
                  & p:first-child{
                    font-size: 1.7rem;
                    font-weight: 700;
                  }
                  & p:last-child{
                    font-size: 1.2rem;
                    color: #FF9F00;
                  }
                }
              }
            }
          }
          .buttom-notice{
            height: 4rem;
            margin-left: 1.2rem;
            display: flex;
            align-items: center;
            img{
              // width: 1.65rem;
              height: 1.35rem;
              margin-right: 0.85rem;
            }
            span{
              font-size: 1.4rem;
              color: #9a9a9a;
            }
          }
        }
      }
    }
  }
}
</style>