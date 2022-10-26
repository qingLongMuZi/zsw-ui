// 验证颜色值
const ColorVerify = function(color?:string){
  if(!color) return false
  if(color.indexOf("#")==0){
    let valLen = color.split("#")[1].length;
    if(valLen>=3&&valLen<=6) return color
  }else if(
    (color.indexOf("rgb(")==0&&color.indexOf(")")==color.length-1) ||
    (color.indexOf("rgba(")==0&&color.indexOf(")")==color.length-1)
  ){
    return color
  }
  return false
}

export {
  ColorVerify
}