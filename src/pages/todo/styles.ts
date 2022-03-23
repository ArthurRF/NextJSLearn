import styled from "styled-components";

interface ICheckboxProps {
  alreadyDone: boolean;
}

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
  padding: 0 0.7vw;

  border-radius: 10px;
  background-color: ${props => props.theme.colors.text};
`;

export const AddButton = styled.button`
  padding: 0.5vw 0.7vw;
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
    word-break: break-all;

    padding: 0.5vh 0;
    border: 1px solid ${props => props.theme.colors.primary};
    border-top: 0px;
    border-radius: 5px;

    .slider {
      padding: 0px 30px;
      align-self: center;
    }

    .message {
      width: 100%;
    }

    div.management {
      margin-left: auto;
      padding: 0 1.5vw;
      align-self: center;
      width: 11%;

      .item_manager {
        margin: 0 0.5vw;
        cursor: pointer;

        font-size: 0.8em;
      }

      .edition:hover {
        transition: 150ms;
        color: ${props => props.theme.colors.edition};
        font-size: 0.85em;
      }

      .deletion:hover {
        transition: 150ms;
        color: ${props => props.theme.colors.deletion};
        font-size: 0.85em;
      }
    }
  }
`;

export const ListItem = styled.li`
  width: 90vw;
  height: 5vh;
  margin-top: 5px;
`;

export const StyledCheckbox = styled.div<ICheckboxProps>`
  display: inline-block;
  width: 1em;
  height: 0.8em;
  border-radius: 15px;
  transition: all 150ms;
  cursor: pointer;
  border: 1px solid ${props => props.alreadyDone ? props.theme.colors.text : props.theme.colors.primary};

  background-color: ${props => props.alreadyDone ? props.theme.colors.primaryLight : props.theme.colors.text};
`

export const ModalContainer = styled.div`
  width: 100vw;
  height: 100vh;
  position: absolute;
  z-index: 1;
  background-color: rgba(0, 0, 0, 0.7);

  text-align: center;
  align-items: center;
  align-self: center;
  align-content: center;
`;

export const ModalInput = styled.div`
  width: 75vw;
  height: 45vh;
  border-radius: 15px;

  background-color: white;
`;

export const CloseModal = styled.div`

  position: absolute;
  width: 5vw;
  height: 5vh;
  border-radius: 15px;
  transition: all 150ms;
  cursor: pointer;
  border: 1px solid ${props => props.theme.colors.primary};
`;
