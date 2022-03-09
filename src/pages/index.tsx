import Head from 'next/head'
import * as S from '../components/Home/styles';

const Home: React.FC = () => {
  return (
    <S.Container>
      <Head>
        <title>Homepage</title>
      </Head>

      <h1>Basic ReactJS Learning</h1>
      <p>Structure and styles knowledge improving...</p>
    </S.Container >
  )
}

export default Home;
