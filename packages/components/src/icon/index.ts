import Icon from "./icon.vue"
import AllIcon from "./all_icon.vue"
import BookmarkIcon from "./bookmark_icon.vue"
import CloseIcon from "./close_icon.vue"
import CameraIcon from "./camera_icon.vue"
import LoveIcon from "./love_icon.vue"

import { withInstall } from "@zsw-ui/utils"

const ZuiIcon = withInstall(Icon)
const ZuiAllIcon = withInstall(AllIcon)
const ZuiBookmarkIcon = withInstall(BookmarkIcon)
const ZuiCloseIcon = withInstall(CloseIcon)
const ZuiCameraIcon = withInstall(CameraIcon)
const ZuiLoveIcon = withInstall(LoveIcon)

export default ZuiIcon

export * from './type'

export {
  ZuiIcon,
  ZuiAllIcon,
  ZuiBookmarkIcon,
  ZuiCloseIcon,
  ZuiCameraIcon,
  ZuiLoveIcon,
}