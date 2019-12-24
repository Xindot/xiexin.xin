<template>
  <div class="view-page">
    <div class="main">
      <div v-if="pdf.visible" class="download-pdf" :class="blackMode?'black':'white'" :style="pdf.doing?'opacity:.5':''" @click="getPdf">
        <img :src="pdf.icon" alt="">
        <p>下载PDF{{pdf.doing?'中...':''}}</p>
      </div>
      <div class="content-1" :class="blackMode?'black':'white'" id="pdfCentent">
        <!-- left -->
        <div class="left" @click="blackMode=!blackMode" id="pdfCentent_left">
          <!-- 头像 -->
          <div class="avatar">
            <img :src="me.avatar" alt="">
            <p>{{me.words}}</p>
          </div>
          <!-- 姓名 -->
          <div class="name">
            <h1>{{me.name}}</h1>
            <p>{{me.duty}}</p>
          </div>
          <!-- 个人信息 -->
          <div class="me-info">
            <p v-for="(item,index) in me.list" :key="index">
              <span class="s-1">{{item.label}}</span>：
              <span class="s-2">
                <a v-if="item.type=='tel'" :href="'tel:'+item.value">{{item.value}}</a>
                <a v-else-if="item.type=='email'" :href="'mailto:'+item.value">{{item.value}}</a>
                <span v-else>{{item.value}}</span>
              </span>
            </p>
          </div>
          <!-- 专业技能 -->
          <div class="skill">
            <h3>{{skill.title}}</h3>
            <div v-for="(item,index) in skill.list" :key="index">
              <p class="p-1">
                <span class="s-1">{{item.label}}</span>
                <span class="s-2 float-right clearfix">{{(item.percent-100)}}%</span>
              </p>
              <p class="p-2">
                <span :style="'width:'+item.percent+'%;'"></span>
              </p>
            </div>
          </div>
          <!-- 兴趣爱好 -->
          <div class="interest">
            <h3>{{interest.title}}</h3>
            <p v-html="interest.desc"></p>
          </div>
          <!-- 电子简历 -->
          <div class="e-resume">
            <h3>{{eResume.title}}</h3>
            <p>
              <img :src="eResume.img" alt="">
            </p>
          </div>
        </div>
        <!-- right -->
        <div class="right">
          <!-- 求职意向 -->
          <div class="intention">
            <h2>
              <span>{{intention.title}}</span>
            </h2>
            <div v-for="(item,index) in intention.list" :key="index">
              <span>➢ {{item.label}}：{{item.value}}</span>
            </div>
          </div>
          <!-- 教育背景 -->
          <div class="edu">
            <h2>
              <span>{{edu.title}}</span>
            </h2>
            <div v-for="(item,index) in edu.list" :key="index">
              <p>
                <span class="s-1">{{item.time}}</span>
                <span class="s-2">{{item.school}}</span>
                <span class="s-3 float-right clearfix">{{item.major}}</span>
              </p>
            </div>
          </div>
          <!-- 工作经历 -->
          <div class="work">
            <h2>
              <span>{{work.title}}</span>
            </h2>
            <div v-for="(item,index) in work.list" :key="index">
              <p class="p-1">
                <span class="s-1">{{item.time}}</span>
                <span class="s-2">{{item.company}}</span>
                <span class="s-3 float-right clearfix">{{item.duty}}</span>
              </p>
              <p class="p-2">
                <span class="bold">公司介绍：</span>{{item.companyDesc}}</p>
              <p class="p-2">
                <span class="bold">工作内容：</span>{{item.dutyDesc}}</p>
            </div>
          </div>
          <!-- 实践经历 -->
          <div class="practice">
            <h2>
              <span>{{practice.title}}</span>
            </h2>
            <div v-for="(item,index) in practice.list" :key="index">
              <p class="p-1">
                <span class="s-1">{{item.time}}</span>
                <span class="s-2">{{item.project}}</span>
                <span class="s-3 float-right clearfix">{{item.duty}}</span>
              </p>
              <p class="p-2">
                <span class="bold">工作内容：</span>{{item.dutyDesc}}</p>
            </div>
          </div>
          <!-- 项目经历 -->
          <div class="project">
            <h2>
              <span>{{project.title}}</span>
            </h2>
            <div v-for="(item,index) in project.list" :key="index">
              <p class="p-1">
                <span class="s-1">{{item.time}}</span>
                <span class="s-2">{{item.project}}</span>
                <span class="s-3 float-right clearfix">{{item.duty}}</span>
              </p>
              <p class="p-2">
                <span class="bold">项目介绍：</span>{{item.projectDesc}}</p>
              <p class="p-2">
                <span class="bold">工作内容：</span>{{item.dutyDesc}}</p>
            </div>
          </div>
          <!-- 获奖经历 -->
          <div class="awards">
            <h2>
              <span>{{awards.title}}</span>
            </h2>
            <p v-for="(item,index) in awards.list" :key="index">{{item}}</p>
          </div>
          <!-- 自我评价 -->
          <div class="assessment">
            <h2>
              <span>{{assessment.title}}</span>
            </h2>
            <p v-for="(item,index) in assessment.list" :key="index">
              <span v-html="item"></span>
            </p>
          </div>

        </div>
      </div>
    </div>
  </div>
