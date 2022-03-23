import Head from 'next/head'
import { useState } from 'react';
import * as S from './styles';
import { FaPencilAlt, FaToggleOn, FaTrashAlt } from 'react-icons/fa';

type TThingTodo = {
  done: boolean,
  message: string,
  priority: number,
}

const Home: React.FC = () => {

  const [thingsTodo, setThingsTodo] = useState<TThingTodo[]>([]);
  const [newThingMessage, setNewThingMessage] = useState<string>('');
  const [isModalVisible, setIsModalVisible] = useState<boolean>(false);

  return (
    <>
      <Head>
        <title>To Do List</title>
      </Head>

      <button onClick={_ => setIsModalVisible(!isModalVisible)}>teste</button>
      {
        isModalVisible &&
        <S.ModalContainer>
          <S.ModalInput>
            <S.CloseModal />
          </S.ModalInput>
        </S.ModalContainer>
      }

      <S.ListContainer>
        <S.ManagerContainer>
          <div>
            <S.InputContainer
              type='text'
              placeholder='Type here what you have to do...'
              value={newThingMessage} onChange={e => {
                setNewThingMessage(e.target.value)
              }}
            />

            <S.AddButton onClick={_ => {
              const newThingTodo: TThingTodo = {
                done: false,
                message: newThingMessage,
                priority: 0,
              };

              if (!newThingTodo.message) {
                alert('Please insert a message to be added');
              } else {
                setThingsTodo([...thingsTodo, newThingTodo]);
                setNewThingMessage('');
              }
            }}>
              + Something To Do
            </S.AddButton>
          </div>
        </S.ManagerContainer>

        <S.ListHeader>
          <p>Here's what you should do...</p>
        </S.ListHeader>
        <S.ListBody>
          <ul>
            {
              thingsTodo.map((item, index) => {
                return (
                  <li key={index}>
                    <div className='slider'>
                      <S.StyledCheckbox alreadyDone={item.done} onClick={() => {
                        let allThingsTodo = [...thingsTodo];
                        allThingsTodo[index].done = !allThingsTodo[index].done;
                        setThingsTodo(allThingsTodo);
                      }} />
                    </div>
                    <div className='message'>
                      {item.message}
                    </div>
                    <div className="management">
                      <FaPencilAlt className='item_manager edition' key={`edition_${index}`} />
                      <FaTrashAlt className='item_manager deletion' key={`deletion_${index}`} onClick={_ => {
                        setThingsTodo(thingsTodo.filter((_, i) => i !== index))
                      }} />
                    </div>
                  </li>
                );
              })
            }
          </ul>
        </S.ListBody>
      </S.ListContainer>
    </>
  )
}

export default Home;
