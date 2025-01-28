'use client';

import { ComponentProps } from 'react';
import { useTranslations } from 'next-intl';
import { useTheme } from 'next-themes';

import { Icons } from '@/components/icons';
import { Button } from '@/components/ui/button';

type ThemeSwitcherProps = {
  className?: ComponentProps<'button'>['className'];
};

export const ThemeSwitcher = ({ className }: ThemeSwitcherProps) => {
  const t = useTranslations('ThemeSwitcher');
  const { theme, setTheme } = useTheme();

  return (
    <Button
      className={className}
      variant="secondary"
      size="icon"
      aria-label={t('label')}
      onClick={() => setTheme(theme === 'light' ? 'dark' : 'light')}
    >
      <Icons.sun className="dark:hidden" />
      <Icons.moon className="hidden dark:block" />
    </Button>
  );
};
