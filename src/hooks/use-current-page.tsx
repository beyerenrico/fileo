import { siteConfig } from '@/lib/constant';
import { usePathname } from '@/lib/i18n';

export function useCurrentPage() {
  const { pages } = siteConfig;
  const pathname = usePathname();

  return pages().find((page) => page.url === pathname);
}
