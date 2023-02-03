import { graphql, readInlineData } from "relay-runtime";
import { getEntityVolumeNumberFragment$key } from "@/relay/getEntityVolumeNumberFragment.graphql";

export default function getEntityVolumeNumber(
  data: getEntityVolumeNumberFragment$key
) {
  const entity = readInlineData(fragment, data);

  return entity?.volumeByName?.number?.content
    ? entity.volumeByName.number.content
    : entity?.volumeNumber?.content;
}

const fragment = graphql`
  fragment getEntityVolumeNumberFragment on AnyEntity @inline {
    ... on Collection {
      volumeByName: ancestorByName(name: "volume") {
        ... on Collection {
          number: schemaProperty(fullPath: "id") {
            ... on StringProperty {
              content
            }
          }
        }
      }
      volumeNumber: schemaProperty(fullPath: "volume.id") {
        ... on StringProperty {
          content
        }
      }
    }
  }
`;
