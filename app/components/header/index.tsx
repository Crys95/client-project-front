'use client'

import { NavItem } from './nav-item'
import { motion } from 'framer-motion'

const NavItens = [
  {
    label: 'Cliente',
    href: '/',
  },
  {
    label: 'Registrar',
    href: '/projects',
  },
]

export const Header = () => {
  return (
    <motion.header
      initial={{ top: -100 }}
      animate={{ top: 0 }}
      transition={{ duration: 0.5 }}
      className="top-0 w-full z-10 h-24 flex items-center justify-center bg-[#F88158]"
    >
      <div className="container flex items-center justify-between">
        <nav className="flex items-center gap-2 sm:gap-10 bg-opacity-0">
          {NavItens.map((item) => (
            <NavItem {...item} key={item.label} />
          ))}
        </nav>
      </div>
    </motion.header>
  )
}
