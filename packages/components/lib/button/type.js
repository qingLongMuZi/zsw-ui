"use strict";
Object.defineProperties(exports, { __esModule: { value: true }, [Symbol.toStringTag]: { value: "Module" } });
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
exports.ButtonThem = ButtonThem;
exports.buttonProps = buttonProps;
