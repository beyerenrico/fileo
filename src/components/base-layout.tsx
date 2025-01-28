import { ReactNode } from 'react';
import { clsx } from 'clsx';
import { Inter } from 'next/font/google';
import { NextIntlClientProvider } from 'next-intl';
import { getMessages } from 'next-intl/server';
import { ThemeProvider } from 'next-themes';

import { Toaster } from '@/components/ui/toaster';
import { Locale } from '@/i18n/routing';

const inter = Inter({ subsets: ['latin'] });

type Props = {
  children: ReactNode;
  locale: Locale;
};

export default async function BaseLayout({ children, locale }: Props) {
  // Providing all messages to the client
  // side is the easiest way to get started
  const messages = await getMessages();

  return (
    <html className="h-full" lang={locale}>
      <body className={clsx(inter.className, 'flex h-full flex-col')}>
        <ThemeProvider attribute="class">
          <NextIntlClientProvider messages={messages}>
            {children}
            <Toaster />
          </NextIntlClientProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}
