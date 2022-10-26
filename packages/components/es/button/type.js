const ButtonThem = ["primary", "success", "warning", "danger"];
const buttonProps = {
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
};
export {
  ButtonThem,
  buttonProps
};
