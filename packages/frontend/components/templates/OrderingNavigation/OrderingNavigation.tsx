import { graphql, useFragment } from "react-relay";
import Container from "@/components/layout/Container";
import { OrderingNavigationTemplateFragment$key } from "@/relay/OrderingNavigationTemplateFragment.graphql";
import NavButtons from "./NavButtons";

export default function OrderingNavigationTemplate({
  data,
}: {
  data?: OrderingNavigationTemplateFragment$key | null;
}) {
  const template = useFragment(fragment, data);

  const { orderingDefinition, orderingPair } = template ?? {};

  const { background, width } = orderingDefinition ?? {};

  return orderingPair?.exists ? (
    <Container
      width="max"
      bgColor={background}
      halfWidthTemplate={width === "HALF"}
    >
      <NavButtons data={template} />
    </Container>
  ) : null;
}

const fragment = graphql`
  fragment OrderingNavigationTemplateFragment on OrderingTemplateInstance {
    orderingDefinition: definition {
      background
      width
    }
    orderingPair {
      exists
    }
    ...NavButtonsFragment
  }
`;
