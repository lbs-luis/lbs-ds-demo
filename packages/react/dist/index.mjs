// src/components/Button.tsx
import "@radix-ui/themes/styles.css";
import { Button as RadixButton } from "@radix-ui/themes";
import { jsx } from "react/jsx-runtime";
var Button = (props) => {
  return /* @__PURE__ */ jsx(RadixButton, { ...props, className: "bg-orange-400", children: props.children });
};

// src/components/ThemeMenu.tsx
import "@radix-ui/themes/styles.css";
import { Theme, ThemePanel } from "@radix-ui/themes";
import { jsx as jsx2, jsxs } from "react/jsx-runtime";
var ThemeMenu = (props) => {
  return /* @__PURE__ */ jsxs(
    Theme,
    {
      ...props,
      style: { width: "100%", minHeight: "100%", padding: "0px" },
      children: [
        /* @__PURE__ */ jsx2(ThemePanel, {}),
        props.children
      ]
    }
  );
};

// src/components/Avatar.tsx
import { Avatar as Photo } from "@radix-ui/themes";
import { jsx as jsx3 } from "react/jsx-runtime";
function Avatar(props) {
  return /* @__PURE__ */ jsx3(Photo, { ...props });
}
export {
  Avatar,
  Button,
  ThemeMenu
};
