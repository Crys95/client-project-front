'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { cn } from '../../lib/utils'

type NavItensProps = {
  label: string
  href: string
}
export const NavItem = ({ label, href }: NavItensProps) => {
  const pathname = usePathname()

  const isActive = pathname === href
  return (
    <Link
      href={href}
      className={cn(
        'text-gray-400 flex items-center gap-2 font-medium font-mono',
        isActive && 'text-gray-50',
      )}
    >
      {label}
    </Link>
  )
}
