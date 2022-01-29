import { graphql, useFragment } from "react-relay";
import getEntityTitle from "./getEntityTitle";
import { EntityTitleFactoryFragment$key } from "@/relay/EntityTitleFactoryFragment.graphql";

export default function EntityTitleFactory({ data }: Props) {
  const entity = useFragment(fragment, data);

  return getEntityTitle(entity);
}

interface Props {
  data: EntityTitleFactoryFragment$key;
}

const fragment = graphql`
  fragment EntityTitleFactoryFragment on Entity {
    ...getEntityTitleFragment
  }
`;
