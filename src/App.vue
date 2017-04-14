<template>
  <div id="app">
    <div class="header"></div>
    <mavonEditor></mavonEditor>
  </div>
</template>

<script type="text/ecmascript-6">
import {mavonEditor} from 'mavon-editor'
export default {
  name: 'app',
  components: {
    'mavonEditor': mavonEditor
  }
}
</script>

<style lang="stylus" rel="stylesheet/stylus">
  body
    margin 0
    padding 0

  .header
    width 100%
    height 200px
</style>
