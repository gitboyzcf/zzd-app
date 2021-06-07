<!-- 企业档案 -->
<template>
  <div class="Information">
    <Header>
      <span slot="title">企业档案</span>
    </Header>
    <div class="Information_both">
      <div class="Information_content">
        <div class="Information_content_top">
          <img src="../../../assets/images/QY.png" alt="" />
          <span>宁海县佳龙真空镀膜有限公司</span>
        </div>
        <div class="Information_content_middle">
          <span class="Information_content_left">信用等级D</span>
          <span class="Information_content_right">标准化等级：二级</span>
        </div>
        <div style="margin-top: 1.5rem">
          <div class="Information_content_box">
            <img src="../../../assets/images/fl.png" alt="" />
            行业分类:<span class="Information_content_boxname"></span>
          </div>
          <div class="Information_content_box">
            <img src="../../../assets/images/dizhi.png" alt="" />
            企业地址：<span class="Information_content_boxname"
              >浙江省宁波市宁海县409县道208号</span
            >
          </div>
        </div>
      </div>
      <div class="Information_content_right">
        <div>23</div>
        <div>预警项</div>
      </div>
    </div>
    <div class="enterpriseList_content">
      <ul>
        <li>企业基本信息<van-icon name="arrow" /></li>
        <li>经营地址定位<van-icon name="arrow" /></li>
        <li>企业照片信息<van-icon name="arrow" /></li>
      </ul>
    </div>
  </div>
</template>

<script>
import Header from "@/components/Header";
export default {
  name: "EnterpriseList",
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
  font-size: 1.2rem;
  .Information_search {
    display: flex;
    background: #fff;
    align-items: center;
    .van-search {
      flex: 1;
    }
  }
  .Information_text {
    padding: 1rem;
    color: #a6a7a7;
    background: #f5f5f5;
  }
  .Information_both {
    margin-bottom: 1.05rem;

    background-color: #fff;
    display: flex;
  }
  .Information_content {
    flex: 1;
    .Information_content_top {
      padding-top: 1.2rem;
      display: flex;
      align-items: center;
      font-size: 1.6rem;
      font-weight: bold;
      img {
        width: 2.5rem;
        height: 2.5rem;
        margin-left: 1.6rem;
        margin-right: 1.2rem;
      }
    }
    .Information_content_middle {
      margin-left: 5.25rem;
      margin-top: 0.8rem;
      letter-spacing: 0.05rem;
      .Information_content_left {
        padding: 0.45rem 0.9rem;
        background: #feefed;
        color: #f55545;
        margin-right: 0.5rem;
      }
      .Information_content_right {
        padding: 0.45rem 0.9rem;
        background: #ebf4fe;
        color: #3296fa;
      }
    }
    .Information_content_box {
      margin-left: 5.25rem;
      margin-bottom: 1.05rem;
      img {
        width: 1.3rem;
        height: 1.3rem;
        vertical-align: middle;
        margin-right: 0.65rem;
      }
      .Information_content_boxname {
        color: #3296fa;
      }
    }
  }
  .Information_content_right {
    width: 5rem;
    height: 5rem;
    color: #f55545;
    background: #feefed;
    margin-right: 1.1rem;
    margin-top: 1rem;
    text-align: center;
    padding-top: 0.5rem;
  }
  .Information_content_right div:first-child {
    font-weight: bold;
    font-size: 1.8rem;
  }
  .enterpriseList_content {
    background: #fff;
    font-size: 1.4rem;
    li {
      padding: 1.55rem;
      display: flex;
      justify-content: space-between;
      align-items: center;
      border-bottom: 0.1rem solid #e9e9e9;
    }
  }
}
</style>