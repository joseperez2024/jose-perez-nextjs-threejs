'use client'

import { ClientOnlyProps } from '@/types'
import { useEffect, useState } from 'react'

const ClientOnly = ({ children }: ClientOnlyProps) => {
  const [hasMounted, setHasMounted] = useState(false)

  useEffect(() => {
    setHasMounted(true)
  }, [])

  if (!hasMounted) return null

  return (
    <>
      <div className=''>{children}</div>
    </>
  )
}

export default ClientOnly
