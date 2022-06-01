import React, { useState } from "react";
import { Page } from "react-pdf";
import { useInView } from "react-intersection-observer";
import AssetPDFPage from "../../AssetPDFPage";
import { LoadingBlock } from "components/atomic";

function AssetPage({ pageNumber }: { pageNumber: number }) {
  const [loaded, setLoaded] = useState(false);

  const onRenderSuccess = () => setLoaded(true);

  const { ref, inView } = useInView({ rootMargin: "200px" });

  return (
    <div ref={ref} style={{ height: loaded ? "auto" : `${1159 / 2}px` }}>
      {(inView || loaded) && (
        <AssetPDFPage pageNumber={pageNumber}>
          <Page
            key={`page_${pageNumber}`}
            pageNumber={pageNumber}
            width={1159}
            onRenderSuccess={onRenderSuccess}
            loading={<LoadingBlock />}
          />
        </AssetPDFPage>
      )}
    </div>
  );
}

export default function AssetRenderPages({
  numPages,
  pageId,
}: {
  numPages: number;
  pageId?: string;
}) {
  return numPages ? (
    <>
      {Array.from(new Array(numPages), (el, i) => {
        return (
          <div id={`${pageId}${i + 1}`}>
            <AssetPage pageNumber={i + 1} />
          </div>
        );
      })}
    </>
  ) : null;
}
