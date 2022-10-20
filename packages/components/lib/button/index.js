"use strict";
const button = require("./button.js");
const withInstall = (comp) => {
  comp.install = (app) => {
    app.component(comp.name, comp);
  };
  return comp;
};
const ZuiBtn = withInstall(button);
module.exports = ZuiBtn;
