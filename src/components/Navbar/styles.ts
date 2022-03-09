import styled from "styled-components";

export const Container = styled.div`
  padding: 15px;
  margin: 15px;

  ul {
    display: flex;
    flex-direction: row;
  }

  a:hover {
    transition: 300ms;
    background: ${props => props.theme.colors.text};
    color: black;
  }

  a {
    padding: 10px 16px;
    color: ${props => props.theme.colors.text};

    border: 1px solid ${props => props.theme.colors.text};
    margin: 5px;
    border-radius: 10px;
  }
`;
