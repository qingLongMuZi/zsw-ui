import { colorReg, rgbReg, rgbaReg } from "./reg"

// 把颜色值统一转为rgba
export const colorToRGBA=(color?:string, option:number=1)=>{
  if(!color) return false
  if(rgbaReg.test(color)&&option==1)return color
  if(rgbaReg.test(color)&&option!=1){
    let colorArr = color.replace(/(?:\(|\)|rgba|RGBA)*/g,"").split(",")
    colorArr.pop()
    colorArr.push(String(option))
    return `rgba(${colorArr.join(",")})`
  }
  if(rgbReg.test(color)){
    let colorArr = color.replace(/(?:\(|\)|rgb|RGB)*/g,"").split(",")
    colorArr.push(String(option))
    return `rgba(${colorArr.join(",")})`
  }
  if(colorReg.test(color)){
    // 把颜色值改变成小写
    let nColor = color.toLowerCase()
    // 如果只有三位的值，变成六位
    if(nColor.length===4){
      let colorNew = "#"
      for (let i=1;i<4;i+=1){
        colorNew+=nColor.slice(i,i+1).concat(nColor.slice(i,i+1))
      }
      nColor = colorNew
    }
    // 处理六位的颜色值，转为rgba
    let colorChange:Array<number> = []
    for(let i = 1; i<7; i+=2){
      colorChange.push(parseInt(`0x${nColor.slice(i,i+2)}`))
    }
    colorChange.push(option)
    return `rgba(${colorChange.join(",")})`
  }
  return false
}