import Multiselect from ".";
import { Story } from "@storybook/react";
import { Controller } from "react-hook-form";
import NullForm from "components/api/NullForm";

type FieldValues = {
  example?: string[];
};

type Props = React.ComponentProps<typeof Multiselect>;

export default {
  title: "Components/Forms/Multiselect",
  component: Multiselect,
  parameters: {
    themes: {
      default: "neutral00",
    },
  },
};

const ITEMS = Array.from({ length: 50 }, (_, i) => ({
  label: `Item ${i + 1}`,
  value: `${i + 1}`,
}));

export const InAForm: Story<Props> = (args) => {
  function handleSubmit(data: Record<string, string[]>) {
    console.info(data);
  }

  return (
    <NullForm<FieldValues> onSubmit={handleSubmit}>
      {({ form: { control } }) => (
        <Controller<FieldValues>
          name="example"
          control={control}
          defaultValue={["1"]}
          render={({ field: { value, ...field } }) => (
            <Multiselect
              value={typeof value === "string" ? [] : value}
              {...args}
              {...field}
            />
          )}
        />
      )}
    </NullForm>
  );
};

InAForm.args = {
  label: "Multiselect Dropdown",
  placeholder: "Multiselect an item",
  description:
    "Description field adding detail or explanation for what this form field or control will do and offering guidance for how to use it.",
  options: ITEMS,
  hideLabel: false,
  required: false,
};

InAForm.argTypes = {
  name: { control: { disable: true } },
  value: { control: { disable: true } },
};