</template>

<script>
// const QR = require("@/utils/wxqrcode");
// import QR from "@/utils/wxqrcode";
// import dayjs from "dayjs";
// const TDate = dayjs(new Date()).format("YYYYMMDDHHmmss");
const TDate = "-" + new Date().getFullYear();
const pwd = ~~window.location.href.includes("b1024");
import { deviceName } from "@/const";
export default {
  data() {
    return {
      pdf: {
        visible: true,
        htmlTitle: "谢鑫的简历",
        nowTime: TDate,
        icon: "https://img.6h5.cn/xiexin.xin/pdf.jpeg",
        doing: false
      },
      blackMode: true, // 夜晚模式
      me: {
        avatar: "https://img.6h5.cn/xiexin.xin/xin-avatar-2.jpg",
        words: "程序没有好坏之分，程序员有。",
        name: "谢鑫",
        duty: "web前端开发工程师",
        list: [
          {
            label: "姓名",
            value: "男"
          },
          {
            label: "出生年月",
            value: "1990.10"
          },
          {
            label: "毕业学校",
            value: "杭州师范大学"
          },
          {
            label: "学院专业",
            value: "理学院应用物理学"
          },
          {
            label: "手机号",
            value: ["187****5975", "18758885975"][pwd],
            type: "tel"
          },
          {
            label: "邮箱",
            value: "xinx@hz.cn",
            type: "email"
          },
          {
            label: "证书",
            value: "CET-4、计算机二级"
          }
        ]
      },
      skill: {
        title: " ❀ 专业技能 ❀ ",
        list: [
          {
            label: "➢ HTML",
            percent: 85
          },
          {
            label: "➢ CSS(SCSS)",
            percent: 80
          },
          {
            label: "➢ Javascript",
            percent: 75
          },
          {
            label: "➢ Vue.js",
            percent: 80
          },
          {
            label: "➢ React",
            percent: 50
          },
          {
            label: "➢ Node.js",
            percent: 70
          }
        ]
      },
      interest: {
        title: " ❀ 兴趣爱好 ❀ ",
        desc:
          "喜欢书法、读书，游泳、爬山、平时写写技术博客，也搭建了自定义的个人博客：<a href='http://xindot.com' target='_blank'>xindot.com</a>"
      },
      eResume: {
        visible: true,
        title: " ❀ 电子简历 ❀ ",
        img: "https://img.6h5.cn/xiexin.xin/1577155712.png"
      },
      intention: {
        title: " ❀ 求职意向",
        list: [
          {
            label: "岗位",
            value: "web前端开发工程师"
          },
          {
            label: "期望薪资",
            value: ["****", "20k - 25k"][pwd]
          },
          {
            label: "地点",
            value: "杭州"
          },
          {
            label: "工作性质",
            value: "全职"
          }
        ]
      },
      edu: {
        title: " ❀ 教育背景",
        list: [
          {
            time: "2010.9 - 2014.6",
            school: "杭州师范大学理学院",
            major: "应用物理学"
          },
          {
            time: "2009.9 - 2010.6",
            school: "信阳市商城高中",
            major: "理科"
          },
          {
            time: "2006.9 - 2009.6",
            school: "信阳市商城达权店高中",
            major: "理科"
          }
        ]
      },
      work: {
        title: " ❀ 工作经历",
        list: [
          {
            time: "2017.2 至今",
            company: "浙江聚励云机械科技有限公司",
            duty: "web前端负责人/项目经理",
            companyDesc:
              "是一家为工程机械行业提供服务的物联网+互联网公司，公司产品主要包含云盒硬件和APP、SaaS等软件。",
            dutyDesc:
              "主要负责企业官网、APP内h5页面、配件商城全栈、管理后台若干、微信支付宝支付及退款、七牛文件操作、为业务稳定提供部分接口、小程序等项目；主要技术用到了es6、vue、react、node、webpack、nginx、mysql、sequelize、uni-app；使用了VSCode、HBuilderX、微信开发、支付宝小程序开发、Termius等工具。"
          },
          {
            time: "2015.10 - 2017.2",
            company: "杭州目的地科技有限公司",
            duty: "web前端开发",
            companyDesc:
              "是一家境外旅游+户外直播的互联网公司。主要产品是APP和PC管理端。",
            dutyDesc:
              "主要负责旅游项目官网、运营管理后台、作者管理后台、翻译后台、webviewH5下单流程、微信授权话题活动等项目；主要技术包含Nodejs，Avalon，Vue，git，redis；开发工具包含了Sublime、Atom、Transmit。"
          },
          {
            time: "2014.6 - 2015.10",
            company: "杭州午苇农作物开发有限公司",
            duty: "web前端开发",
            companyDesc:
              "是一家农产品开发+互联网的生鲜公司，主要产品是pc网站和门店。",
            dutyDesc:
              "主要负责ecshop模板搭建，主要页面的二次开发，包括首页重新布局、活动页面制作、配合php同事完善后台一些基本功能页面的实现；主要技术包含：html(H5)、css(3)、JS、jQuery、Bootstrap、git；编辑工具主要使用Sublime。"
          }
        ]
      },
      practice: {
        title: " ❀ 实践经历",
        list: [
          {
            time: "2014.2 - 2014.6",
            project: "淘宝网店装修、家教网站维护",
            duty: "web前端开发",
            projectDesc: "",
            dutyDesc:
              "主要负责淘宝店装修、模板网站搭建装修等；技术主要是html、css、js基础、PhotoShop基础。"
          }
        ]
      },
      project: {
        title: " ❀ 项目经历",
        list: [
          {
            time: "2019.11 至今",
            project: "智慧工地项目：pc管理后台",
            duty: "web前端",
            projectDesc: "为工地管理方提供一站式软硬件服务",
            dutyDesc: "vue-cli3 + element-ui + vue-router + axios。"
          },
          {
            time: "2019.7 - 2019.12",
            project: "环保项目：小程序+浙里办+管理后台",
            duty: "web前端",
            projectDesc: "非移动机械信息申报和使用管理",
            dutyDesc:
              "主要负责非道微信、支付宝（兼容浙里办）小程序的前端开发和管理后台的开发，小程序主要运用了uni-app框架和支付宝小程序框架，管理后台主要是vue-cli3脚手架+element-ui库、其中使用了axios（request封装）、vue-router、高德地图组件、echarts图表库、二维码生成库等；js库使用cdn、使用rsync优化了发布流程、使用polyfill兼容部分浏览器。"
          },
          {
            time: "2019.6 - 2019.8",
            project: "加油项目：微信端h5商城",
            duty: "web前端",
            projectDesc:
              "提供油卡充值、话费充值、附近加油站、违章查询、商城功能。",
            dutyDesc:
              "主要在微信端使用h5实现app端所有内容，并给app端提供部分webview页面；主要实现的技术点：扩展vue-router使跳转页面不用关系路径问题；使用vue监听路由让页面跳转有过渡效果；商品分类详情页交互、微信支付交互等各种体验的优化。"
          },
          {
            time: "2018.10 - 2019.5",
            project: "Node接口项目：nApi、antApi",
            duty: "web前端+Node",
            projectDesc: "为公司部分项目提供部分基础接口",
            dutyDesc:
              "使用 nodejs + express/koa2 + mysql + jwt 实现部分基础接口：为APP客户端提供七牛云/阿里OSS上传图片的uptoken；接口验证；微信分享配置接口；excel导出工具；页面埋点日志接口；系统报错邮件提醒等。"
          },
          {
            time: "2018.5 - 2018.10",
            project: "贷款项目：PC管理后台",
            duty: "web前端",
            projectDesc: "为公司提供管理贷款信息平台",
            dutyDesc:
              "主要使用react + ant.design + react-router搭建管理后台，其中使用umi对项目进行本地运行和打包。"
          },
          {
            time: "2018.3 - 2018.6",
            project: "配件商城：APP内h5+PC管理后台",
            duty: "web前端+Node",
            projectDesc: "为公司提供一整套商城系统服务",
            dutyDesc:
              "接口nodejs + express + mysql；h5端使用vue ssr服务端渲染；管理后台vuejs + webpack3；主要难点：微信支付宝支付验签、订单部分退款等。"
          },
          {
            time: "2017.10 - 2018.3",
            project: "抽奖活动+聊天室",
            duty: "web前端+Node",
            projectDesc: "用户参与h5抽奖活动并参与聊天讨论",
            dutyDesc:
              "主要使用nodejs + websocket + mysql；h5端使用vue ssr服务端渲染；socket实现消息主动推送。"
          }
        ]
      },
      awards: {
        title: " ❀ 获奖经历",
        list: [
          "➢ 2011年度第八届全国残疾人运动会优秀志愿者",
          "➢ 2013年度中国大学生自强之星提名奖"
        ]
      },
      assessment: {
        title: " ❀ 自我评价",
        list: [
          "➢ 具有良好的语言表达和沟通能力，拥有良好的团队协作精神和较强的时间意识，工作主动认真，诚实守信，具有较强的责任感。善于学习，肯花时间，不埋怨。",
          "➢ 具有较强的学习和自学新知识的能力，热爱IT行业。",
          "➢ 有较好的团队协调能力，无论对同事还是对学生，都是一个很好的助手。",
          "➢ 热心公益，个人事迹曾被<a href='http://qjwb.zjol.com.cn/html/2013-04/11/content_2087686.htm?div=-1' target='_blank'>钱江晚报</a>报道过。"
        ]
      }
    };
  },
  created() {
    // document.title = "谢鑫的简历-2019";
    const hour = new Date().getHours();
    // console.log(hour);
    if (hour >= 6 && hour < 18) {
      this.blackMode = false;
    } else {
      this.blackMode = true;
    }
  },
  mounted() {
    if (deviceName == "pc") {
      const offsetHeight = document.getElementById("pdfCentent").offsetHeight;
      document.getElementById("pdfCentent_left").style.height =
        offsetHeight + "px";
    }
  },
  methods: {
    goPage(el, index) {
      this.tabSelectedIdx = index;
    },
    getPdf() {
      if (deviceName != "pc") {
        alert("请在PC端使用导出功能");
        return;
      }
      this.pdf.doing = true;
      setTimeout(() => {
        this.pdf.doing = false;
      }, 5000);
      this.ExportSavePdf(this.pdf.htmlTitle, this.pdf.nowTime);
    },
    createQrCodeImg() {
      // // 生成的图片为base64
      // let img = QR.createQrCodeImg(window.location.origin, {
      //   size: parseInt(300)
      // });
      // // console.log(img);
      // this.eResume.img = img;
      // this.eResume.visible = true;
    }
  }
};
</script>

