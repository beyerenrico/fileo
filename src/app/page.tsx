import { auth } from '@/app/api/auth/[...nextauth]/auth-options';
import { Welcome } from '@/components/welcome';

const Home = async () => {
  const session = await auth();

  return session ? <>Home</> : <Welcome />;
};

export default Home;
