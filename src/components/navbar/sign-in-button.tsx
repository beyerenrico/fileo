'use client';

import { useTransition } from 'react';
import { signIn } from 'next-auth/react';
import { useLocale, useTranslations } from 'next-intl';

import { Icons } from '@/components/icons';
import { Button } from '@/components/ui/button';

export const SignInButton = () => {
  const locale = useLocale();
  const t = useTranslations('Navbar');
  const [isPending, startTransition] = useTransition();

  const handleSignIn = () => {
    startTransition(async () => {
      await signIn('github', {
        redirectTo: `/${locale}/app`,
      });
    });
  };

  return (
    <Button onClick={handleSignIn} disabled={isPending}>
      {isPending && <Icons.loader className="mr-2 size-4 animate-spin" />}
      {t('sign_in')}
    </Button>
  );
};
