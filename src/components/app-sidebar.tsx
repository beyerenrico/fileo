import { GalleryVerticalEnd } from 'lucide-react';
import { getTranslations } from 'next-intl/server';

import { auth } from '@/app/api/auth/[...nextauth]/auth-options';
import { NavUser } from '@/components/nav-user';
import SidebarNav from '@/components/sidebar-nav';
import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarRail,
} from '@/components/ui/sidebar';
import { Link } from '@/i18n/routing';
import { siteConfig } from '@/lib/constant';

export async function AppSidebar() {
  const t = await getTranslations('Metadata');
  const session = await auth();

  if (!session) {
    return null;
  }

  return (
    <Sidebar>
      <SidebarHeader>
        <SidebarMenu>
          <SidebarMenuItem>
            <SidebarMenuButton size="lg" asChild>
              <Link href="/">
                <div className="bg-sidebar-primary text-sidebar-primary-foreground flex aspect-square size-8 items-center justify-center rounded-lg">
                  <GalleryVerticalEnd className="size-4" />
                </div>
                <div className="flex flex-col gap-0.5 leading-none">
                  <span className="font-semibold">{t('title')}</span>
                  <span className="text-xs opacity-50">
                    v{siteConfig.version()}
                  </span>
                </div>
              </Link>
            </SidebarMenuButton>
          </SidebarMenuItem>
        </SidebarMenu>
      </SidebarHeader>
      <SidebarContent>
        <SidebarNav />
      </SidebarContent>
      <SidebarFooter>
        <NavUser user={session.user} />
      </SidebarFooter>
      <SidebarRail />
    </Sidebar>
  );
}
