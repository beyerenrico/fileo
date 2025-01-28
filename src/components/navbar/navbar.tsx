import { getTranslations } from 'next-intl/server';

import { LanguageSwitcher } from './language-switcher';

import { auth } from '@/app/api/auth/[...nextauth]/auth-options';
import { SignInButton } from '@/components/navbar/sign-in-button';
import { UserDropdown } from '@/components/navbar/user-dropdown';
import { Link } from '@/i18n/routing';

export const Navbar = async () => {
  const t = await getTranslations('Metadata');
  const session = await auth();

  return (
    <header className="w-full border-b">
      <div className="container flex h-16 items-center justify-between">
        <Link href="/" className="font-mono text-lg font-bold">
          {t('title')}
        </Link>
        <div className="flex items-center gap-2">
          {session ? <UserDropdown session={session} /> : <SignInButton />}
          <LanguageSwitcher />
        </div>
      </div>
    </header>
  );
};
