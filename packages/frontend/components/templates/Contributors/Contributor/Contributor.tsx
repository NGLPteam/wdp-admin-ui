import { graphql, useFragment } from "react-relay";
import classNames from "classnames";
import NamedLink from "@/components/atomic/links/NamedLink";
import { ContributorFragment$key } from "@/relay/ContributorFragment.graphql";
import ContributorName from "@/components/composed/contributor/ContributorName";
import ContributorAvatar from "@/components/composed/contributor/ContributorAvatar";
import ORCIDLink from "@/components/atomic/links/Link/patterns/ORCIDLink";
import DotList from "@/components/atomic/DotList";
import styles from "./Contributor.module.css";

export default function Contributor({
  data,
  showAvatar = true,
  backParams: _backParams,
}: {
  data?: ContributorFragment$key | null;
  showAvatar?: boolean;
  backParams?: URLSearchParams;
  slug?: string | null;
}) {
  const attribution = useFragment(fragment, data);

  const { roles, contributor } = attribution ?? {};

  if (!roles || !contributor) return null;

  // const href = contributor.slug ? `/contributors/${contributor.slug}?${backParams.toString()}` : "#";

  const href = "#";

  return (
    <li className={styles.item}>
      {showAvatar && (
        <span>
          <ContributorAvatar data={contributor.image} />
        </span>
      )}
      <div>
        <NamedLink href={href} className="default-link-styles">
          <strong>
            <ContributorName data={contributor} />
          </strong>
        </NamedLink>
        <div
          className={classNames("t-copy-lighter t-copy-sm", styles.metadata)}
        >
          {!!roles.length && (
            <DotList>
              {roles.map((r) => (
                <li key={r.identifier}>{r.label}</li>
              ))}
            </DotList>
          )}
          {contributor.affiliation && <p>{contributor.affiliation}</p>}
          {contributor.orcid && (
            <ORCIDLink className={styles.orcid} href={contributor.orcid}>
              {contributor.orcid}
            </ORCIDLink>
          )}
        </div>
      </div>
    </li>
  );
}

const fragment = graphql`
  fragment ContributorFragment on Attribution {
    roles {
      identifier
      label
    }
    contributor {
      affiliation
      orcid
      image {
        ...ContributorAvatarFragment
      }
      ...ContributorNameFragment
    }
  }
`;
