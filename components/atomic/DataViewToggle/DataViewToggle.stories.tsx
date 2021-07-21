import { Story } from "@storybook/react";
import DataViewToggle, { DataViewOptions } from ".";
type Props = React.ComponentProps<typeof DataViewToggle>;

export default {
  title: "Components/Atomic/DataViewToggle",
  component: DataViewToggle,
  parameters: {
    themes: {
      default: "neutral00",
    },
  },
  argTypes: {
    selectedView: {
      options: DataViewOptions,
      control: { view: "select" },
    },
  },
};

const Template: Story<Props> = (args) => {
  return (
    <>
      <DataViewToggle
        {...args}
        onClick={() => {
          console.info("clicked!");
        }}
      />
      <p id={args.controlsID}>selected view: {args.selectedView}</p>
      <p>Control the selected state with Storybook Controls.</p>
    </>
  );
};

export const Default: Story<Props> = Template.bind({});
Default.args = {
  selectedView: DataViewOptions.table,
  controlsID: "someID",
};
