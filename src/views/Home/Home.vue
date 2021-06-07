<!-- 首页 -->
<template>
  <div class="home">
    <div class="title">
      <div class="title-bj">
        <div class="user-info">
          <div class="left">市应急管理局</div>
          <div class="right">上午好，刘国伟</div>
        </div>
       
      </div>
    </div>
    <div class="home-wrapper">
      <!-- 应用 -->
      <div class="home-apply">
        <app-list></app-list>
      </div>
      <div class="remind-wrapper">
        <!-- 待办提醒 -->
        <div class="home-remind">
          <div class="hr-left">
            <!-- <img src="../../assets/images/dbtx.png" alt="" /> -->
            <span>待办提醒</span>
          </div>
          <div class="hr-right">
            <div>待办总计：<span>18</span></div>
            <div>未读<span>17</span></div>
            <div>已读<span>0</span></div>
          </div>
        </div>
        <div class="hr-container">
          <ToDoReminderNew></ToDoReminderNew>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import AppList from "./components/AppList";
import ToDoReminderNew from "./components/ToDoReminderNew";
export default {

  name: "Home",
  components: {
    AppList,
    ToDoReminderNew,
  },
  data() {
    return {
      dayShiftDatas: {
        day1: "杨利伟",
        day2: "杨利伟",
        day3: "杨利伟",
        day4: "杨利伟",
      },
      nightShiftDatas: {
        night1: "张三",
        night2: "张三",
        night3: "张三",
        night4: "张三",
      },
      dutyActive: 0, //0 白班  1 夜班
    };
  },
  methods: {
    ductChange(v) {
      this.dutyActive = v;
    },

    toLink(link){
      this.$router.push(link);
      // this.$router.push("Information");
    },
  },
};
</script>
<!-- new -->
<style lang="less" scoped>
.home {
  .home-wrapper {
    // padding: 7.5rem 1.5rem 1.5rem 1.5rem;
    .remind-wrapper{
      padding: 0 1.2rem;
    }
    .home-remind {
      height: 4.4rem;
      background-color: #fff;
      margin-top: 1.5rem;
      display: flex;
      justify-content: space-between;
      align-items: center;
      .hr-left {
        span{
          display: inline-block;
          height: 3rem;
          line-height: 3rem;
          font-size: 1.4rem;
          font-weight: 700;
          padding-left: 1.3rem;
          border-left: solid 0.4rem #e2303c;
        }
      }
      .hr-right {
        display: flex;
        position: relative;
        & > div {
          margin-right: 1.5rem;
          color: #999;
          &:nth-child(1){
            position: absolute;
            top: -0.5rem;
            left: -16rem;
            border-radius: 2rem;
            border: solid 0.1rem #D5B4BA;
            background-color: #F2C1C7;
            color: #b4202a;
            font-weight: 700;
            padding: 0.4rem 1rem;
          }
          &:nth-child(1) > span {
            color: #b4202a;
          }
          // &:nth-child(2) > span {
          //   color: #999;
          // }
          // &:nth-child(3) > span {
          //   color: #00c36f;
          // }
        }
        .van-icon {
          vertical-align: text-bottom;
        }
      }
    }
    .home-learning {
      margin-top: 1.5rem;
      img {
        height: 9rem;
      }
    }
    .home-selecount {
      height: 16.6rem;
      background-color: #fff;
      margin-top: 1.5rem;
      .hs-wrapper {
        padding: 1.5rem 1.2rem 1.2rem 1.2rem;
        .hs-title {
          margin-bottom: 1.2rem;
          font-size: 1.5rem;
          font-weight: 700;
        }
        .hs-content {
          display: flex;
          flex-direction: column;
          & > div {
            flex: 1;
          }
          .info-select,
          .count-analysis {
            display: flex;
            .is-left {
              margin-right: 1.1rem;
              img {
                width: 1.9rem;
                height: 2.2rem;
              }
            }
            .is-right {
              border-bottom: 0.1rem solid #e9e9e9;
              padding-bottom: 1.5rem;
              line-height: 2.2rem;
              p:first-child {
                font-size: 1.4rem;
              }
              p:last-child {
                color: #9a9a9a;
              }
            }
          }
          .count-analysis {
            margin-top: 1rem;

            .is-left {
              img {
                width: 2.2rem;
                height: 2.2rem;
              }
            }
            .is-right {
              border-bottom: none;
              padding-bottom: 0;
            }
          }
        }
      }
    }
  }
  .title {
    .title-bj {
      height: 16.45rem;
      padding: 1.5rem;
      background-color: #3296fa;
      // position: relative;
      .user-info {
        display: flex;
        justify-content: space-between;
        color: #fff;
        .left {
          font-size: 2rem;
          font-weight: 700;
        }
        .right {
          font-size: 1.6rem;
        }
      }
    }
  }

}
</style>