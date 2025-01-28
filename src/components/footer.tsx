import { getTranslations } from 'next-intl/server';

import { Button } from '@/components/ui/button';

export const Footer = async () => {
  const t = await getTranslations('Metadata');

  return (
    <footer className="text-muted-foreground absolute bottom-2 w-full text-center text-sm">
      © {new Date().getFullYear()}{' '}
      <Button variant="link" className="p-0" asChild>
        <a href="https://michalskolak.vercel.app/">{t('title')}</a>
      </Button>
    </footer>
  );
};
