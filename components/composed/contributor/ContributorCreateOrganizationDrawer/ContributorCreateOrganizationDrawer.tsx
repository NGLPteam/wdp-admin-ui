import React from "react";
import Drawer from "components/layout/Drawer";
import { useTranslation } from "react-i18next";
import { DialogProps } from "reakit/Dialog";
import ContributorCreateOrganizationForm from "../ContributorCreateOrganizationForm";

export default function ContributorCreateOrganizationDrawer({
  dialog,
}: {
  dialog: DialogProps;
}) {
  const { t } = useTranslation();

  return (
    <Drawer
      label={t("actions.create.contributor_organization")}
      header={t("actions.create.contributor_organization_header")}
      dialog={dialog}
      hideOnClickOutside={false}
    >
      <ContributorCreateOrganizationForm
        onSuccess={dialog.hide}
        onCancel={dialog.hide}
      />
    </Drawer>
  );
}
