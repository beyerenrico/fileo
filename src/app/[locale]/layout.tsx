import '@/styles/globals.css';

import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { getTranslations, setRequestLocale } from 'next-intl/server';

import { auth } from '@/app/api/auth/[...nextauth]/auth-options';
import BaseLayout from '@/components/base-layout';
import { Dashboard } from '@/components/dashboard';
import { Footer } from '@/components/footer';
import { Navbar } from '@/components/navbar/navbar';
import { ThemeSwitcher } from '@/components/theme-switcher';
import { Locale, routing } from '@/i18n/routing';
import { siteConfig } from '@/lib/constant';

export const generateMetadata = async ({
  params,
}: {
  params: Promise<Record<string, unknown>>;
}): Promise<Metadata> => {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: 'Metadata' });

  return {
    metadataBase: new URL(siteConfig.url()),
    title: {
      default: t('title'),
      template: `%s | ${t('title')}`,
    },
    description: t('description'),
    keywords: [],
    robots: { index: true, follow: true },
    icons: {
      icon: '/favicon/favicon.ico',
      shortcut: '/favicon/favicon-16x16.png',
      apple: '/favicon/apple-touch-icon.png',
    },
    verification: {
      google: siteConfig.googleSiteVerificationId(),
    },
    openGraph: {
      url: siteConfig.url(),
      title: t('title'),
      description: t('description'),
      siteName: t('title'),
      images: '/opengraph-image.png',
      type: 'website',
      locale: 'LANGUAGE_TAG',
    },
    twitter: {
      card: 'summary_large_image',
      title: t('title'),
      description: t('description'),
      images: '/opengraph-image.png',
    },
  };
};

const Authenticated = ({ children }: { children: React.ReactNode }) => {
  return (
    <>
      <Dashboard>{children}</Dashboard>
    </>
  );
};

const Guest = ({ children }: { children: React.ReactNode }) => {
  return (
    <>
      <Navbar />
      {children}
      <ThemeSwitcher className="absolute bottom-5 right-5 z-10" />
      <Footer />
    </>
  );
};

const RootLayout = async ({
  children,
  params,
}: {
  children: React.ReactNode;
  params: Promise<Record<string, unknown>>;
}) => {
  // Ensure that the incoming `locale` is valid
  const { locale } = (await params) as { locale: Locale };
  if (!routing.locales.includes(locale as never)) {
    notFound();
  }

  const session = await auth();

  // Enable static rendering
  setRequestLocale(locale);

  return (
    <BaseLayout locale={locale}>
      {session ? (
        <Authenticated>{children}</Authenticated>
      ) : (
        <Guest>{children}</Guest>
      )}
    </BaseLayout>
  );
};

export default RootLayout;
