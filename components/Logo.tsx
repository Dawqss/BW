'use client'

import LogoImageLight from '@/data/logoBlack.svg'
import LogoImageDark from '@/data/logoWhite.svg'

import { useTheme } from 'next-themes'

const Logo = () => {
  const { theme } = useTheme();

  if (theme === 'dark') {
    return <LogoImageDark/>
  }

  return <LogoImageLight/>
}

export default Logo;
