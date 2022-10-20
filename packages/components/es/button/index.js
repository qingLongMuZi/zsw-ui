import Btn from "./button.js";
const withInstall = (comp) => {
  comp.install = (app) => {
    app.component(comp.name, comp);
  };
  return comp;
};
const ZuiBtn = withInstall(Btn);
export {
  ZuiBtn as default
};
