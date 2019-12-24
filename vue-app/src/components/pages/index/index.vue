<template>
  <div class="view-page">
    <div class="main">
      <div class="download-pdf" :style="doing?'opacity:.5':''" @click="getPdf">
        <img :src="icons.pdf" alt="">
        <p>下载PDF{{doing?'中...':''}}</p>
      </div>
      <div class="content-1" id="pdfCentent">
        <!-- left -->
        <div class="left">
          <!-- 头像 -->
          <div class="avatar">
            <img :src="me.avatar" alt="">
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
                <span class="s-2">{{item.percent}}%</span>
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
              <p class="p-2">公司介绍：{{item.companyDesc}}</p>
              <p class="p-2">工作内容：</p>
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
                <span class="s-2">{{item.company}}</span>
                <span class="s-3 float-right clearfix">{{item.duty}}</span>
              </p>
              <p class="p-2">工作内容：</p>
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
              <p class="p-2">项目介绍：</p>
              <p class="p-2">工作内容：</p>
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
            <p v-for="(item,index) in assessment.list" :key="index">{{item}}</p>
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
export default {
  data() {
    return {
      htmlTitle: "谢鑫的简历",
      nowTime: TDate,
      icons: {
        pdf: "https://img.6h5.cn/xiexin.xin/pdf.jpeg"
      },
      doing: false,
      me: {
        avatar: "https://img.6h5.cn/xiexin.xin/WechatIMG640.png",
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
            label: "毕业院校",
            value: "杭州师范大学理学院"
          },
          {
            label: "专业",
            value: "应用物理学"
          },
          {
            label: "手机号",
            value: "18758885975",
            type: "tel"
          },
          {
            label: "邮箱",
            value: "xinx@hz.cn",
            type: "email"
          }
        ]
      },
      skill: {
        title: " ❀ 专业技能 ❀ ",
        list: [
          {
            label: "HTML",
            percent: 85
          },
          {
            label: "CSS",
            percent: 80
          },
          {
            label: "Javascript",
            percent: 75
          },
          {
            label: "Vue.js",
            percent: 80
          },
          {
            label: "React",
            percent: 50
          },
          {
            label: "Node.js",
            percent: 70
          }
        ]
      },
      interest: {
        title: " ❀ 兴趣爱好 ❀ ",
        desc:
          "喜欢书法、读书，平时写写技术博客，搭建了自己的个人博客：<a href='http://xindot.com' target='_blank'>xindot.com</a>"
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
            label: "薪资",
            value: "20k - 25k"
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
          },
          {
            time: "2003.9 - 2006.6",
            school: "信阳市商城达权店初中",
            major: ""
          }
        ]
      },
      work: {
        title: " ❀ 工作经历",
        list: [
          {
            time: "2017.2 至今",
            company: "浙江聚励云机械科技有限公司",
            duty: "web前端开发负责人",
            companyDesc:
              "云机械是一家为工程机械行业提供服务的物联网+互联网公司，公司产品主要包含云盒硬件和APP、SaaS等软件。公司内部开发部门分工流程明确。",
            dutyDesc: ""
          },
          {
            time: "2015.10 - 2017.2",
            company: "杭州目的地科技有限公司",
            duty: "web前端开发"
          },
          {
            time: "2014.6 - 2015.10",
            company: "杭州午苇农作物开发有限公司",
            duty: "web前端开发"
          }
        ]
      },
      practice: {
        title: " ❀ 实践经历",
        list: [
          {
            time: "2019.7 - 2019.12",
            project: "环保小程序+浙里办+管理后台",
            duty: "web前端开发",
            projectDesc: "",
            dutyDesc: ""
          }
        ]
      },
      project: {
        title: " ❀ 项目经历",
        list: [
          {
            time: "2019.7 - 2019.12",
            project: "环保小程序+浙里办+管理后台",
            duty: "web前端开发",
            projectDesc: "",
            dutyDesc: ""
          }
        ]
      },
      awards: {
        title: " ❀ 获奖经历",
        list: ["1、获得了XX奖项", "2、取得了XX荣誉"]
      },
      assessment: {
        title: " ❀ 自我评价",
        list: [
          "1、个人技能、知识描述",
          "2、个人能力、特长描述",
          "3、个人性格、特质描述"
        ]
      }
    };
  },
  created() {
    // document.title = "谢鑫的简历-2019";
  },
  methods: {
    goPage(el, index) {
      this.tabSelectedIdx = index;
    },
    getPdf() {
      this.doing = true;
      setTimeout(() => {
        this.doing = false;
      }, 5000);
      this.ExportSavePdf(this.htmlTitle, this.nowTime);
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
      top: 10px;
      right: 10px;
      padding: 10px 20px;
      box-sizing: border-box;
      background-color: #ffffff;
      cursor: pointer;
      font-size: 14px;
      box-shadow: 0 0 10px 0 rgba(0, 0, 0, 0.2);
      border-radius: 18px;
      img {
        width: 50px;
      }
    }
    .content-1 {
      width: 950px;
      background-color: #ffffff;
      margin: auto;
      height: 1800px;
      > div {
        display: inline-block;
        vertical-align: top;
        text-align: left;
        &.left {
          width: 270px;
          background-color: #223e64;
          height: 100%;
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
              height: 150px;
              border: solid 5px #ffffff;
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
              margin-bottom: 15px;
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
                font-size: 15px;
                .s-1 {
                  margin-right: 20px;
                  display: inline-block;
                  width: 36%;
                }
                .s-2 {
                  font-size: 14px;
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
            h2 {
              padding-bottom: 2px;
              margin-bottom: 10px;
              color: #223e64;
              position: relative;
              z-index: 2;
              &:after {
                content: "";
                position: absolute;
                width: 100%;
                left: 0;
                top: 50%;
                border-bottom: solid 3px #223e64;
                z-index: 1;
              }
              > span {
                position: relative;
                z-index: 2;
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
            &.work {
              > div {
                margin-bottom: 10px;
                .p-1 {
                  margin-bottom: 2px;
                }
              }
            }
            > div {
              p {
                font-size: 16px;
                &.p-1 {
                  font-weight: bold;
                  color: #223e64;
                }
                &.p-2 {
                  font-size: 15px;
                  color: #6c6c6c;
                }
                .s-1 {
                  width: 140px;
                  display: inline-block;
                  margin-right: 10px;
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
.me-info > p a,
.interest > p >>> a {
  color: #ffffff !important;
  text-decoration: none;
}
</style>
