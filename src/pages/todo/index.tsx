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

  function handleAddThingTodo(thingTodo: TThingTodo): void {
    return setThingsTodo([...thingsTodo, thingTodo]);
  }

  return (
    <>
      <Head>
        <title>To Do List</title>
      </Head>

      <S.ListContainer>
        <S.ManagerContainer>
          <div>
            <S.InputContainer
              type='text'
              id='todo_message'
              placeholder='Type here what you have to do...'
              value={newThingMessage} onInput={e => {
                setNewThingMessage((e.target as HTMLTextAreaElement).value)
              }}
            />

            <S.AddButton onClick={_ => {
              const todoMessage = document.getElementById('todo_message');

              const newThingTodo: TThingTodo = {
                done: false,
                message: todoMessage?.getAttribute('value') || '',
                priority: 0,
              };

              if (!newThingTodo.message) {
                alert('Please insert a message to be added');
              } else {
                handleAddThingTodo(newThingTodo)
                todoMessage?.append('');
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
                      <S.StyledCheckbox />
                    </div>
                    {item.message}
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
