<template>
  <div class="header">
    <span @click="$router.go(-1)"><van-icon name="arrow-left" style="margin-top:0.2rem"/> 返回</span>
    <div><span slot="title">统计分析</span></div>
    <span></span>
  </div>
</template>

<script>
export default {

}
</script>

<style lang="less" scoped>
.header{
  height: 4.4rem;
  width: 100%;
  padding: 0 1.5rem;
  background-color: #fff;
  position: fixed;
  top: 0;
  left: 0;
  display: flex;
  justify-content: space-between;
  align-items: center;
  span{
    flex: 1;
    font-size: 1.8rem;
    &:first-child{
      display: flex;
      align-items: center;
    }
  }
  &>div{
    text-align: center;
    font-weight: 700;
  }
}
</style>