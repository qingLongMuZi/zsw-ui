import { ExtractPropTypes } from "vue"

export const ButtonThem = ['primary', 'success', 'warning', 'danger']

export const buttonProps = {
  them: {
    type: String,
    values: ButtonThem || String
  },
  plain: Boolean,
  round: Boolean,
  circle: Boolean,
  disabled: Boolean,
  text: Boolean,
  loading: Boolean,
  width: String,
  height: String,
}

export type ButtonProps = ExtractPropTypes<typeof buttonProps>