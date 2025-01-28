import { FunctionComponent } from 'react';

import { auth } from '@/app/api/auth/[...nextauth]/auth-options';
import { redirect } from '@/i18n/routing';

type Props = {
  params: Promise<Record<string, string>>;
};

const HomeAuthenticated: FunctionComponent<Props> = async ({ params }) => {
  const { locale } = await params;
  const session = await auth();

  if (!session) {
    redirect({
      href: '/',
      locale,
    });
  }

  return <>Home (Maybe show widgets of some sort)</>;
};

export default HomeAuthenticated;
