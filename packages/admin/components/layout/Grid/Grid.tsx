import times from "lodash/times";
import { useBoundingBox } from "@wdp/lib/hooks";
import * as Styled from "./Grid.styles";
import GridItem from "./GridItem";
import { LoadingSkeleton } from "components/atomic";

const Grid = ({ loading, children, showCheckboxes, id }: Props) => {
  // Until we can have container queries,
  // use the wrapper width to determine if we should use the mobile layout
  const [elRef, { width }] = useBoundingBox<HTMLDivElement>();

  return (
    <Styled.Wrapper
      ref={elRef}
      id={id}
      data-grid-checkboxes={showCheckboxes}
      data-mobile-layout={width < 500 || undefined}
    >
      <Styled.Inner>
        {loading
          ? times(20, (i) => (
              <Styled.LoadingItem key={i}>
                <LoadingSkeleton />
              </Styled.LoadingItem>
            ))
          : children}
      </Styled.Inner>
    </Styled.Wrapper>
  );
};

interface Props {
  children: JSX.Element;
  showCheckboxes?: boolean;
  id?: string;
  loading?: boolean;
}

export default Grid;
Grid.Item = GridItem;
