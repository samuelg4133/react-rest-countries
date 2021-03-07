import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  line-height: 1.5rem;
  flex-direction: column;

  @media (min-width: 600px){
    flex-direction: row;
  }

  span {
    font-weight: 700;
    color: #ffa;
  }
  p{
    margin-left: 0.5rem;
  }
`;
