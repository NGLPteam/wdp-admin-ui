import ButtonControl from "./ButtonControl";
import { Story } from "@storybook/react";
import { ICON_KEYS } from "components/factories/IconFactory";
type BaseProps = React.ComponentProps<typeof ButtonControl>;

export default {
  title: "Components/Atomic/Buttons/ButtonControl",
  component: ButtonControl,
  parameters: {
    themes: {
      default: "neutral00",
    },
  },
  argTypes: {
    icon: {
      options: [null, ...ICON_KEYS],
      control: { type: "select" },
    },
    size: {
      options: ["default", "large"],
      control: { type: "select" },
    },
  },
};

interface Props extends BaseProps {
  disabled: boolean;
  text: string;
  href: string;
  "aria-label"?: string;
}

const Template: Story<Props> = ({ text, ...args }) => (
  <ButtonControl {...args}>{text}</ButtonControl>
);

export const Default: Story<Props> = Template.bind({});

Default.args = {
  text: "Button",
  disabled: false,
};

export const WithIcon: Story<Props> = Template.bind({});

WithIcon.args = {
  text: "Button",
  disabled: false,
  icon: "close",
};

export const AsLink: Story<Props> = Template.bind({});

AsLink.args = {
  text: "A Link",
  disabled: false,
  as: "a",
  href: "#",
};

export const IconOnly: Story<Props> = Template.bind({});

IconOnly.args = {
  disabled: false,
  icon: "close",
  "aria-label": "Button",
};

export const WithAuthActions: Story<Props> = Template.bind({});

WithAuthActions.args = {
  disabled: false,
  icon: "edit",
  text: "Edit",
  "aria-label": "Button",
  actions: "self.edit",
  allowedActions: ["self.edit"],
};
