"use strict";
var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __export = (target, all) => {
  for (var name in all)
    __defProp(target, name, { get: all[name], enumerable: true });
};
var __copyProps = (to, from, except, desc) => {
  if (from && typeof from === "object" || typeof from === "function") {
    for (let key of __getOwnPropNames(from))
      if (!__hasOwnProp.call(to, key) && key !== except)
        __defProp(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable });
  }
  return to;
};
var __toCommonJS = (mod) => __copyProps(__defProp({}, "__esModule", { value: true }), mod);

// src/index.tsx
var src_exports = {};
__export(src_exports, {
  Avatar: () => Avatar,
  Button: () => Button,
  ThemeMenu: () => ThemeMenu
});
module.exports = __toCommonJS(src_exports);

// src/components/Button.tsx
var import_styles = require("@radix-ui/themes/styles.css");
var import_themes = require("@radix-ui/themes");
var import_jsx_runtime = require("react/jsx-runtime");
var Button = (props) => {
  return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(import_themes.Button, { ...props, className: "bg-orange-400", children: props.children });
};

// src/components/ThemeMenu.tsx
var import_styles2 = require("@radix-ui/themes/styles.css");
var import_themes2 = require("@radix-ui/themes");
var import_jsx_runtime2 = require("react/jsx-runtime");
var ThemeMenu = (props) => {
  return /* @__PURE__ */ (0, import_jsx_runtime2.jsxs)(
    import_themes2.Theme,
    {
      ...props,
      style: { width: "100%", minHeight: "100%", padding: "0px" },
      children: [
        /* @__PURE__ */ (0, import_jsx_runtime2.jsx)(import_themes2.ThemePanel, {}),
        props.children
      ]
    }
  );
};

// src/components/Avatar.tsx
var import_themes3 = require("@radix-ui/themes");
var import_jsx_runtime3 = require("react/jsx-runtime");
function Avatar(props) {
  return /* @__PURE__ */ (0, import_jsx_runtime3.jsx)(import_themes3.Avatar, { ...props });
}
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {
  Avatar,
  Button,
  ThemeMenu
});
