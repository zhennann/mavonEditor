<template>
  <div id="app">
    <section class="page-header">
      <h1 class="project-name">mavonEditor</h1>
      <h3 class="project-tagline">一款基于Vue的markdown编辑器</h3>
      <a href="https://github.com/hinesboy/mavonEditor" class="btn">View on GitHub</a>
      <a href="https://github.com/hinesboy/mavonEditor/zipball/master" class="btn">Download .zip</a>
      <a href="https://github.com/hinesboy/mavonEditor/master" class="btn">Download .tar.gz</a>
    </section>
    <div class="item">
      <h2 class="item-header">
        默认配置
      </h2>
      <mavonEditor class="item-editor" v-model="help"></mavonEditor>
    </div>
    <div class="item">
      <h2 class="item-header">
        自定义工具栏
      </h2>
      <mavonEditor :toolbars="toolbars" class="item-editor" v-model="help"></mavonEditor>
    </div>
    <div class="item">
      <span style="display: block;margin: 30px 0 15px 0;color: #1e6bb8" class="">
        注: 屏幕分辨率低于768px ，取消【单栏|双栏】编辑模式 ，更改为【编辑|预览】切换 ， 并且取消【沉浸式阅读】模式
      </span>
      <img width="100px" height="auto" src="./assets/img/1.png"/>
      <img width="100px" height="auto" src="./assets/img/2.png"/>
    </div>
    <div class="item">
      <h2 class="item-header">
        详细配置API参考<a href="https://github.com/hinesboy/mavonEditor">GitHub</a>
      </h2>
    </div>
    <div class="item">
      <h2 class="item-header">
        后续
      </h2>
      <ul>
        <li>撤销键、清空键、保存按钮</li>
        <li>标题导航</li>
        <li>滚动条样式适配</li>
        <li>自定义工具栏功能键</li>
        <li>移动样式适配</li>
      </ul>
    </div>
  </div>
</template>

<script type="text/ecmascript-6">
import {mavonEditor} from 'mavon-editor'
const HELP = require('./assets/help.json')
export default {
  name: 'app',
  data () {
    return {
      help: HELP.help,
      toolbars: {
        underline: true, // 下划线
        strikethrough: true, // 中划线
        link: true, // 链接
        code: true, // code
        table: true, // 表格
        fullscreen: true, // 全屏编辑
        help: true // 帮助
      }
    }
  },
  components: {
    'mavonEditor': mavonEditor
  }
}
</script>

<style lang="stylus" rel="stylesheet/stylus">
  body
    margin 0
    padding 0
    padding-bottom 50px
  .page-header
    box-sizing border-box
    padding 90px 15px
    width 100%
    height 380px
    color #fff
    text-align center
    background-color #159957
    background-image linear-gradient(120deg, #155799, #159957)
    @media only screen and (max-width 958px)
      height 300px
      padding 60px 15px
    @media only screen and (max-width 768px)
      height 370px
      padding 50px 15px
    .project-name
      margin-top 0
      margin-bottom 0.1rem
      font-size 2.25rem
      @media only screen and (max-width 768px)
        font-size 25px
    .project-tagline
      margin-bottom 2rem
      font-weight normal
      opacity 0.7
      @media only screen and (max-width 768px)
        font-size 16px
    .btn
      padding: 0.6rem 0.9rem
      font-size: 0.9rem
      display: inline-block
      margin-bottom: 1rem
      color: rgba(255, 255, 255, 0.7)
      background-color: rgba(255, 255, 255, 0.08)
      border-color: rgba(255, 255, 255, 0.2)
      border-style: solid
      border-width: 1px
      border-radius: 0.3rem
      transition: color 0.2s, background-color 0.2s, border-color 0.2s
      text-decoration: none
      margin-left 20px
      box-sizing border-box
      &:hover
        color: rgba(255, 255, 255, 0.8)
        text-decoration: none
        background-color: rgba(255, 255, 255, 0.2)
        border-color: rgba(255, 255, 255, 0.3)
      @media only screen and (max-width 768px)
        display: block
        width: 90%
        padding: 0.75rem
        font-size: 0.9rem
        margin-left 5%

  .item
    width 70%
    margin-left 15%
    @media only screen and (max-width 1100px)
      width 80%
      margin-left 10%
    @media only screen and (max-width 768px)
      width 92%
      margin-left 4%
    .item-header
      margin-top: 3.5rem
      margin-bottom: 2rem
      font-weight: normal
      color: #159957
      @media only screen and (max-width 768px)
        margin-top: 2rem
        margin-bottom: 1rem
    .item-editor
      width 100%
      height 500px
</style>
