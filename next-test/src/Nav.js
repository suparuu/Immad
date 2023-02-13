import Link from 'next/link'
import React from 'react'
export const Nav = () => {
  return (
    <header>
        <nav>
            <Link href="/">Home</Link>
            <Link href="/one">11</Link>
            <Link href="/two">22</Link>
        </nav>
    </header>
  )
}
