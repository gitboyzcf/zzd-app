<!-- 统计分析 -->
<template>
  <div class="count-analysis">
    <Header>
      <span slot="title">统计分析</span>
    </Header>
    <!-- 乡镇指数 -->
    <div class="township-index">
      <div class="ti-wrapper">
        <div class="title">
          <span>乡镇指数</span>
        </div>
        <div class="info-container">
          <!-- <div id="chart" ref="chart"></div> -->
          <div class="chart-wrapper">
            <canvas id="mountNode"></canvas>
          </div>
        </div>
      </div>
    </div>
    <!-- 企业综合情况统计表 -->
    <div class="enterprise-count">
      <div class="ec-wrapper">
        <div class="title">
          <span>企业综合情况统计表</span>
        </div>
        <div class="info-container">
          <div class="chart-wrapper">
            <canvas id="mountNode2"></canvas>
          </div>
        </div>
      </div>
    </div>
    <!-- 企业信用 -->
    <div class="enterprise-credit">
      <div class="ec-wrapper">
        <div class="title">
          <span>企业信用</span>
        </div>
        <div class="info-container">
          <div class="ic-left">
            <ul>
              <li v-for="(item,index) in enterCredit" :key="index">
                <img :src="item.img" alt="">
                <div>
                  <p><span>总数</span><span :style="{color:item.color}">{{item.total}}</span></p>
                  <p><span>占本地企业数比率</span><span :style="{color:item.color}">{{item.ratio}}</span></p>
                </div>
              </li>
            </ul>
          </div>
          <div class="ic-right">
            <div>
              <p>
                <span>905条</span>
                <span>已处置信用修复</span>
              </p>
            </div>
            <div>
              <p>
                <span>905条</span>
                <span>还未完成信用修复</span>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
    <!-- 企业履诺/承诺情况 -->
    <div class="enterprise-commitment">
      <div class="ec-wrapper">
        <div class="title">
          <span>企业履诺/承诺情况</span>
        </div>
        <div class="ec-container">
          <div class="chart-wrapper">
            <canvas id="mountNode3"></canvas>
          </div>
          <div class="chart-wrapper">
            <canvas id="mountNode4"></canvas>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Header from "@/components/Header";
