<template>
  <transition name="slider">
    <div class="singer-detail">
      <music-list :songs="songs" :title="title" :bgimg="bgImage" ></music-list>
    </div>
  </transition>
</template>
<style scoped lang="stylus" rel="stylesheet/stylus">
  @import '~common/stylus/variable'
  .singer-detail
    position fixed
    z-index 100
    top:0
    left 0
    right 0
    bottom 0
    background-color $color-background
  .slider-enter-active,.slider-leave-active
    transition: all 0.3s
  .slider-enter,.slider-leave-to
    transform translate3D(100%,0,0)


</style>
<script>
  import {mapGetters} from 'vuex'
  import {getSingerDetail} from 'api/singer'
  import {ERR_OK} from 'api/config'
  import {createSong} from 'common/js/song'
  import MusicList from 'components/music-list/music-list'
    export default {
      data(){
        return{
            songs:[]
        }
      },
      computed:{
          title(){
              return this.singer.name
          },
        bgImage(){
              return this.singer.avatar
        },
        ...mapGetters([
            'singer'
        ])
      },
      created(){

        this._getDetail()


      // console.log(this.singer.avatar)
      },
      methods:{
        _getDetail() {
          if (!this.singer.id) {
              this.$router.push('/singer');
            return;
          }
          getSingerDetail(this.singer.id).then((res) => {
            //  console.log(this.singer.id);
            if (res.code === ERR_OK) {
              this.songs = this._normalizeSongs(res.data.list)
           // console.log(this.songs)
            }
          })
        },
        _normalizeSongs(list){
            let ret = []
          list.forEach((item)=>{
            let {musicData} = item
            if(musicData.songid && musicData.albumid){
                ret.push(createSong(musicData))
            }
          })
          return ret
        }
      },
      components:{
        MusicList
      }
    }
</script>
