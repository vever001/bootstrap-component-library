import { withDesign } from "storybook-addon-designs";
import demoData from "@oe/data-accordion/data";
import accordion from "./accordion.html.twig";

const getArgTypes = (data) => {
  return {
    toggle1: {
      name: `toggle 1`,
      type: { name: "string", required: true },
      defaultValue: data.items[0].title,
      description: `Text of the first accordion toggler`,
      table: {
        type: { summary: "string" },
        defaultValue: { summary: "" },
        category: "Content",
      },
      control: {
        type: "text",
      },
    },
    content1: {
      name: `content 1`,
      type: { name: "string", required: true },
      defaultValue: data.items[0].content,
      description: "Text of the first accordion item content",
      table: {
        type: { summary: "string" },
        defaultValue: { summary: "" },
        category: "Content",
      },
      control: {
        type: "text",
      },
    },
    flush: {
      type: { name: "boolean" },
      description: "Variant of the accordion",
      defaultValue: false,
      table: {
        type: { summary: "boolean" },
        defaultValue: { summary: false },
        category: "Style",
      },
    },
  };
};

const applyArgs = (data, args) => {
  data.items[0].title = args[`toggle1`];
  data.items[0].content = args[`content1`];

  return Object.assign(data, args);
};

export default {
  title: "Components/Accordion",
  decorators: [withDesign],
  parameters: {
    design: {
      type: "figma",
      url:
        "https://www.figma.com/file/vIqhmdQGAgfcDfFs6vb2vZ/OE-Wireframe-kit?node-id=2892%3A13354",
    },
  },
};

export const Default = (args) => accordion(applyArgs(demoData, args));

Default.argTypes = getArgTypes(demoData);
