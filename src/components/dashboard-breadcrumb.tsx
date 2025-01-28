'use client';

import { useTranslations } from 'next-intl';

import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from '@/components/ui/breadcrumb';
import { useCurrentPage } from '@/hooks/use-current-page';
import { Link, usePathname } from '@/i18n/routing';

const DashboardBreadcrumb = () => {
  const t = useTranslations('Breadcrumb');
  const pathname = usePathname();
  const { currentPage } = useCurrentPage();

  return (
    <Breadcrumb>
      <BreadcrumbList>
        {pathname !== '/' && (
          <>
            <BreadcrumbItem className="hidden md:block">
              <BreadcrumbLink asChild>
                <Link href="/">{t('dashboard')}</Link>
              </BreadcrumbLink>
            </BreadcrumbItem>
            <BreadcrumbSeparator className="hidden md:block" />
          </>
        )}
        {currentPage && (
          <BreadcrumbItem>
            <BreadcrumbPage>{t(currentPage.title)}</BreadcrumbPage>
          </BreadcrumbItem>
        )}
      </BreadcrumbList>
    </Breadcrumb>
  );
};

export default DashboardBreadcrumb;
