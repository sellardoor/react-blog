
/**
 * 获取url参数
 * @param {String} variable 要获取的参数
 */
export function getQueryVariable(variable) {
  var query = window.location.search.substring(1);
  var vars = query.split('&');
  for (var i = 0; i < vars.length; i++) {
    var pair = vars[i].split('=');
    if (pair[0] == variable) {
      return pair[1];
    }
  }
  return false;
}
/**
 * 数组结构转树结构
 * @param {Array} data 要转化的数组
 */
export function arrayToTree(data){
  let result = []
  let map = {}
  data.forEach(item => {
    map[item._id] = item
  })
  data.forEach(item => {
    let parent = map[item.pid]
    if(parent){
      (parent.children || (parent.children = [])).push(item)
    }else{
      result.push(item)
    }
  })
  return result
}