import { Story } from "@storybook/react";
import SearchButton from ".";
type Props = React.ComponentProps<typeof SearchButton>;

export default {
  title: "Components/Atomic/SearchButton",
  component: SearchButton,
  argTypes: {
    size: {
      options: ["sm", "lg"],
      control: { type: "select" },
    },
  },
  parameters: {
    themes: {
      default: "custom10",
    },
  },
};

const Template: Story<Props> = ({ ...args }) => <SearchButton {...args} />;

export const Playground: Story<Props> = Template.bind({});

Playground.args = {
  size: "lg",
};
