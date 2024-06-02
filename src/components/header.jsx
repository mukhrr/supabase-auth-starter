'use client'

import { useEffect, useRef, useState } from 'react'
import { Menu } from 'lucide-react'

import { cn } from '@/lib/utils'

import CommandMenu from '@/components/command-menu'
import { Button } from '@/components/ui/button'
import Link from 'next/link'
import Image from 'next/image'

export default function Header({ children }) {
  const navRef = useRef(null)
  const [scroll, setScroll] = useState(false)
  const [open, setOpen] = useState(false)

  console.log(open)
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
          'fixed right-0 top-0 z-50 flex h-16 w-full items-center justify-between border-b bg-background xl:w-[calc(100%-240px)]',
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