// let echarts = require("echarts");
export default {
  name: "CountAnalysis",
  data() {
    return {
       enterCredit:[
        {
          img:require('../../../assets/images/A.png'),
          total:1201,
          ratio:'15.2%',
          color:'#3296FA',
        },
        {
          img:require('../../../assets/images/B.png'),
          total:1201,
          ratio:'15.2%',
          color:'#00B853',
        },
        {
          img:require('../../../assets/images/C.png'),
          total:1201,
          ratio:'15.2%',
          color:'#FF9F00',
        },
        {
          img:require('../../../assets/images/D.png'),
          total:1201,
          ratio:'15.2%',
          color:'#F55545',
        },
      ]
    };
  },
  components: {
    Header,
  },
  methods: {
    //初始化数据
    initData() {
      const data = [
        {
          name: "低等级",
          percent: 83.59,
          number: 20,
          a: "1",
        },
        {
          name: "一般等级",
          percent: 2.17,
          number: 50,
          a: "1",
        },
        {
          name: "较高等级",
          percent: 14.24,
          number: 20,
          a: "1",
        },
        {
          name: "高等级",
          percent: 14.24,
          number: 15,
          a: "1",
        },
      ];

      const map = {};
      data.forEach(function (obj) {
        map[obj.name] = obj.number + "个   " + obj.percent + "%";
      });

      const chart = new this.$F2.Chart({
        id: "mountNode",
        // pixelRatio: window.devicePixelRatio,
        padding: [5, "auto"],
      });
      chart.source(data, {
        percent: {
          formatter: function formatter(val) {
            return val + "%";
          },
        },
      });
      chart.tooltip(false);
      chart.legend({
        position: "right",
        itemFormatter: function itemFormatter(val) {
          return val + "    " + map[val];
        },
        marker: {
          symbol: "square", // marker 的形状
          radius: 5, // 半径大小
        },
      });
      chart.coord("polar", {
        transposed: true,
        innerRadius: 0.7,
        radius: 0.85,
      });
      chart.axis(false);
      chart
        .interval()
        .position("a*percent")
        .color("name", ["#00D685", "#8A1EFD", "#60D5F4", "#FFA800"])
        .adjust("stack")
        .size(10);
      // chart.point().size(20)

      chart.guide().html({
        position: ["50%", "45%"],
        html: `<div style="width: 250px;height: 40px;text-align: center;">
      <div style="font-size: 1.8rem">158个</div>
      <div style="font-size: 1.4rem;color:#969696">乡镇总数</div>
    </div>`,
      });
      chart.render();
    },
    
    /**
     * 像素转换
     * @param {Number} px - 750视觉稿像素
     * @return {Number} 屏幕上实际像素
     */
    px2hd(px) {
      const ONE_REM =
        parseInt(document.documentElement.style.fontSize, 10) || 100;
      const SCALE = ONE_REM / 100;
      return Number((px * SCALE).toFixed(1));
    },
    initData2() {
      let data = [
        {
          year: "宁\n波\n市",
          sales: 38,
        },
        {
          year: "余\n姚\n市",
          sales: 52,
        },
        {
          year: "慈\n溪\n市",
          sales: 61,
        },
        {
          year: "奉\n化\n区",
          sales: 145,
        },
        {
          year: "宁\n海\n县",
          sales: 48,
        },
        {
          year: "象\n山\n县",
          sales: 38,
        },
        {
          year: "鄞\n州\n区",
          sales: 38,
        },
        {
          year: "海\n曙\n区",
          sales: 38,
        },
        {
          year: "江\n北\n区",
          sales: 38,
        },
        {
          year: "镇\n海\n区",
          sales: 38,
        },
        {
          year: "北\n仑\n区",
          sales: 38,
        },
        {
          year: "开\n发\n区\n大\n榭",
          sales: 38,
        },
      ];
      let chart = new this.$F2.Chart({
        id: "mountNode2",
        // pixelRatio: window.devicePixelRatio,
      });

      chart.source(data, {
        sales: {
          tickCount: 5,
        },
      });
      
      // 坐标轴文本旋转
      chart.axis('year', {
        label: {
          // rotate: -Math.PI / 2,
          // textAlign: 'end',
          // textBaseline: 'middle',
          fontSize:10,
          fontWeight:700
        }
      });
      chart.legend(false) // 是否显示图例
      chart.tooltip({
        showItemMarker: false,
        onShow: function onShow(ev) {
          let items = ev.items;
          items[0].name = null;
          items[0].name = items[0].title;
          items[0].value = "¥ " + items[0].value;
        },
      });
      chart.interval().position("year*sales");
      chart.render();
    },
    initData3() {
      const data = [
        {
          name: "已承诺",
          percent: 25.20,
          number: 13526,
          a: "1",
        },
        {
          name: "未承诺",
          percent: 15.20,
          number: 13526,
          a: "1",
        },
      ];

      const map = {};
      data.forEach(function (obj) {
        map[obj.name] = obj.number + "家   " + obj.percent + "%";
      });

      const chart = new this.$F2.Chart({
        id: "mountNode3",
        // pixelRatio: window.devicePixelRatio,
        padding: [0, 45, 45,-80],
      });
      chart.source(data, {
        percent: {
          formatter: function formatter(val) {
            return val + "%";
          },
        },
      });
      chart.tooltip(false);
      chart.legend({
        // position: "bottom",
        offsetY:100,
        offsetX:-10,
        itemFormatter: function itemFormatter(val) {
          return val + "    " + map[val];
        },
        marker: {
          symbol: "square", // marker 的形状
          radius: 5, // 半径大小
        },
      });
      chart.coord("polar", {
        transposed: true,
        innerRadius: 0.7,
        radius: 0.85,
      });
      chart.axis(false);
      chart
        .interval()
        .position("a*percent")
        .color("name", ["#00B853", "#FF9F00"])
        .adjust("stack")
        .size(15);
      // chart.point().size(20)

      chart.guide().html({
        position: ["50%", "50%"],
        html: `<div style="width: 250px;height: 4rem;text-align: center;line-height:4rem">
          <div style="font-size: 1.4rem;">承诺情况</div>
      </div>`,
      });
      chart.render();
    },
    initData4() {
      const data = [
        {
          name: "已履约",
          percent: 25.20,
          number: 13526,
          a: "1",
        },
        {
          name: "未履约",
          percent: 15.20,
          number: 13526,
          a: "1",
        },
      ];

      const map = {};
      data.forEach(function (obj) {
        map[obj.name] = obj.number + "家   " + obj.percent + "%";
      });

      const chart = new this.$F2.Chart({
        id: "mountNode4",
        // pixelRatio: window.devicePixelRatio,
        padding: [0, 45, 45,-50],
      });
      chart.source(data, {
        percent: {
          formatter: function formatter(val) {
            return val + "%";
          },
        },
      });
      chart.tooltip(false);
      chart.legend({
        // position: "bottom",
        offsetY:100,
        itemFormatter: function itemFormatter(val) {
          return val + "    " + map[val];
        },
        marker: {
          symbol: "square", // marker 的形状
          radius: 5, // 半径大小
        },
      });
      chart.coord("polar", {
        transposed: true,
        innerRadius: 0.7,
        radius: 0.85,
      });
      chart.axis(false);
      chart
        .interval()
        .position("a*percent")
        .color("name", ["#3296FA", "#F55545"])
        .adjust("stack")
        .size(15);
      // chart.point().size(20)

      chart.guide().html({
        position: ["50%", "50%"],
        html: `<div style="width: 250px;height: 4rem;text-align: center;line-height:4rem">
          <div style="font-size: 1.4rem;">履约情况</div>
      </div>`,
      });
      chart.render();
    },
   
  },
  mounted() {
    // console.log(this.$F2);
    this.initData();
    this.initData2();
    this.initData3();
    this.initData4();
  },
};
</script>

