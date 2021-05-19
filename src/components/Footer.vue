<template>
  <div class="footer">
    <div class="footer-wrapper">
      <ul>
        <li>
          <router-link to="/home">
            <img src="../assets/images/info.png" alt="">
            <span>消息</span>
          </router-link>
        </li>
        <li>
          <router-link to="/processing">
            <img src="../assets/images/info.png" alt="">
            <span>待办</span>
          </router-link>
        </li>
        <li>
          <router-link to="/workbanch">
            <img src="../assets/images/info.png" alt="">
            <span>工作台</span>
          </router-link>
        </li>
        <li>
          <router-link to="/communicationRecord">
            <img src="../assets/images/info.png" alt="">
            <span>通讯录</span>
          </router-link>
        </li>
        <li>
          <router-link to="/my">
            <img src="../assets/images/info.png" alt="">
            <span>我的</span>
          </router-link>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  name:'Footer',
  data(){
    return {

    }
  },
}
</script>
 
 <style lang="less" scoped>
 .footer{
   height:4.9rem;
   width: 100%;
   position: fixed;
   bottom: 0;
   left: 0;
   background-color: #fff;
   .footer-wrapper{
     ul{
       display: flex;
       li{
         flex: 1;
         a{
           height:4.9rem;
           display: flex;
           flex-direction: column;
           align-items: center;
           justify-content: center;
           img{
             width: 3.5rem;
             height: 2.5rem;
           }
         }
       }
     }
   }
 }
 </style>