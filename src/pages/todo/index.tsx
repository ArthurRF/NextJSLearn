import Head from 'next/head'
import * as S from './styles';

const Home: React.FC = () => {
  return (
    <S.Container>
      <Head>
        <title>Todo List</title>
      </Head>

      <S.ListHeader>
        <p>Here's what you should do...</p>
      </S.ListHeader>
      <S.ListBody>
        <ul>
          {
            [1, 2, 3].map(item => {
              return (
                <li key={item}>{item}</li>
              );
            })
          }
        </ul>
      </S.ListBody>
    </S.Container>
  )
}

export default Home;
