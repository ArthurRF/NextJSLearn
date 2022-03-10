import styled from "styled-components";

export const Container = styled.div`
  padding: 15px;
  height: 15vh;
  align-items: center;
  display: flex;
  margin-bottom: 20px;
  background-image: linear-gradient(${props => props.theme.colors.backgroundLight}, ${props => props.theme.colors.background});

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
