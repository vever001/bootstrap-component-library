import { withDesign } from "storybook-addon-designs";
import demoData from "@oe/data-icon/data";
import defaultSprite from "@oe/bootstrap/bootstrap-icons.svg";
import icon from "./icon.html.twig";
import "!!null-loader!@oe/theme-oe/scss/_icon.scss";
import { getIconControls } from "@oe/story-utils";

const getArgTypes = (data) => {
  return {
    ...getIconControls("icon", data),
  };
};

const applyArgs = (data, args) => {
  return Object.assign(data, args);
};

export default {
  title: "Components/Icon",
  decorators: [withDesign],
  design: {
    type: "figma",
    url:
      "https://www.figma.com/file/vIqhmdQGAgfcDfFs6vb2vZ/OE-Wireframe-kit?node-id=2889%3A6155",
  },
};

export const Default = (args) =>
  icon(applyArgs({ ...demoData, path: defaultSprite }, args));

Default.argTypes = getArgTypes(demoData);