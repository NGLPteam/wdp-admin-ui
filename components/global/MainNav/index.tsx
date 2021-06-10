import styled from "styled-components";

const MainNav = ({ className, children }: Props) => {
  return (
    <nav className={className}>
      <div className={`${className}__inner`}>
        <a href="/">Institution Name</a>
        <ul className="flex">
          {children &&
            children.map((child, i) => (
              <li key={i} className={`${className}__item`}>
                {child}
              </li>
            ))}
        </ul>
      </div>
    </nav>
  );
};

interface Props extends React.HTMLProps<HTMLDivElement> {
  children: React.ReactNode[];
}

const StyledMainNav = styled(MainNav)`
  background: var(--brand100);

  &__inner {
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin: 0 auto;
    max-width: var(--container-max);
    padding: 20px 0;
    color: var(--brand20);
  }

  &__item {
    & + & {
      margin-inline-start: 28px;
    }
  }
`;

export default StyledMainNav;
