'use client'

import { useEffect, useRef, useState } from 'react'

import { cn } from '@/lib/utils'

import CommandMenu from '@/components/command-menu'
import Link from 'next/link'

export default function Header({ children }) {
  const navRef = useRef(null)
  const [scroll, setScroll] = useState(false)

  useEffect(() => {
    const intersectionObserver = new IntersectionObserver(
      (entries) => {
        setScroll(!entries[0].isIntersecting)
      },
      {
        root: null,
        rootMargin: `10px 0px`,
        threshold: 0
      }
    )

    intersectionObserver.observe(navRef.current)

    return () => intersectionObserver.disconnect()
  }, [])

  return (
    <>
      <div ref={navRef}></div>
      <div
        className={cn(
          'fixed top-0 z-50 flex h-16 w-full items-center justify-between border-b bg-background xl:w-[calc(100%-240px)]',
          {
            'h-12': scroll
          }
        )}
      >
        <div className="flex items-center gap-4">
          <div className="mr-4 hidden md:flex">
            <Link href="/" className="mr-6 flex items-center space-x-2">
              <span className="hidden font-bold sm:inline-block">Logo</span>
            </Link>
          </div>

          <CommandMenu />
        </div>

        <div className="flex items-center gap-4">{children}</div>
      </div>
    </>
  )
}
