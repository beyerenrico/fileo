import { File, Home } from 'lucide-react';
import getConfig from 'next/config';

import { env } from '@/env.mjs';

const config = getConfig();

export const siteConfig = {
  url: () => env.APP_URL,
  googleSiteVerificationId: () => env.GOOGLE_SITE_VERIFICATION_ID || '',
  version: () => config?.publicRuntimeConfig?.version ?? '0.0.0',
  pages: [
    {
      title: 'dashboard',
      url: '/',
      icon: Home,
    },
    {
      title: 'documents',
      url: '/documents',
      icon: File,
    },
  ],
};
