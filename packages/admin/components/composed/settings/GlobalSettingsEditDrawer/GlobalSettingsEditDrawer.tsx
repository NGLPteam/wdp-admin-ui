import * as React from "react";
import { useTranslation } from "react-i18next";
import { graphql } from "relay-runtime";
import GlobalSettingsEditForm from "components/composed/settings/GlobalSettingsEditForm";
import Drawer from "components/layout/Drawer";
import { QueryWrapper } from "components/api";

import { useViewerContext } from "contexts";
import type { GlobalSettingsEditDrawerQuery as Query } from "__generated__/GlobalSettingsEditDrawerQuery.graphql";
import type { DialogProps } from "reakit/Dialog";

export default function GlobalSettingsEditDrawer({
  dialog, // params,
}: {
  dialog: DialogProps;
  params: Record<string, string>;
}) {
  const { t } = useTranslation();

  const { globalAdmin } = useViewerContext();

  return globalAdmin ? (
    <QueryWrapper<Query> query={query}>
      {({ data }) => {
        return (
          <Drawer
            header={t("actions.edit.global_settings_header")}
            dialog={dialog}
            hideOnClickOutside={false}
          >
            {data?.globalConfiguration && (
              <GlobalSettingsEditForm
                data={data?.globalConfiguration}
                onSuccess={dialog.hide}
                onCancel={dialog.hide}
              />
            )}
          </Drawer>
        );
      }}
    </QueryWrapper>
  ) : null;
}

const query = graphql`
  query GlobalSettingsEditDrawerQuery {
    globalConfiguration {
      ...GlobalSettingsEditFormFragment
    }
  }
`;
