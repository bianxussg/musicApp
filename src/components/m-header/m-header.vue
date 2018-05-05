<template>
  <div class="m-header">
    <div class="logo"></div>
    <div class="text">小刘。。哈哈</div>
  </div>
</template>

<script>

</script>

<style lang="stylus" scoped rel="stylesheet/stylus">
  @import '~common/stylus/variable'
  @import '~common/stylus/mixin'

  .m-header
    position: relative
    height: 44px
    text-align: center
    //background-color: $color-theme
    color: $color-theme
    font-size: 0
    .logo
      display: inline-block
      vertical-align: top
      margin-top: 6px
      width: 30px
      height: 32px
      margin-right: 9px
      -webkit-background-size: 30px 32px
      background-size: 30px 32px
      bg-image('logo')
    .text
      display: inline-block
      vertical-align: top
      line-height: 44px
      font-size: $font-size-large

  // 以下部分css样式还不知道在哪里可以用到

</style>