<style lang="less" scoped>
.count-analysis {
  padding-top: 5.9rem;
  .township-index,
  .enterprise-count,.enterprise-credit,.enterprise-commitment {
    padding: 1.5rem;
    background-color: #fff;
    height: 17.25rem;
    .ti-wrapper,
    .ec-wrapper {
      height: 100%;
      .title {
        font-size: 1.4rem;
        font-weight: 700;
      }
      .info-container {
        height: 100%;

        #chart {
          height: 100%;
        }
      }
    }
  }
  .enterprise-count,.enterprise-credit,.enterprise-commitment {
    margin-top: 1.5rem;
    height: 21.45rem;
  }
  .enterprise-credit{
    height: 25.4rem;
    .info-container{
      display: flex;
      justify-content: space-between;
    }
    .ic-left{
      width: 21.9rem;
      ul{
        li{
          display: flex;
          margin: 1.2rem 0;
          background-color: #F5F5F5;
          img{
            width: 4rem;
            height: 4rem;
            margin-right: 1.5rem;
          }
          &>div{
            display: flex;
            flex-direction: column;
            justify-content: space-between;
            width: 100%;
            p{
              display: flex;
              justify-content: space-between;
              padding-right: 1rem;
            }
          }
        }
      }
    }
    .ic-right{
      height: 100%;
      display: flex;
      flex-direction: column;
      justify-content: space-between;
      padding: 1.5rem 0;
      &>div{
        width: 11.3rem;
        height: 8.95rem;
        display: flex;
        justify-content: center;
        align-items: center;
        p{
          span{
            display: block;
            text-align: center;
          }
          span:first-child{
            font-size: 1.8rem;
            margin-bottom: 1.2rem;
          }
        }
      }
      &>div:first-child{
        background-color: rgba(51, 150, 250,0.4);
        
        p span:first-child{
          color: #3296FA;
        }
      }
      &>div:last-child{
        background-color: rgba(255, 159, 0,0.4);
        p span:first-child{
          color: #FF9F00;
        }
      }
    }
  }
  .enterprise-commitment{
    height: 18.2;
    position: relative;
    overflow: hidden;
    .ec-container{
      display: flex;
      // #mountNode3{
      //   position: absolute;
      //   top: -0rem;
      //   left: -0rem;
      // }
      #mountNode4{
        position: absolute;
        top: -0.1rem;
        left: -13.5rem;
      }
    }
  }
}
</style>