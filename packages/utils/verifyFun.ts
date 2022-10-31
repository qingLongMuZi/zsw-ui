import { colorReg, rgbReg, rgbaReg } from "./reg"

// 验证颜色值
const ColorVerify = function(color?:string){
  if(!color) return false
  if(colorReg.test(color) || rgbReg.test(color) || rgbaReg.test(color)) return color
  return false
}

export {
  ColorVerify
}