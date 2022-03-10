import styled from "styled-components";

export const ManagerContainer = styled.div`
  width: 90vw;
  display: flex;

  flex-direction: column;
  align-items: flex-end;
`;

export const AddButton = styled.button`
  padding: 5px 10px;

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
      padding: 0px 30px;
    }
  }
`;

export const ListItem = styled.li`
  width: 90vw;
  height: 5vh;
  margin-top: 5px;
`;
