// 组件注册

import Btn from "./button.vue"
import { withInstall } from "@zsw-ui/utils"

export const ZuiBtn = withInstall(Btn)

export default ZuiBtn

export * from './type'