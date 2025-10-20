'use client';

import { cn } from '@/lib/utils';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import React from 'react';

function NavLink({
  href,
  children,
  className,
}: {
  href: string;
  children: React.ReactNode;
  className?: string;
}) {
  const pathname = usePathname();

  // Corrected logic:
  const isActive =
    pathname === href ||
    (href !== '/' && pathname.startsWith(href));

  return (
    <Link
      href={href}
      className={cn(
        'transition-all text-sm duration-100 text-gray-600 hover:text-rose-500 ease-in',
        className,
        isActive && 'text-rose-500 font-medium'
      )}
    >
      {children}
    </Link>
  );
}

export default NavLink;
