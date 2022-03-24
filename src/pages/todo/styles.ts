import styled, { keyframes } from "styled-components";

export const ManagerContainer = styled.div`
  width: 90vw;
  display: flex;

  flex-direction: column;

  div {
    width: 90vw;
    display: flex;
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

export const StyledCheckbox = styled.div<{ alreadyDone: boolean }>`
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
  top: 0;

  display: grid;
  place-items: center;

  transition: background-color 1s;
`;

export const ModalInput = styled.div`
  width: 75vw;
  height: 45vh;
  padding: 1rem;
  border-radius: 15px;
  background-color: white;
  display: flex;
  flex-direction: column;
`;

export const CloseModal = styled.div`
  width: 4vw;
  margin-left: auto;
  font-size: 1.5em;
  font-weight: 400;

  text-align: center;
  align-items: center;

  cursor: pointer;
`;

export const InputsContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;

  margin-top: 1rem;
`;

export const InputMessageContainer = styled.input<{ error: boolean }>`
  width: 85%;
  padding: 0.5vh 1vw;

  border-radius: 10px 0px 0px 10px;
  background-color: ${props => props.theme.colors.text};

  transition: border 300ms;
  animation: ${props => props.error ? shake : ''} 300ms;

  border-top: 2px solid ${props => props.error ? props.theme.colors.deletion : props.theme.colors.primary};
  border-right: 1px solid ${props => props.error ? props.theme.colors.deletion : props.theme.colors.primary};
  border-bottom: 2px solid ${props => props.error ? props.theme.colors.deletion : props.theme.colors.primary};
  border-left: 2px solid ${props => props.error ? props.theme.colors.deletion : props.theme.colors.primary};
`;

export const InputPriorityContainer = styled.input<{ error: boolean }>`
  width: 15%;
  padding: 0.5vh 1vw;

  border-radius: 0px 10px 10px 0px;
  background-color: ${props => props.theme.colors.text};

  transition: border 300ms;
  animation: ${props => props.error ? shake : ''} 300ms;

  border-top: 2px solid ${props => props.error ? props.theme.colors.deletion : props.theme.colors.primary};
  border-right: 2px solid ${props => props.error ? props.theme.colors.deletion : props.theme.colors.primary};
  border-bottom: 2px solid ${props => props.error ? props.theme.colors.deletion : props.theme.colors.primary};
  border-left: 1px solid ${props => props.error ? props.theme.colors.deletion : props.theme.colors.primary};
`;

export const AddButton = styled.button`
  padding: 0.5vw 0.7vw;
  margin-top: auto;

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

const shake = keyframes`
  10%, 90% {
    transform: translate3d(-0.5px, 0, 0);
  }

  20%, 80% {
    transform: translate3d(1px, 0, 0);
  }

  30%, 50%, 70% {
    transform: translate3d(-2px, 0, 0);
  }

  40%, 60% {
    transform: translate3d(2px, 0, 0);
  }
`
