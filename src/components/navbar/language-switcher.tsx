'use client';

import { useTransition } from 'react';
import { useParams } from 'next/navigation';
import { useLocale } from 'next-intl';

import { Button } from '@/components/ui/button';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';
import { type Locale, routing, usePathname, useRouter } from '@/i18n/routing';

const LanguageLabel: Record<Locale, string> = {
  de: 'Deutsch',
  en: 'English',
};

export const LanguageSwitcher = () => {
  const router = useRouter();
  const [, startTransition] = useTransition();
  const pathname = usePathname();
  const params = useParams();
  const currentLocale = useLocale();

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="secondary" size="icon">
          {currentLocale.toUpperCase()}
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end">
        {routing.locales.map((locale) => (
          <DropdownMenuItem
            key={locale}
            onClick={() => {
              startTransition(() => {
                router.replace(
                  // @ts-expect-error -- TypeScript will validate that only known `params`
                  // are used in combination with a given `pathname`. Since the two will
                  // always match for the current route, we can skip runtime checks.
                  { pathname, params },
                  { locale }
                );
              });
            }}
          >
            {LanguageLabel[locale]}
          </DropdownMenuItem>
        ))}
      </DropdownMenuContent>
    </DropdownMenu>
  );
};
