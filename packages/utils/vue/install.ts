import type { App } from "vue"
import type { SFCWidthInstall } from "./typescript"

export const withInstall = <T, E extends Record<string, any>>(
  main:T,
  extra?: E
) => {
  ;(main as SFCWidthInstall<T>).install = (app):void => {
    for(const comp of [main,...Object.values(extra ?? [])]){
      app.component(comp.name, comp)
    }
  }

  if(extra){
    for(const [key,comp] of Object.entries(extra)){
      ;(main as any)[key] = comp
    }
  }

  return main as SFCWidthInstall<T> & E
}