import Head from 'next/head'
import { useState } from 'react';
import * as S from './styles';
import { FaPencilAlt, FaTrashAlt } from 'react-icons/fa';
import { GrClose } from 'react-icons/gr';

type TThingTodo = {
  done: boolean,
  message: string,
  priority: number,
}

const Home: React.FC = () => {

  const [thingsTodo, setThingsTodo] = useState<TThingTodo[]>([]);
  const [newThingMessage, setNewThingMessage] = useState<string>('');
  const [newThingPriority, setNewThingPriority] = useState<number | null>(null);
  const [modalVisible, setModalVisible] = useState<boolean>(false);
  const [inputMessageNotFilled, setInputMessageNotFilled] = useState<boolean>(false);
  const [inputPriorityNotFilled, setInputPriorityNotFilled] = useState<boolean>(false);

  return (
    <>
      <Head>
        <title>To Do List</title>
      </Head>

      {
        modalVisible &&
        <S.ModalContainer>
          <S.ModalInput >
            <S.CloseModal onClick={_ => {
              setModalVisible(!modalVisible)
              setNewThingMessage('')
              setNewThingPriority(null)
              setInputMessageNotFilled(false)
              setInputPriorityNotFilled(false)
            }}>
              <GrClose />
            </S.CloseModal>
            <S.InputsContainer>
              <S.InputMessageContainer
                error={inputMessageNotFilled}
                type='text'
                placeholder='Type here what you have to do...'
                value={newThingMessage} onChange={e => {
                  setNewThingMessage(e.target.value)
                }}
                onBlur={_ => {
                  if (!newThingMessage) {
                    setInputMessageNotFilled(true);
                  } else {
                    setInputMessageNotFilled(false)
                  }
                }}
              />
              <S.InputPriorityContainer
                error={inputPriorityNotFilled}
                list='priorities'
                placeholder='Priority...'
                value={newThingPriority || undefined} onChange={e => {
                  setNewThingPriority(Number(e.target.value))
                }}
                onBlur={_ => {
                  if (!newThingPriority) {
                    setInputPriorityNotFilled(true);
                  } else {
                    setInputPriorityNotFilled(false)
                  }
                }}
              />
              <datalist id='priorities'>
                <option value={1}>1</option>
                <option value={2}>2</option>
                <option value={3}>3</option>
                <option value={4}>4</option>
                <option value={5}>5</option>
              </datalist>
            </S.InputsContainer>
            <S.AddButton onClick={_ => {
              const newThingTodo: TThingTodo = {
                done: false,
                message: newThingMessage,
                priority: newThingPriority || 1,
              };

              if (!newThingTodo.message) {
                setInputMessageNotFilled(true);
              }

              if (!newThingTodo.priority) {
                setInputPriorityNotFilled(true);
              }

              if (newThingTodo.message && newThingTodo.priority) {
                setThingsTodo([...thingsTodo, newThingTodo]);
                setNewThingMessage('');
                setNewThingPriority(null);
                setInputMessageNotFilled(false)
                setInputPriorityNotFilled(false)
              }
            }}>
              Add!
            </S.AddButton>
          </S.ModalInput>
        </S.ModalContainer>
      }

      <S.ListContainer>
        <S.ManagerContainer>
          <div>
            <S.AddButton onClick={_ => {
              setModalVisible(!modalVisible);
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
