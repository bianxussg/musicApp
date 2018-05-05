/**
 * Created by Administrator on 2018/3/5/005.
 */
function getRandomInt(min,max) {
  return Math.floor(Math.random()*(max-min+1)+min)
}

export function shuffle(arr) {

  if(!(arr instanceof Array)){
    console.log('shuffle的参数不是数组')
    return
  }
  let _arr = arr.slice()
  for(let i = 0 ;i<_arr.length;i++){
    let j = Math.floor(_arr.length * Math.random());
    let temp = _arr[i]
    _arr[i] = _arr[j]
    _arr[j] = temp
  }
  return _arr
}

export function debounce(func,delay) {
  let timer
  return function (...args) {
    if(timer){
      clearTimeout(timer)
    }
    timer = setTimeout(()=>{
      func.apply(this,args)
    },delay)
  }
}
