<template>
  <div class="view-page">
    <div class="main">
      <div class="content-1">
        <div class="left">
          <div class="avatar">
            <img :src="me.avatar" alt="">
          </div>
          <div class="name">
            <h1>{{me.name}}</h1>
            <p>{{me.duty}}</p>
          </div>
          <div class="me-info">
            <p v-for="(item,index) in me.list" :key="index">
              <span class="s-1">{{item.label}}</span>：
              <span class="s-2">{{item.value}}</span>
            </p>
          </div>
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
          <div class="interest">
            <h3>{{interest.title}}</h3>
            <p>{{interest.desc}}</p>
          </div>
        </div>
        <div class="right">
          <div class="intention">
            <h2>{{intention.title}}</h2>
            <div v-for="(item,index) in intention.list" :key="index">
              <span>➢ {{item.label}}：{{item.value}}</span>
            </div>
          </div>
          <div class="edu">
            <h2>{{edu.title}}</h2>
            <div v-for="(item,index) in edu.list" :key="index">
              <p>
                <span class="s-1">{{item.time}}</span>
                <span class="s-2">{{item.school}}</span>
                <span class="s-3 float-right clearfix">{{item.major}}</span>
              </p>
            </div>
          </div>
          <div class="work">
            <h2>{{work.title}}</h2>
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
          <div class="practice">
            <h2>{{practice.title}}</h2>
            <div v-for="(item,index) in practice.list" :key="index">
              <p class="p-1">
                <span class="s-1">{{item.time}}</span>
                <span class="s-2">{{item.company}}</span>
                <span class="s-3 float-right clearfix">{{item.duty}}</span>
              </p>
              <p class="p-2">工作内容：</p>
            </div>
          </div>
          <div class="project">
            <h2>{{project.title}}</h2>
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

          <div class="awards">
            <h2>{{awards.title}}</h2>
            <p v-for="(item,index) in awards.list" :key="index">{{item}}</p>
          </div>

          <div class="assessment">
            <h2>{{assessment.title}}</h2>
            <p v-for="(item,index) in assessment.list" :key="index">{{item}}</p>
          </div>

        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
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
            value: "18758885975"
          },
          {
            label: "邮箱",
            value: "xinx@hz.cn"
          }
        ]
      },
      skill: {
        title: "专业技能",
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
        title: "兴趣爱好",
        desc:
          "喜欢书法、读书，平时写写技术博客，搭建了自己的个人博客：xindot.com"
      },
      intention: {
        title: "求职意向",
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
        title: "教育背景",
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
        title: "工作经历",
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
        title: "实践经验",
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
        title: "项目经验",
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
        title: "获奖经历",
        list: ["1、获得了XX奖项", "2、取得了XX荣誉"]
      },
      assessment: {
        title: "自我评价",
        list: [
          "1、个人技能、知识描述",
          "2、个人能力、特长描述",
          "3、个人性格、特质描述"
        ]
      }
    };
  },
  created() {
    // document.title = "念然网络 NianRan.Net";
  },
  methods: {
    goPage(el, index) {
      this.tabSelectedIdx = index;
    }
  }
};
</script>

<style lang="scss" scoped>
.view-page {
  .main {
    .content-1 {
      width: 900px;
      background-color: #ffffff;
      margin: auto;
      height: 1800px;
      > div {
        display: inline-block;
        vertical-align: top;
        text-align: left;
        &.left {
          width: 260px;
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
              padding-left: 10px;
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
        }
        &.right {
          width: 640px;
          padding: 60px 60px 60px 30px;
          box-sizing: border-box;
          > div {
            margin-bottom: 30px;
            h2 {
              border-bottom: solid 3px #223e64;
              padding-bottom: 2px;
              margin-bottom: 10px;
              color: #223e64;
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
