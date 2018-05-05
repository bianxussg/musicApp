/**
 * Created by Administrator on 2018/3/3/003.
 */
let _uid = 0

export function getUid() {
  if (_uid) {
    return _uid
  }
  if (!_uid) {
    const t = (new Date).getUTCMilliseconds()
    console.log('t'+t)
    _uid = Math.round(2147483647 * Math.random()) * t % 1e10
  }
  return _uid
}
