import { ExtractPropTypes } from "vue"

export const ButtonThem = ['primary', 'success', 'warning', 'danger']

export const buttonProps = {
  ellipse: Boolean,
  circle: Boolean,
  them: {
    type: String,
    values: ButtonThem || String
  },
  width: String,
  height: String,
  disabled: Boolean,
  loading: Boolean
}

export type ButtonProps = ExtractPropTypes<typeof buttonProps>