import { Story } from "@storybook/react";
import CoverPlaceholder from "./";
type Props = React.ComponentProps<typeof CoverPlaceholder>;

export default {
  title: "Components/Atomic/CoverPlaceholder",
  component: CoverPlaceholder,
  argTypes: {
    size: {
      options: ["sm", "lg"],
      control: { type: "select" },
    },
  },
};

const examples = [
  {
    title:
      "In the Shadows of History: Grappling with the Past in Italian Culture",
  },
  {
    title:
      "Academic Perceptions of Immigrant and Minority Postsecondary Students",
  },
  {
    title:
      "Teaching and Learning in Higher Education in Canada: Changes over the Last Decade",
  },
  {
    title: 'Book review of "Classroom Environment"',
  },
  {
    title:
      'Programme Structure and Academic Freedom: An Analysis of the "New Programme" in Architecture at the University of Toronto 1968-1983',
  },
  {
    title:
      "Political Science B.A. Graduates from the University of Calgary: Education and Career Paths",
  },
];

const sizes = [250, 150, 100];

const Template: Story<Props> = () => (
  <>
    {sizes.map((width) => (
      <div key={width} className="l-flex l-flex--gap">
        {examples.map((example) => (
          <div key={example.title} style={{ marginBottom: 25, width: width }}>
            <CoverPlaceholder
              width={width}
              seed={example.title}
              title={example.title}
            />
          </div>
        ))}
      </div>
    ))}
  </>
);

export const Default: Story<Props> = Template.bind({});

Default.args = {};
