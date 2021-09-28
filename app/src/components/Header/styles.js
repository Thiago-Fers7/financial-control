import styled from 'styled-components';

export const Container = styled.header`
  width: 100%;
  height: 7rem;
  background: var(--background-header);

  box-shadow: rgba(99, 99, 99, 0.2) 0px 2px 8px 0px;
`;

export const Content = styled.section`
  position: relative;

  display: flex;
  align-items: center;
  justify-content: space-between;
  
  max-width: 1000px;
  margin: 0 auto;

  top: 50%;
  transform: translateY(-50%);

  padding: 0 2rem;

  & > a {
    font-size: 2rem;
    line-height: 100%;
    font-weight: 700;
  }
`;

export const Navigation = styled.nav`
  ul {
    display: flex;
    align-items: center;
    gap: 3rem;

    list-style: none;

    li {
      a {
        padding: 0.5rem 1rem;
        border-radius: var(--radius-button);

        transition: 0.1s;

        &:hover, &.active {
          background: var(--hover-link-background);
        }
      }
    }
  }
`;
