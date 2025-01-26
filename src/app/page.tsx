import { auth } from '@/app/api/auth/[...nextauth]/auth-options';
import { Welcome } from '@/components/welcome';

const Home = async () => {
  const session = await auth();

  return session ? <>Home (Maybe show widgets of some sort)</> : <Welcome />;
};

export default Home;
