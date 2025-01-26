import { useEffect, useState } from 'react';

import { siteConfig } from '@/lib/constant';
import { usePathname, useRouter } from '@/lib/i18n';

type Page = {
  title: string;
  url: string;
  icon: React.FC;
};

export function useCurrentPage() {
  const { pages } = siteConfig;
  const router = useRouter();
  const pathname = usePathname();
  const [isCurrentPage, setIsCurrentPage] = useState<boolean>(false);
  const [currentPage, setCurrentPage] = useState<Page | undefined>();

  useEffect(() => {
    const page = pages.find((p) => p.url === pathname);
    setCurrentPage(page);
    setIsCurrentPage(!!page);
  }, [pathname, pages, router]);

  return {
    pathname,
    currentPage,
    isCurrentPage,
  };
}
