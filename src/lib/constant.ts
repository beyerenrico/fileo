import { File, Home } from 'lucide-react';
import getConfig from 'next/config';

import { env } from '@/env.mjs';
import * as m from '@/paraglide/messages';

const config = getConfig();

export const siteConfig = {
  title: m.meta_title,
  description: m.meta_description,
  keywords: () => [
    m.meta_keyword_nextjs(),
    m.meta_keyword_react(),
    m.meta_keyword_nextjs_starter(),
    m.meta_keyword_nextjs_boilerplate(),
    m.meta_keyword_starter_template(),
    m.meta_keyword_tailwindcss(),
    m.meta_keyword_typescript(),
    m.meta_keyword_shadcn_ui(),
    m.meta_keyword_next_auth(),
    m.meta_keyword_prisma(),
  ],
  url: () => env.APP_URL,
  googleSiteVerificationId: () => env.GOOGLE_SITE_VERIFICATION_ID || '',
  version: () => config?.publicRuntimeConfig?.version ?? '0.0.0',
  pages: [
    {
      title: m.pages_home_title(),
      url: '/',
      icon: Home,
    },
    {
      title: m.pages_documents_title(),
      url: '/documents',
      icon: File,
    },
  ],
};
