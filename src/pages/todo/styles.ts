import styled from "styled-components";

export const ManagerContainer = styled.div`
  width: 90vw;
  display: flex;

  flex-direction: column;

  div {
    width: 90vw;
    display: flex;
  }
`;

export const InputContainer = styled.input`
  width: 30vw;
  margin-right: auto;
  padding: 0 0.6vw;

  border-radius: 10px;
  background-color: ${props => props.theme.colors.text};
`;

export const AddButton = styled.button`
  padding: 0.3vw 0.6vw;
  margin-left: auto;

  border-radius: 10px;
  border-style: none;

  background-color: ${props => props.theme.colors.primary};
  color: ${props => props.theme.colors.text};

  :hover {
    transition: 300ms;

    background-color: ${props => props.theme.colors.primaryLight};
    color: white;
  }
`;

export const ListContainer = styled.div`
  display: flex;
  flex-direction: column;

  align-items: center;
`;

export const ListHeader = styled.div`
  width: 90vw;
  height: 5vh;
  margin-top: 15px;

  border: 2px solid ${props => props.theme.colors.primary};
  border-radius: 10px 10px 5px 5px;

  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;

  background-color: ${props => props.theme.colors.backgroundLight};

  p {
    font-size: 16px;
  }
`;

export const ListBody = styled.div`
  width: 90vw;

  li {
    width: 100%;
    display: flex;
    flex-direction: row;

    padding: 0.5vh;
    border: 1px solid ${props => props.theme.colors.primary};
    border-top: 0px;
    border-radius: 5px;

    .slider {
      padding: 0px 30px;
    }

    div.management {
      margin-left: auto;
      padding: 0 2vw;

      .item_manager {
        margin: 0 0.5vw;
        cursor: pointer;

        font-size: 0.9em;
      }

      .edition:hover {
        transition: 150ms;
        color: ${props => props.theme.colors.edition};
        font-size: 0.95em;
      }

      .deletion:hover {
        transition: 150ms;
        color: ${props => props.theme.colors.deletion};
        font-size: 0.95em;
      }
    }
  }
`;

export const ListItem = styled.li`
  width: 90vw;
  height: 5vh;
  margin-top: 5px;
`;

export const StyledCheckbox = styled.button`
  display: inline-block;
  width: 1.5em;
  height: 1em;
  border-radius: 15px;
  transition: all 150ms;
`
