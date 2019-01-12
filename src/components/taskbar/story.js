import { h } from "preact";
import { storiesOf } from "@storybook/react";
import Taskbar from "./index.js";
import Button from "../button/index.js";
import Icon from "../icon/index.js";

storiesOf("Taskbar", module).add("Render a taskbar", () => (
  <Taskbar>
    <Button classNames="bold left">
      <Icon size="16" name="folder" />
      Taskbar
    </Button>
    <Button classNames="left flex-taskbar active">
      <Icon size="16" name="folder" />
      Control panel
    </Button>
    <Button classNames="left flex-taskbar">
      <Icon size="16" name="folder" />
      Control panel
    </Button>
  </Taskbar>
));
