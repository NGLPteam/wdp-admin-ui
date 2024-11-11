import { useSharedListTemplateFragment } from "@/components/templates/shared/shared.list.graphql";
import { sharedListTemplateFragment$key } from "@/relay/sharedListTemplateFragment.graphql";
import { getBgClass } from "@/components/templates/helpers/bgColor";
import SeeAll from "../../SeeAll";
import List from "../../List";
import * as Styled from "./Card.styles";

export default function CardListBlock({
  data,
}: {
  data?: sharedListTemplateFragment$key;
}) {
  const {
    linksDefinition,
    descendantsDefinition,
    slots: _slots,
    entityList,
  } = useSharedListTemplateFragment(data);

  const { empty } = entityList ?? {};

  if (empty) return null;

  const { background, title, showSeeAllButton, seeAllButtonLabel } =
    linksDefinition ?? descendantsDefinition ?? {};

  const showHeroImage = false;

  const bgClass = getBgClass(background);

  return (
    <Styled.Wrapper className={bgClass}>
      {!!title && <Styled.Header>{title}</Styled.Header>}
      {showHeroImage && <Styled.HeroImage />}
      <List variant="CARDS" bgColor={background} data={entityList} />
      <SeeAll
        alignment="center"
        visible={!!showSeeAllButton}
        buttonLabel={seeAllButtonLabel}
        schema="schema"
      />
    </Styled.Wrapper>
  );
}
