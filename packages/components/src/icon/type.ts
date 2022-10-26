import { ExtractPropTypes } from 'vue'

export const iconProps = {
  size: String,
  color: String
}

export type IconProps = ExtractPropTypes<typeof iconProps>

