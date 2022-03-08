import Head from 'next/head'
import { Container } from '../styles/pages/Home';

const Home: React.FC = () => {
  return (
    <Container>
      <Head>
        <title>Homepage</title>
      </Head>

      {/* <button>Todo List</button> */}

      <h1>Basic ReactJS Learning</h1>
      <p>Structure and styles knowledge improving...</p>
    </Container >
  )
}

export default Home;
