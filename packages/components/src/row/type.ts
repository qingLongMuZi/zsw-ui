import { FlexWarp } from './type';
import { ExtractPropTypes } from "vue" 

export const AlignItems = ['flex-start', 'flex-end', 'center', 'baseline', 'stretch']

export const JustifyContent = ['flex-start','flex-end','center','space-between','space-around']

export const rowProps = {
  alignItems: {
    type: String,
    values: AlignItems,
    default: 'center'
  },
  justifyContent: {
    type: String,
    values: JustifyContent,
    default: 'flex-start'
  },
  wrap: Boolean
}

export type RowProps = ExtractPropTypes<typeof rowProps>