import React from "react";
import ContributorCreateOrganizationForm from "../ContributorCreateOrganizationForm";
import Drawer from "components/layout/Drawer";
import { useTranslation } from "react-i18next";
import { DialogProps } from "reakit/Dialog";

export default function ContributorCreateOrganizationDrawer({
  dialog,
}: {
  dialog: DialogProps;
}) {
  const { t } = useTranslation();

  return (
    <Drawer
      label={t("actions.create.contributor.organization")}
      header={t("drawers.createOrganization.title")}
      dialog={dialog}
      hideOnClickOutside={false}
    >
      <ContributorCreateOrganizationForm onSuccess={dialog.hide} />
    </Drawer>
  );
}
