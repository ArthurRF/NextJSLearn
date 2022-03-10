import Head from 'next/head'
import { useEffect, useState } from 'react';
import * as S from './styles';

type TThingTodo = {
  done: boolean,
  message: string,
  priority: number,
}

const Home: React.FC = () => {

  const [thingsTodo, setThingsTodo] = useState<TThingTodo[]>([]);

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
          <S.AddButton onClick={_ => handleAddThingTodo({ done: false, message: "Nova coisa pra fazer", priority: 1 })}>
            + Something To Do
          </S.AddButton>
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
                    <div className='slider'>:slider:</div>
                    {item.message}
                    <div className="management">:thrash:</div>
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
