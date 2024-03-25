import { useTranslation } from "react-i18next";
import { graphql } from "react-relay";
import { useRouter } from "next/navigation";
import { useForm } from "react-hook-form";
import { useMaybeFragment } from "@wdp/lib/api/hooks";
import { Select } from "components/forms";
import SearchBar from "components/composed/search/SearchBar";
import { SearchModalFragment$key } from "@/relay/SearchModalFragment.graphql";
import Modal from "../BaseModal";
import * as Styled from "./SearchModal.styles";

type ModalProps = React.ComponentProps<typeof Modal>;

function getSearchRouteByType(entity?: { type: string; slug: string }) {
  switch (entity?.type) {
    case "Community":
      return `/communities/${entity.slug}/search`;

    case "Collection":
      return `/collections/${entity.slug}/search`;

    default:
      return "/search";
  }
}

export default function SearchModal({ dialog, data }: Props) {
  const selectId = "searchFilter";
  const searchId = "searchInput";
  const { t } = useTranslation();
  const searchData = useMaybeFragment(fragment, data);
  const router = useRouter();

  const { register, handleSubmit } = useForm();

  const onSubmit = (data: Record<string, string>) => {
    const entity = data.entity ? JSON.parse(data.entity) : null;
    const pathname = getSearchRouteByType(entity);

    if (!pathname) {
      console.warn("No search route found.");
      return null;
    }
    const params = new URLSearchParams({ q: data.q });

    router.push(`${pathname}?${params.toString()}`);

    if (dialog && dialog.hide) {
      dialog.hide();
    }
  };

  const breadcrumbs =
    searchData?.breadcrumbs && searchData.breadcrumbs.length > 0
      ? [...searchData.breadcrumbs]
          .reverse()
          .filter((entity) => entity.crumb.__typename !== "Item")
      : null;

  return (
    <Modal dialog={dialog} label={t("search.label")}>
      <Styled.Form onSubmit={handleSubmit(onSubmit)}>
        <SearchBar id={searchId} {...register("q")} />
        {(searchData || breadcrumbs) && (
          <Styled.SelectWrapper>
            <Styled.SelectLabel
              htmlFor={selectId}
              className="t-label-mix a-color-lighter"
            >
              {t("search.search_area_label")}
            </Styled.SelectLabel>
            <Select id={selectId} {...register("entity")}>
              {searchData && searchData.__typename !== "Item" && (
                <option
                  selected
                  value={JSON.stringify({
                    type: searchData.__typename,
                    slug: searchData.slug,
                  })}
                >
                  {searchData.title}
                </option>
              )}
              {breadcrumbs &&
                breadcrumbs.map(({ crumb: { __typename, slug, title } }) => (
                  <option
                    key={slug}
                    value={JSON.stringify({ type: __typename, slug })}
                  >
                    {title}
                  </option>
                ))}
              <option value={""}>{t("search.instance_scope_label")}</option>
            </Select>
          </Styled.SelectWrapper>
        )}
      </Styled.Form>
    </Modal>
  );
}

interface Props extends Pick<ModalProps, "dialog"> {
  data?: SearchModalFragment$key | null;
}

const fragment = graphql`
  fragment SearchModalFragment on Entity {
    __typename
    ... on Sluggable {
      slug
    }
    ... on Entity {
      title
    }
    breadcrumbs {
      crumb {
        __typename
        ... on Sluggable {
          slug
        }
        ... on Entity {
          title
        }
      }
    }
  }
`;
