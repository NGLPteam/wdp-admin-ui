import classNames from "classnames";
import { NamedLink, ReadMoreLink, Markdown } from "components/atomic";
import styles from "./Summary.module.css";

export default function Summary({
  title,
  subtitle,
  metadata,
  summary,
  thumbnail,
  thumbnailRight,
  href,
  showReadMore,
}: Props) {
  return (
    <div
      className={classNames(styles.wrapper, {
        [styles["wrapper--has-thumbnail"]]: !!thumbnail,
        [styles["wrapper--thumbnail-right"]]: thumbnailRight,
      })}
    >
      {thumbnail && (
        <div className={styles.thumbnail}>
          {href ? (
            <NamedLink href={href}>
              <span className={styles.thumbnailLink}>{thumbnail}</span>
            </NamedLink>
          ) : (
            thumbnail
          )}
        </div>
      )}
      <div className={styles.text}>
        <div className={styles.headers}>
          <h4>
            {href ? (
              <NamedLink href={href} className="default-link-styles">
                <Markdown.Title>{title}</Markdown.Title>
              </NamedLink>
            ) : (
              <Markdown.Title>title</Markdown.Title>
            )}
          </h4>
          {subtitle && (
            <h5 className="t-copy-italic t-copy-light">
              <Markdown.Title>{subtitle}</Markdown.Title>
            </h5>
          )}
        </div>
        {metadata && <div className="t-copy-sm">{metadata}</div>}
        {summary && (
          <Markdown.Summary
            className={classNames(
              "t-copy-lighter line-clamp-2",
              styles.summary,
            )}
          >
            {summary}
          </Markdown.Summary>
        )}
        {showReadMore && href && (
          <NamedLink href={href}>
            <ReadMoreLink className={styles.readMore} />
          </NamedLink>
        )}
      </div>
    </div>
  );
}

interface Props {
  /** Title - must be a string */
  title?: string | null;
  /** Subtitle - must be a string */
  subtitle?: string | null;
  /** Metadata */
  metadata?: React.ReactNode;
  /** Summary */
  summary?: string | null;
  /** Thumbnail */
  thumbnail?: React.ReactNode;
  /** Position the thumbnail on the right */
  thumbnailRight?: boolean;
  /** Show read more link */
  showReadMore?: boolean;
  href?: string;
}
