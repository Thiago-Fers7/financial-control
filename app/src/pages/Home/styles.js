import styled from 'styled-components';

export const Container = styled.main`
  max-width: 1000px;
  margin: 0 auto;
  padding: 2rem;
`;

export const Resume = styled.section`
  overflow-x: auto;

  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 2rem;

  padding: 2rem 0;
  
  place-items: center;

  @media (max-width: 900px) {
    grid: none;
  } 
`;
