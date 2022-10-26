import { defineComponent, useSlots, computed, openBlock, createElementBlock, normalizeClass, unref, normalizeStyle, Fragment, renderSlot, createCommentVNode } from "vue";
import "../components/src/button/style/index.css";
import { buttonProps, ButtonThem } from "./type.js";
import { ColorVerify } from "../utils/verifyFun.js";
const _hoisted_1 = ["disabled"];
const _hoisted_2 = { key: 1 };
const __default__ = defineComponent({
  name: "ZswButton"
});
const _sfc_main = /* @__PURE__ */ defineComponent({
  ...__default__,
  props: buttonProps,
  setup(__props) {
    const props = __props;
    useSlots();
    const styleClass = computed(() => {
      return {
        [`z-btn--${props.them}`]: ButtonThem.includes(props.them || ""),
        "is-round": props.ellipse,
        "is-circle": props.circle
      };
    });
    const style = computed(() => {
      return {
        "background-color": ColorVerify(props.them),
        "color": ColorVerify(props.them) && "#fff",
        "width": props.width,
        "height": props.height
      };
    });
    return (_ctx, _cache) => {
      return openBlock(), createElementBlock("button", {
        ref: "_ref",
        class: normalizeClass(["z-btn", unref(styleClass)]),
        style: normalizeStyle(unref(style)),
        disabled: props.disabled
      }, [
        _ctx.loading ? (openBlock(), createElementBlock(Fragment, { key: 0 }, [
          _ctx.$slots.loading ? renderSlot(_ctx.$slots, "loading", { key: 0 }) : createCommentVNode("", true)
        ], 64)) : createCommentVNode("", true),
        _ctx.$slots.default ? (openBlock(), createElementBlock("span", _hoisted_2, [
          renderSlot(_ctx.$slots, "default")
        ])) : createCommentVNode("", true)
      ], 14, _hoisted_1);
    };
  }
});
export {
  _sfc_main as default
};
