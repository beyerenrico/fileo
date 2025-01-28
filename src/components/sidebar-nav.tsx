'use client';

import { useTranslations } from 'next-intl';

import {
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
} from '@/components/ui/sidebar';
import { Link, usePathname } from '@/i18n/routing';
import { siteConfig } from '@/lib/constant';
import { cn } from '@/lib/utils';

const SidebarNav = () => {
  const t = useTranslations('Sidebar');
  const path = usePathname();

  return (
    <SidebarGroup>
      <SidebarGroupLabel>Application</SidebarGroupLabel>
      <SidebarGroupContent>
        <SidebarMenu>
          {siteConfig?.pages?.map((item) => (
            <SidebarMenuItem key={item.title}>
              <SidebarMenuButton
                asChild
                className={cn(path === item.url && 'bg-accent')}
              >
                <Link href={item.url}>
                  <item.icon />
                  <span>{t(item.title)}</span>
                </Link>
              </SidebarMenuButton>
            </SidebarMenuItem>
          ))}
        </SidebarMenu>
      </SidebarGroupContent>
    </SidebarGroup>
  );
};

export default SidebarNav;
