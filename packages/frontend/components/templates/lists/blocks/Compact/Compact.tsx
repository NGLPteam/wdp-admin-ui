import type { DescendantsTemplateData } from "@/components/templates/Descendants/Descendants";
import List from "../../List";
import SeeAll from "../../SeeAll";
import * as Styled from "./Compact.styles";

export default function CompactListBlock({
  data,
}: {
  data: DescendantsTemplateData;
}) {
  const { config, slots } = data;

  return (
    <Styled.Container $gap={50} bgColor={config.background}>
      <Styled.Grid>
        <Styled.TextColumn>
          {!!config.blockTitle && (
            <Styled.Header>{config.blockTitle}</Styled.Header>
          )}
          <List
            items={slots.items}
            variant={config.variant}
            bgColor={config.background}
          />
        </Styled.TextColumn>
        {config.heroImage && <Styled.HeroImage />}
      </Styled.Grid>
      <SeeAll alignment="left" {...config.seeAll} />
    </Styled.Container>
  );
}
