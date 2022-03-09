import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;

  align-items: center;
`;

export const ListHeader = styled.div`
  width: 90vw;
  height: 5vh;

  border: 1px solid ${props => props.theme.colors.primary};
  border-radius: 10px;

  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;

  p {
    font-size: 16px;
  }
`;

export const ListBody = styled.div`
  width: 90vw;
  padding: 15px;
`;
