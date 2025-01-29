// Utility typography classes
// --------------------
import { css } from "styled-components";
import { tLabel, tList, tTruncate } from "../mixins/typography";
import { aLink } from "../mixins/appearance";

export default css`
  /* Labels */
  .t-label-sm {
    ${tLabel("sm")}
  }

  .t-label-md {
    ${tLabel("md")}
  }

  .t-label-lg {
    ${tLabel("lg")}
  }

  .t-copy-sm {
    font-size: var(--font-size-sm);
    font-weight: var(--font-weight-base);
    text-transform: none;
  }

  .t-weight-md {
    font-weight: var(--font-weight-medium);
  }

  .t-align-right {
    text-align: end;
  }

  .t-align-center {
    text-align: center;
  }

  .t-align-left {
    text-align: start;
  }

  .t-capitalize {
    text-transform: capitalize;
  }

  .t-uppercase {
    text-transform: uppercase;
  }

  /* Rich Text */
  .t-rte {
    a {
      ${aLink()}
    }

    > * + * {
      margin-block-start: 1.3em;
    }

    ul,
    ol {
      ${tList}
    }
  }

  .t-truncate {
    ${tTruncate}
  }

  .t-column-indent {
    padding-inline-start: calc(1.5 * var(--table-column-gap));
  }
`;
