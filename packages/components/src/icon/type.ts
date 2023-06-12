import { ExtractPropTypes } from 'vue'

export const iconProps = {
  size: {
    type: Number,
    default: 30
  },
  lineWidth: {
    type: Number,
    default: 4
  },
  colors: {
    type: Array,
    default: [ '#666', '#E62F62', '	#ff8c00']
  },
  icon:String
}

export type IconProps = ExtractPropTypes<typeof iconProps>

