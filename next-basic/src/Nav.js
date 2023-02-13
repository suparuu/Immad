import React, { useCallback, useEffect, useMemo, useRef, useState } from 'react'
import Link from 'next/link'
export const Nav = () => {

  return (
    <header>
    <nav>
      <Link href="/">Home</Link>
      <Link href="/about">About</Link>
      <Link href="/board">Board</Link>
    </nav>
  </header> 
  )
}