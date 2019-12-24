<template>
  <div id="app">
    <router-view class="router-view" />
  </div>
</template>

<script>
export default {
  name: "app"
};
</script>

<style lang="scss">
$input-placeholder-color: #aaaaaa;

html,
body,
p,
h1,
h2,
h3,
h4,
h6 {
  margin: 0;
  padding: 0;
}
body {
  background-color: #eeeeee;
}
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

.router-view {
  margin: auto;
  .width-1 {
    margin: auto;
    @media (min-width: 600px) {
      width: 480px;
    }
    @media (min-width: 768px) {
      width: 750px;
    }
    @media (min-width: 992px) {
      width: 970px;
    }
    @media (min-width: 1200px) {
      width: 1170px;
    }
  }
}

//
input,
button,
select,
textarea {
  outline: none;
  -webkit-appearance: none;
  -webkit-tap-highlight-color: transparent;
  border: none;
}

// input placeholder
::-webkit-input-placeholder {
  /* WebKit, Blink, Edge */
  color: $input-placeholder-color;
}
:-moz-placeholder {
  /* Mozilla Firefox 4 to 18 */
  color: $input-placeholder-color;
}
::-moz-placeholder {
  /* Mozilla Firefox 19+ */
  color: $input-placeholder-color;
}
:-ms-input-placeholder {
  /* Internet Explorer 10-11 */
  color: $input-placeholder-color;
}

.skewX-5deg {
  transform: skewX(-5deg);
  -ms-transform: skewX(-5deg);
  -moz-transform: skewX(-5deg);
  -webkit-transform: skewX(-5deg);
  -o-transform: skewX(-5deg);
}

/* 伪类清除浮动 开始 */

.clearfix::after {
  content: ".";
  clear: both;
  display: block;
  overflow: hidden;
  font-size: 0;
  height: 0;
}

.clearfix {
  zoom: 1;
}

/* 伪类清除浮动 结束 */

.float-right {
  float: right;
}

/*省略号*/

.ellipsis {
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
}

.bold {
  font-weight: bold;
}
</style>
