import styled from "styled-components";

export const Container = styled.section`
  width: 100%;
  max-width: 70rem;
  margin: 2rem auto;

  @media (max-width: 5rem) {
    font-size: 0.75rem;
  }
`;

export const Countries = styled.ul`
  display: grid;
  grid-template-columns: repeat(1, 1fr);
  margin: 0 2rem;
  gap: 1rem;

  @media (min-width: 1100px) {
    grid-template-columns: repeat(2, 1fr);
  }

  li {
    background: #3f3f3f;
    border: 0.125rem solid #f5f5f5f5;
    border-radius: 0.5rem;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
    text-align: center;
    overflow: hidden;
  }

  hr {
    width: 100%;
    height: 0.125rem;
    background: white;
  }

  span {
    font-weight: 700;
    color: #ffa;
  }
`;

export const Header = styled.header`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  overflow-y: none;
  background: none;

  img {
    width: 100%;
  }
`;

export const BordersList = styled.div`
  display: grid;
  align-items: center;
  grid-template-columns: repeat(2, 1fr);
  gap: 0.125rem;

  @media (min-width: 500px) {
    grid-template-columns: repeat(5, 1fr);
    gap: 0.25rem;
  }
`;

export const Border = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  background: #2f4f4f;
  padding: 0.5rem;
  margin: 0.5rem;
  border-radius: 0.25rem;

  p {
    font-weight: 700;
    color: #ffc;
  }
`;
