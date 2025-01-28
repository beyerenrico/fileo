'use client';

import Image from 'next/image';
import { Session } from 'next-auth';
import { signOut } from 'next-auth/react';
import { useLocale, useTranslations } from 'next-intl';

import { Icons } from '@/components/icons';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';

export const UserDropdown = ({ session: { user } }: { session: Session }) => {
  const locale = useLocale();
  const t = useTranslations('UserDropdown');

  return (
    <DropdownMenu>
      <DropdownMenuTrigger>
        <Image
          className="overflow-hidden rounded-full"
          src={`${user?.image}`}
          alt={`${user?.name}`}
          width={32}
          height={32}
        />
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end">
        <DropdownMenuLabel>{t('my_account')}</DropdownMenuLabel>
        <DropdownMenuSeparator />
        <div className="flex flex-col items-center justify-center p-2">
          <Image
            className="overflow-hidden rounded-full"
            src={`${user?.image}`}
            alt={`${user?.name}`}
            width={100}
            height={100}
          />
          <h2 className="py-2 text-lg font-bold">{user?.name}</h2>
        </div>
        <DropdownMenuSeparator />
        <DropdownMenuItem
          onClick={() =>
            signOut({
              redirectTo: `/${locale}`,
            })
          }
        >
          <Icons.logOut className="mr-2 size-4" /> <span>{t('log_out')}</span>
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
};
