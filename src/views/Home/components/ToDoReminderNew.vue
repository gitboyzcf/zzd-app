<!-- 待办提醒 -->
<template>
  <div class="todo-reminder">
    <!-- <Header>
      <span slot="title">待办提醒</span>
    </Header>
    <van-tabs v-model="active" color="#3296FA" line-width="5.4rem">
      <van-tab title="我收到的">
        
      </van-tab>
      <van-tab title="我的未读" badge="2">内容 2</van-tab>
      <van-tab title="我的已读">内容 3</van-tab>
    </van-tabs> -->
    <van-search v-model="searchValue" placeholder="消息搜索" />
    <div class="search-box">
      <ul>
        <li v-for="(item,index) in searchList" :key="index" :class="{'active':index==searchActive}" @click="searchActive=index">
          <span>{{item}}</span>
        </li>
      </ul>
    </div>
    <div class="reminder-content">
      <ul>
        <li v-for="(reminderData,index) in reminderDatas" :key="index">
          <div class="rc-top">
            <span :style="{color:reminderData.typeColor}">【{{reminderData.type}}】</span>
            <span>{{reminderData.title}}</span>
          </div>
          <div class="rc-buttom">
            <span :style="{color:reminderData.timeMsgColor}">{{reminderData.timeMsg}}</span>
            <span>|</span><span>{{reminderData.sysTip}}</span>
            <span>{{reminderData.time}}</span>
          </div>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  name:'ToDoReminder',
  data(){
    return{
      active:0,
      searchValue: '',
      searchActive:0,
      searchList:['全部','信用','标准化','标准化','隐患管理','隐患管理','预警处置','专项工作'],
      reminderDatas:[
        {
          type:'预警处置',
          typeColor:'#F55545',
          title:'您有3条预警处置事件即将到期，请及时予以处置',
          timeMsg:'即将到期提醒',
          timeMsgColor:'#FF9F00',
          sysTip:'系统自动推送',
          time:'2021年01月21日 19:37'
        },
        {
          type:'专项任务',
          typeColor:'#3296FA',
          title:'您有3条预警处置事件即将到期，请及时予以处置',
          timeMsg:'已经预期提醒',
          timeMsgColor:'#F55545',
          sysTip:'系统自动推送',
          time:'2021年01月21日 19:37'
        },
      ],
    }
  },
  components:{
  },
  mounted(){
    
  }
}
</script>

<style lang="less" scoped>
.todo-reminder{
  margin-top: 0.2rem;
  .search-box{
    background-color: #fff;
    padding: 1.5rem;
    padding-top: 0;
    ul{
      display: flex;
      flex-wrap: wrap;
      li{
        width: 6rem;
        height: 2.4rem;
        // border-radius: 1.45rem;
        text-align: center;
        line-height: 2.4rem;
        background-color: #F2F2F5;
        margin: 0.4rem 0;
        margin-right: 0.4rem;
        border: 1px dotted #3296fa;
        color: #3296fa;
        &.active{
          background: #D4E0FA;
          // color: #D4E0FA;
          box-sizing: border-box;
        }
      }
    }
  }
  .reminder-content{
    background-color: #fff;
    ul{
      li{
        border-top: 0.1rem dotted #DDDDDD;
        padding: 1.5rem;
        .rc-top>span{
          font-size: 1.4rem;
        }
        .rc-buttom{
          display: flex;
          justify-content: space-between;
          span:nth-child(3),span:nth-child(4){
            color: #AAAAAA;
          }
        }
      }
    }
  }
}
</style>