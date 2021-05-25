<!-- 信息查看 -->
<template>
  <div class="Information">
    <Header>
      <span slot="title">信息查看</span>
    </Header>
    <div class="Information_search">
      <van-search v-model="value" placeholder="请输入企业名称" />
      <div style="font-size: 1.5rem; padding-right: 1.5rem">筛选</div>
    </div>
    <div class="Information_text">当前企业数量共计12076家</div>
  </div>
</template>

<script>
import Header from "@/components/Header";
export default {
  name: "Information",
  components: {
    Header,
  },
  data() {
    return {
      value: "",
    };
  },
  methods: {},
};
</script>
<style lang="less" scoped>
.Information {
  margin-top: 4.4rem;
  .Information_search {
    display: flex;
    background: #fff;
    align-items: center;
    .van-search {
      flex: 1;
    }
  }
  .Information_text {
    font-size: 1.2rem;
    padding: 1rem;
    color: #a6a7a7;
    background: #f5f5f5;
  }
}
</style>