// 组件注册类型定义

import type { AppContext, Plugin } from "vue"

export type SFCWidthInstall<T> = T&Plugin

export type SFCInstallWithContext<T> = SFCWidthInstall<T> & {
  _context: AppContext | null
}