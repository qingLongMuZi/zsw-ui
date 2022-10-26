"use strict";
const vue = require("vue");
require("../components/src/button/style/index.css");
const type = require("./type.js");
const verifyFun = require("../utils/verifyFun.js");
const _hoisted_1 = ["disabled"];
const _hoisted_2 = { key: 1 };
const __default__ = vue.defineComponent({
  name: "ZswButton"
});
const _sfc_main = /* @__PURE__ */ vue.defineComponent({
  ...__default__,
  props: type.buttonProps,
  setup(__props) {
    const props = __props;
    vue.useSlots();
    const styleClass = vue.computed(() => {
      return {
        [`z-btn--${props.them}`]: type.ButtonThem.includes(props.them || ""),
        "is-round": props.ellipse,
        "is-circle": props.circle
      };
    });
    const style = vue.computed(() => {
      return {
        "background-color": verifyFun.ColorVerify(props.them),
        "color": verifyFun.ColorVerify(props.them) && "#fff",
        "width": props.width,
        "height": props.height
      };
    });
    return (_ctx, _cache) => {
      return vue.openBlock(), vue.createElementBlock("button", {
        ref: "_ref",
        class: vue.normalizeClass(["z-btn", vue.unref(styleClass)]),
        style: vue.normalizeStyle(vue.unref(style)),
        disabled: props.disabled
      }, [
        _ctx.loading ? (vue.openBlock(), vue.createElementBlock(vue.Fragment, { key: 0 }, [
          _ctx.$slots.loading ? vue.renderSlot(_ctx.$slots, "loading", { key: 0 }) : vue.createCommentVNode("", true)
        ], 64)) : vue.createCommentVNode("", true),
        _ctx.$slots.default ? (vue.openBlock(), vue.createElementBlock("span", _hoisted_2, [
          vue.renderSlot(_ctx.$slots, "default")
        ])) : vue.createCommentVNode("", true)
      ], 14, _hoisted_1);
    };
  }
});
module.exports = _sfc_main;
