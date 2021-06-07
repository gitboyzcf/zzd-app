<!-- 待办提醒 -->
<template>
  <div class="todo-reminder">
    <Header>
      <span slot="title">待办提醒</span>
    </Header>
    <van-tabs v-model="active" color="#3296FA" line-width="5.4rem">
      <van-tab title="我收到的">
        
      </van-tab>
      <van-tab title="我的未读" badge="2">内容 2</van-tab>
      <van-tab title="我的已读">内容 3</van-tab>
    </van-tabs>
    <van-search v-model="searchValue" placeholder="消息搜索" />
    <div class="search-box">
      <ul>
        <li v-for="(item,index) in searchList" :key="index" :class="{'active':index==searchActive}" @click="searchActive=index">
          <span>{{item}}</span>
        </li>
      </ul>
    </div>
    <div class="reminder-content">
      
    </div>
  </div>
</template>

<script>
import Header from "@/components/Header";
export default {
  name:'ToDoReminder',
  data(){
    return{
      active:0,
      searchValue: '',
      searchActive:0,
      searchList:['全部','信用','标准化','标准化','隐患管理','隐患管理','预警处置','专项工作']
    }
  },
  components:{
    Header,
  },
  mounted(){
    
  }
}
</script>

<style lang="less" scoped>
.todo-reminder{
  padding-top: 4.4rem;
  .search-box{
    background-color: #fff;
    margin-top: 1.5rem;
    padding: 1.5rem;
    ul{
      display: flex;
      flex-wrap: wrap;
      li{
        width: 6.5rem;
        height: 2.8rem;
        border-radius: 1.45rem;
        text-align: center;
        line-height: 2.8rem;
        background-color: #F2F2F5;
        margin: 0.2rem 0;
        margin-right: 0.2rem;
        color: #99999B;
        &.active{
          border: 1px solid #3296fa;
          background: rgba(50,150,250,0.10);
          color: #3296FA;
          box-sizing: border-box;
        }
      }
    }
  }
}
</style>