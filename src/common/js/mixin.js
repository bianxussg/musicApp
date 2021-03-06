/**
 * Created by Administrator on 2018/3/6/006.
 */
import {mapGetters,mapMutations,mapActions} from 'vuex'
import {playMode} from 'common/js/config'
import {shuffle} from 'common/js/util'
export const playlistMixin = {
  computed:{
    ...mapGetters([
      'playlist'
    ])
  },
  mounted(){
    this.handlePlaylist(this.playlist)
  },
  activated(){
    this.handlePlaylist(this.playlist)
  },
  watch:{
    playlist(newVal){
      this.handlePlaylist(newVal)
    }
  },
  methods:{
    handlePlaylist(){
      throw new Error('component must implement handlePlaylist method')
    }
  }
}


export const playerMixin = {
  computed:{
    iconMode(){
      if(this.mode === playMode.sequence){
        return 'icon-sequence'
      }else if(this.mode === playMode.loop){
        return 'icon-loop'
      }else{
        return 'icon-random'
      }
    },
    ...mapGetters([
      'playlist',
      'currentSong',
      'mode',
      'sequenceList'
    ])
  },
  methods:{
    changeMode(){
      const mode = (this.mode+1) % 3
      this.setPlayMode(mode)
      let list = null
      if(mode===playMode.random){
        list = shuffle(this.sequenceList)
      }else {
        list = this.sequenceList
      }
      this.resetCurrentIndex(list)
      this.setPlayList(list)
    },
    resetCurrentIndex(list){
      let index = list.findIndex((item)=>{
        return item.id===this.currentSong.id
      })
      this.setCurrentIndex(index)
    },
    ...mapMutations({
      setPlayingState:'SET_PLAYING_STATE',
      setCurrentIndex:'SET_CURRENT_INDEX',
      setPlayMode:'SET_PLAY_MODE',
      setPlayList:'SET_PLAYLIST'
    })
  }
}

export const searchMixin = {
  data(){
    return{
      query:''
    }
  },
  computed:{
    ...mapGetters([
      'searchHistory'
    ])
  },
  methods:{
    blurInput(){
      this.$refs.searchBox.blur()
    },
    saveSearch(){
      console.log('saveSearch')
      this.saveSearchHistory(this.query)
    },
    onQueryChange(query){
      this.query = query
    },
    addQuery(query){
      this.$refs.searchBox.setQuery(query)
    },

    ...mapActions([
      'saveSearchHistory',
      'deleteSearchHistory',
    ])
  }
}
