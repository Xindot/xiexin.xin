!function(t){function e(e){for(var a,l,c=e[0],o=e[1],r=e[2],u=0,d=[];u<c.length;u++)l=c[u],Object.prototype.hasOwnProperty.call(i,l)&&i[l]&&d.push(i[l][0]),i[l]=0;for(a in o)Object.prototype.hasOwnProperty.call(o,a)&&(t[a]=o[a]);for(p&&p(e);d.length;)d.shift()();return n.push.apply(n,r||[]),s()}function s(){for(var t,e=0;e<n.length;e++){for(var s=n[e],a=!0,c=1;c<s.length;c++){var o=s[c];0!==i[o]&&(a=!1)}a&&(n.splice(e--,1),t=l(l.s=s[0]))}return t}var a={},i={app:0},n=[];function l(e){if(a[e])return a[e].exports;var s=a[e]={i:e,l:!1,exports:{}};return t[e].call(s.exports,s,s.exports,l),s.l=!0,s.exports}l.m=t,l.c=a,l.d=function(t,e,s){l.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:s})},l.r=function(t){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},l.t=function(t,e){if(1&e&&(t=l(t)),8&e)return t;if(4&e&&"object"==typeof t&&t&&t.__esModule)return t;var s=Object.create(null);if(l.r(s),Object.defineProperty(s,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var a in t)l.d(s,a,function(e){return t[e]}.bind(null,a));return s},l.n=function(t){var e=t&&t.__esModule?function(){return t.default}:function(){return t};return l.d(e,"a",e),e},l.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},l.p="";var c=window.webpackJsonp=window.webpackJsonp||[],o=c.push.bind(c);c.push=e,c=c.slice();for(var r=0;r<c.length;r++)e(c[r]);var p=o;n.push([0,"chunk-vendors"]),s()}({0:function(t,e,s){t.exports=s("56d7")},"4a06":function(t,e,s){},"56d7":function(t,e,s){"use strict";s.r(e),s("e44b"),s("6648"),s("5f54"),s("f0e6");var a=s("8bbf"),i=s.n(a),n={name:"app"},l=(s("5c0b"),s("5511")),c=Object(l.a)(n,(function(){var t=this.$createElement,e=this._self._c||t;return e("div",{attrs:{id:"app"}},[e("router-view",{staticClass:"router-view"})],1)}),[],!1,null,null,null).exports,o=s("6389"),r=s.n(o),p=(s("ed63"),s("8cf2"),window.navigator.userAgent.toLowerCase()),u=/(iPhone|iPad|iPod|iOS)/i.test(p)?"ios":/(Android)/i.test(p)?"android":"pc",d=(/MicroMessenger/i.test(p)||/QQ/i.test(p)||/WeiBo/i.test(p)||p.indexOf("dingtalk"),"-"+(new Date).getFullYear()),v=~~window.location.href.includes("b1024"),f={data:function(){return{pdf:{visible:!0,htmlTitle:"谢鑫的简历",nowTime:d,icon:"https://img.6h5.cn/xiexin.xin/pdf.jpeg",doing:!1},blackMode:!0,me:{avatar:"https://img.6h5.cn/xiexin.xin/xin-avatar-2.jpg",words:"程序没有好坏之分，程序员有。",name:"谢鑫",duty:"web前端开发工程师",list:[{label:"姓名",value:"男"},{label:"出生年月",value:"1990.10"},{label:"毕业学校",value:"杭州师范大学"},{label:"学院专业",value:"理学院应用物理学"},{label:"手机号",value:["187****5975","18758885975"][v],type:"tel"},{label:"邮箱",value:"xinx@hz.cn",type:"email"},{label:"证书",value:"CET-4、计算机二级"}]},skill:{title:" ❀ 专业技能 ❀ ",list:[{label:"➢ HTML",percent:85},{label:"➢ CSS(SCSS)",percent:80},{label:"➢ Javascript",percent:75},{label:"➢ Vue.js",percent:80},{label:"➢ React",percent:50},{label:"➢ Node.js",percent:70}]},interest:{title:" ❀ 兴趣爱好 ❀ ",desc:"喜欢书法、读书，游泳、爬山、平时写写技术博客，也搭建了自定义的个人博客：<a href='http://xindot.com' target='_blank'>xindot.com</a>"},eResume:{visible:!0,title:" ❀ 电子简历 ❀ ",img:"https://img.6h5.cn/xiexin.xin/1577155712.png"},intention:{title:" ❀ 求职意向",list:[{label:"岗位",value:"web前端开发工程师"},{label:"期望薪资",value:["****","20k - 25k"][v]},{label:"地点",value:"杭州"},{label:"工作性质",value:"全职"}]},edu:{title:" ❀ 教育背景",list:[{time:"2010.9 - 2014.6",school:"杭州师范大学理学院",major:"应用物理学"},{time:"2009.9 - 2010.6",school:"信阳市商城高中",major:"理科"},{time:"2006.9 - 2009.6",school:"信阳市商城达权店高中",major:"理科"}]},work:{title:" ❀ 工作经历",list:[{time:"2017.2 至今",company:"浙江聚励云机械科技有限公司",duty:"web前端负责人/项目经理",companyDesc:"是一家为工程机械行业提供服务的物联网+互联网公司，公司产品主要包含云盒硬件和APP、SaaS等软件。",dutyDesc:"主要负责企业官网、APP内h5页面、配件商城全栈、管理后台若干、微信支付宝支付及退款、七牛文件操作、为业务稳定提供部分接口、小程序等项目；主要技术用到了es6、vue、react、node、webpack、nginx、mysql、sequelize、uni-app；使用了VSCode、HBuilderX、微信开发、支付宝小程序开发、Termius等工具。"},{time:"2015.10 - 2017.2",company:"杭州目的地科技有限公司",duty:"web前端开发",companyDesc:"是一家境外旅游+户外直播的互联网公司。主要产品是APP和PC管理端。",dutyDesc:"主要负责旅游项目官网、运营管理后台、作者管理后台、翻译后台、webviewH5下单流程、微信授权话题活动等项目；主要技术包含Nodejs，Avalon，Vue，git，redis；开发工具包含了Sublime、Atom、Transmit。"},{time:"2014.6 - 2015.10",company:"杭州午苇农作物开发有限公司",duty:"web前端开发",companyDesc:"是一家农产品开发+互联网的生鲜公司，主要产品是pc网站和门店。",dutyDesc:"主要负责ecshop模板搭建，主要页面的二次开发，包括首页重新布局、活动页面制作、配合php同事完善后台一些基本功能页面的实现；主要技术包含：html(H5)、css(3)、JS、jQuery、Bootstrap、git；编辑工具主要使用Sublime。"}]},practice:{title:" ❀ 实践经历",list:[{time:"2014.2 - 2014.6",project:"淘宝网店装修、家教网站维护",duty:"web前端开发",projectDesc:"",dutyDesc:"主要负责淘宝店装修、模板网站搭建装修等；技术主要是html、css、js基础、PhotoShop基础。"}]},project:{title:" ❀ 项目经历",list:[{time:"2019.11 至今",project:"智慧工地项目：pc管理后台",duty:"web前端",projectDesc:"为工地管理方提供一站式软硬件服务",dutyDesc:"vue-cli3 + element-ui + vue-router + axios。"},{time:"2019.7 - 2019.12",project:"环保项目：小程序+浙里办+管理后台",duty:"web前端",projectDesc:"非移动机械信息申报和使用管理",dutyDesc:"主要负责非道微信、支付宝（兼容浙里办）小程序的前端开发和管理后台的开发，小程序主要运用了uni-app框架和支付宝小程序框架，管理后台主要是vue-cli3脚手架+element-ui库、其中使用了axios（request封装）、vue-router、高德地图组件、echarts图表库、二维码生成库等；js库使用cdn、使用rsync优化了发布流程、使用polyfill兼容部分浏览器。"},{time:"2019.6 - 2019.8",project:"加油项目：微信端h5商城",duty:"web前端",projectDesc:"提供油卡充值、话费充值、附近加油站、违章查询、商城功能。",dutyDesc:"主要在微信端使用h5实现app端所有内容，并给app端提供部分webview页面；主要实现的技术点：扩展vue-router使跳转页面不用关系路径问题；使用vue监听路由让页面跳转有过渡效果；商品分类详情页交互、微信支付交互等各种体验的优化。"},{time:"2018.10 - 2019.5",project:"Node接口项目：nApi、antApi",duty:"web前端+Node",projectDesc:"为公司部分项目提供部分基础接口",dutyDesc:"使用 nodejs + express/koa2 + mysql + jwt 实现部分基础接口：为APP客户端提供七牛云/阿里OSS上传图片的uptoken；接口验证；微信分享配置接口；excel导出工具；页面埋点日志接口；系统报错邮件提醒等。"},{time:"2018.5 - 2018.10",project:"贷款项目：PC管理后台",duty:"web前端",projectDesc:"为公司提供管理贷款信息平台",dutyDesc:"主要使用react + ant.design + react-router搭建管理后台，其中使用umi对项目进行本地运行和打包。"},{time:"2018.3 - 2018.6",project:"配件商城：APP内h5+PC管理后台",duty:"web前端+Node",projectDesc:"为公司提供一整套商城系统服务",dutyDesc:"接口nodejs + express + mysql；h5端使用vue ssr服务端渲染；管理后台vuejs + webpack3；主要难点：微信支付宝支付验签、订单部分退款等。"},{time:"2017.10 - 2018.3",project:"抽奖活动+聊天室",duty:"web前端+Node",projectDesc:"用户参与h5抽奖活动并参与聊天讨论",dutyDesc:"主要使用nodejs + websocket + mysql；h5端使用vue ssr服务端渲染；socket实现消息主动推送。"}]},awards:{title:" ❀ 获奖经历",list:["➢ 2011年度第八届全国残疾人运动会优秀志愿者","➢ 2013年度中国大学生自强之星提名奖"]},assessment:{title:" ❀ 自我评价",list:["➢ 具有良好的语言表达和沟通能力，拥有良好的团队协作精神和较强的时间意识，工作主动认真，诚实守信，具有较强的责任感。善于学习，肯花时间，不埋怨。","➢ 具有较强的学习和自学新知识的能力，热爱IT行业。","➢ 有较好的团队协调能力，无论对同事还是对学生，都是一个很好的助手。","➢ 热心公益，个人事迹曾被<a href='http://qjwb.zjol.com.cn/html/2013-04/11/content_2087686.htm?div=-1' target='_blank'>钱江晚报</a>报道过。"]}}},created:function(){var t=(new Date).getHours();this.blackMode=!(6<=t&&t<18)},mounted:function(){if("pc"==u){var t=document.getElementById("pdfCentent").offsetHeight;document.getElementById("pdfCentent_left").style.height=t+"px"}},methods:{goPage:function(t,e){this.tabSelectedIdx=e},getPdf:function(){var t=this;"pc"==u?(this.pdf.doing=!0,setTimeout((function(){t.pdf.doing=!1}),5e3),this.ExportSavePdf(this.pdf.htmlTitle,this.pdf.nowTime)):alert("请在PC端使用导出功能")},createQrCodeImg:function(){}}},m=(s("b5fa"),s("9d0d"),Object(l.a)(f,(function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"view-page"},[s("div",{staticClass:"main"},[t.pdf.visible?s("div",{staticClass:"download-pdf",class:t.blackMode?"black":"white",style:t.pdf.doing?"opacity:.5":"",on:{click:t.getPdf}},[s("img",{attrs:{src:t.pdf.icon,alt:""}}),s("p",[t._v("下载PDF"+t._s(t.pdf.doing?"中...":""))])]):t._e(),s("div",{staticClass:"content-1",class:t.blackMode?"black":"white",attrs:{id:"pdfCentent"}},[s("div",{staticClass:"left",attrs:{id:"pdfCentent_left"},on:{click:function(e){t.blackMode=!t.blackMode}}},[s("div",{staticClass:"avatar"},[s("img",{attrs:{src:t.me.avatar,alt:""}}),s("p",[t._v(t._s(t.me.words))])]),s("div",{staticClass:"name"},[s("h1",[t._v(t._s(t.me.name))]),s("p",[t._v(t._s(t.me.duty))])]),s("div",{staticClass:"me-info"},t._l(t.me.list,(function(e,a){return s("p",{key:a},[s("span",{staticClass:"s-1"},[t._v(t._s(e.label))]),t._v("：\n            "),s("span",{staticClass:"s-2"},["tel"==e.type?s("a",{attrs:{href:"tel:"+e.value}},[t._v(t._s(e.value))]):"email"==e.type?s("a",{attrs:{href:"mailto:"+e.value}},[t._v(t._s(e.value))]):s("span",[t._v(t._s(e.value))])])])})),0),s("div",{staticClass:"skill"},[s("h3",[t._v(t._s(t.skill.title))]),t._l(t.skill.list,(function(e,a){return s("div",{key:a},[s("p",{staticClass:"p-1"},[s("span",{staticClass:"s-1"},[t._v(t._s(e.label))]),s("span",{staticClass:"s-2 float-right clearfix"},[t._v(t._s(e.percent-100)+"%")])]),s("p",{staticClass:"p-2"},[s("span",{style:"width:"+e.percent+"%;"})])])}))],2),s("div",{staticClass:"interest"},[s("h3",[t._v(t._s(t.interest.title))]),s("p",{domProps:{innerHTML:t._s(t.interest.desc)}})]),s("div",{staticClass:"e-resume"},[s("h3",[t._v(t._s(t.eResume.title))]),s("p",[s("img",{attrs:{src:t.eResume.img,alt:""}})])])]),s("div",{staticClass:"right"},[s("div",{staticClass:"intention"},[s("h2",[s("span",[t._v(t._s(t.intention.title))])]),t._l(t.intention.list,(function(e,a){return s("div",{key:a},[s("span",[t._v("➢ "+t._s(e.label)+"："+t._s(e.value))])])}))],2),s("div",{staticClass:"edu"},[s("h2",[s("span",[t._v(t._s(t.edu.title))])]),t._l(t.edu.list,(function(e,a){return s("div",{key:a},[s("p",[s("span",{staticClass:"s-1"},[t._v(t._s(e.time))]),s("span",{staticClass:"s-2"},[t._v(t._s(e.school))]),s("span",{staticClass:"s-3 float-right clearfix"},[t._v(t._s(e.major))])])])}))],2),s("div",{staticClass:"work"},[s("h2",[s("span",[t._v(t._s(t.work.title))])]),t._l(t.work.list,(function(e,a){return s("div",{key:a},[s("p",{staticClass:"p-1"},[s("span",{staticClass:"s-1"},[t._v(t._s(e.time))]),s("span",{staticClass:"s-2"},[t._v(t._s(e.company))]),s("span",{staticClass:"s-3 float-right clearfix"},[t._v(t._s(e.duty))])]),s("p",{staticClass:"p-2"},[s("span",{staticClass:"bold"},[t._v("公司介绍：")]),t._v(t._s(e.companyDesc))]),s("p",{staticClass:"p-2"},[s("span",{staticClass:"bold"},[t._v("工作内容：")]),t._v(t._s(e.dutyDesc))])])}))],2),s("div",{staticClass:"practice"},[s("h2",[s("span",[t._v(t._s(t.practice.title))])]),t._l(t.practice.list,(function(e,a){return s("div",{key:a},[s("p",{staticClass:"p-1"},[s("span",{staticClass:"s-1"},[t._v(t._s(e.time))]),s("span",{staticClass:"s-2"},[t._v(t._s(e.project))]),s("span",{staticClass:"s-3 float-right clearfix"},[t._v(t._s(e.duty))])]),s("p",{staticClass:"p-2"},[s("span",{staticClass:"bold"},[t._v("工作内容：")]),t._v(t._s(e.dutyDesc))])])}))],2),s("div",{staticClass:"project"},[s("h2",[s("span",[t._v(t._s(t.project.title))])]),t._l(t.project.list,(function(e,a){return s("div",{key:a},[s("p",{staticClass:"p-1"},[s("span",{staticClass:"s-1"},[t._v(t._s(e.time))]),s("span",{staticClass:"s-2"},[t._v(t._s(e.project))]),s("span",{staticClass:"s-3 float-right clearfix"},[t._v(t._s(e.duty))])]),s("p",{staticClass:"p-2"},[s("span",{staticClass:"bold"},[t._v("项目介绍：")]),t._v(t._s(e.projectDesc))]),s("p",{staticClass:"p-2"},[s("span",{staticClass:"bold"},[t._v("工作内容：")]),t._v(t._s(e.dutyDesc))])])}))],2),s("div",{staticClass:"awards"},[s("h2",[s("span",[t._v(t._s(t.awards.title))])]),t._l(t.awards.list,(function(e,a){return s("p",{key:a},[t._v(t._s(e))])}))],2),s("div",{staticClass:"assessment"},[s("h2",[s("span",[t._v(t._s(t.assessment.title))])]),t._l(t.assessment.list,(function(e,a){return s("p",{key:a},[s("span",{domProps:{innerHTML:t._s(e)}})])}))],2)])])])])}),[],!1,null,"987f38b8",null).exports),h=[{path:"/",component:m},{path:"/*",component:m}],_=new r.a({routes:h}),b=s("f230"),y=s.n(b),g=s("cf03"),C=s.n(g),w={install:function(t){t.prototype.ExportSavePdf=function(t,e){var s=document.getElementById("pdfCentent"),a=s.offsetWidth,i=s.offsetHeight,n=document.createElement("canvas");n.width=2*a,n.height=2*i;var l=n.getContext("2d");l.scale(2,2);var c=s.getBoundingClientRect();l.translate(-c.left,-c.top-0);var o={logging:!1,useCORS:!0,scale:2,canvas:n,width:a,height:i,dpi:2*window.devicePixelRatio};y()(s,o).then((function(s){for(var a=new C.a("p","mm","a4"),i=s.getContext("2d"),n=Math.floor(277*s.width/190),l=0;l<s.height;){var c=document.createElement("canvas");c.width=s.width,c.height=Math.min(n,s.height-l),c.getContext("2d").putImageData(i.getImageData(0,l,c.width,c.height),0,0);var o=Math.min(277,190*c.height/c.width),r=c.toDataURL("image/jpeg",1);a.addImage(r,"JPEG",10,10,190,o),(l+=n)<s.height&&a.addPage()}a.save(t+e)}))}}};i.a.use(w),i.a.config.productionTip=!1,new i.a({router:_,render:function(t){return t(c)}}).$mount("#app")},"5c0b":function(t,e,s){"use strict";var a=s("eb65");s.n(a).a},6389:function(t,e){t.exports=VueRouter},"69d3":function(t,e,s){},"8bbf":function(t,e){t.exports=Vue},"9d0d":function(t,e,s){"use strict";var a=s("4a06");s.n(a).a},b5fa:function(t,e,s){"use strict";var a=s("69d3");s.n(a).a},cf03:function(t,e){t.exports=jsPDF},eb65:function(t,e,s){},f230:function(t,e){t.exports=html2canvas}});