<style lang="scss" scoped>
.view-page {
  .main {
    .download-pdf {
      position: fixed;
      z-index: 10;
      top: 10px;
      right: 10px;
      padding: 10px 20px;
      box-sizing: border-box;
      background-color: #223e63;
      color: #fff;
      cursor: pointer;
      font-size: 14px;
      box-shadow: 0 0 10px 0 rgba(0, 0, 0, 0.2);
      border-radius: 18px;
      &.black {
        background-color: #fff;
        color: #223e63;
      }
      img {
        width: 50px;
        border-radius: 50px;
      }
    }
    @media screen and (max-width: 600px) {
      .content-1 {
        width: 100% !important;
        .left {
          width: 100% !important;
          height: 100% !important;
        }
        .right {
          display: none;
        }
      }
    }
    .content-1 {
      width: 950px;
      background-color: #ffffff;
      margin: auto;
      &.white {
        .left {
          background-color: #dddddd;
          color: #223e63;
          .name {
            background-color: rgba(255, 255, 255, 0.9);
            color: rgb(34, 62, 99);
            // position: relative;
            // &:before {
            //   content: "";
            //   position: absolute;
            //   border-left: solid 5px;
            //   height: 100%;
            //   left: 0;
            //   top: 0;
            // }
          }
          .me-info {
            > p {
              .s-2 {
                border-bottom: solid 1px rgb(64, 94, 119);
              }
            }
          }
        }
      }
      > div {
        display: inline-block;
        vertical-align: top;
        text-align: left;
        &.left {
          width: 270px;
          background-color: #223e64;
          color: #ffffff;
          > div {
            padding: 20px;
            box-sizing: border-box;
            h3 {
              color: #fff;
              background: #405e77;
              height: 34px;
              line-height: 34px;
              margin-bottom: 20px;
              // padding-left: 10px;
              text-align: center;
            }
          }
          .avatar {
            text-align: center;
            padding: 50px 0;
            box-sizing: border-box;
            opacity: 0.8;
            img {
              width: 110px;
              // height: 150px;
              border: solid 5px #ffffff;
            }
            p {
              font-size: 12px;
              opacity: 0.6;
            }
          }
          .name {
            text-align: center;
            background-color: rgba(96, 125, 139, 0.5);
            color: rgba(255, 255, 255, 0.9);
            padding: 20px 0;
            box-sizing: border-box;
            margin-bottom: 20px;
            p {
              opacity: 0.7;
            }
          }
          .me-info {
            > p {
              margin-bottom: 10px;
              font-size: 15px;
              .s-1 {
                display: inline-block;
                width: 60px;
                text-align: justify;
                text-align-last: justify;
              }
              .s-2 {
                display: inline-block;
                border-bottom: solid 1px rgba(255, 255, 255, 0.5);
              }
            }
          }
          .skill {
            div {
              margin-bottom: 10px;
              .p-1 {
                font-size: 14px;
                .s-1 {
                  margin-right: 20px;
                  display: inline-block;
                }
                .s-2 {
                  opacity: 0.8;
                }
              }
              .p-2 {
                background-color: #405e77;
                height: 10px;
                > span {
                  display: inline-block;
                  height: 100%;
                  vertical-align: top;
                  background-color: rgba(255, 255, 255, 1);
                }
              }
            }
          }
          .e-resume {
            > p {
              text-align: center;
              img {
                width: 45%;
                display: inline-block;
                border: solid 5px #ffffff;
              }
            }
          }
        }
        &.right {
          width: 680px;
          padding: 60px 60px 60px 30px;
          box-sizing: border-box;
          > div {
            margin-bottom: 30px;
            font-size: 15px;
            > div {
              p {
                &.p-1 {
                  font-size: 16px;
                  font-weight: bold;
                  color: #223e64;
                }
                &.p-2 {
                  font-size: 15px;
                  color: #333;
                }
                .s-1 {
                  width: 140px;
                  display: inline-block;
                  margin-right: 10px;
                }
              }
            }
            h2 {
              padding-bottom: 2px;
              margin-bottom: 10px;
              color: #223e64;
              position: relative;
              z-index: 1;
              &:after {
                content: "";
                position: absolute;
                z-index: 0;
                width: 100%;
                left: 0;
                top: 50%;
                border-bottom: solid 3px #223e64;
                transform: translateY(-50%);
              }
              > span {
                position: relative;
                z-index: 1;
                background-color: #ffffff;
                padding-right: 10px;
              }
            }
            &.intention {
              > div {
                display: inline-block;
                width: 50%;
              }
            }
            &.work,
            &.project {
              > div {
                margin-bottom: 12px;
                .p-1 {
                  margin-bottom: 4px;
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

<style scoped>
.black .me-info > p a,
.black .interest > p >>> a {
  color: #ffffff !important;
  text-decoration: none;
}
.white .me-info > p a,
.white .interest > p >>> a {
  color: #223e63 !important;
  text-decoration: none;
}
.assessment p >>> a {
  text-decoration: none !important;
  color: inherit;
}
</style>
