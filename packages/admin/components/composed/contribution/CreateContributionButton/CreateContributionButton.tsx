import { useTranslation } from "react-i18next";
import { ButtonControlDrawer } from "components/atomic";

export default function CreateContributionButton({
  parentSlug,
  type,
  onContributor,
}: Props) {
  const { t } = useTranslation();

  const drawer = onContributor
    ? "addContributorContribution"
    : type === "item"
      ? "addItemContribution"
      : "addCollectionContribution";

  return parentSlug ? (
    <ButtonControlDrawer
      icon="plus"
      drawer={drawer}
      drawerQuery={{
        drawerSlug: parentSlug || undefined,
        drawerContributionType: type,
      }}
      actions={onContributor ? "contributors.update" : "self.update"}
    >
      {t("actions.create.contribution")}
    </ButtonControlDrawer>
  ) : null;
}

interface Props {
  parentSlug?: string | null;
  onContributor?: boolean;
  type: "item" | "collection";
}
