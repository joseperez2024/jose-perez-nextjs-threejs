'use client'

import { useSnapshot } from 'valtio'
import state from '@/store'
import { TabProps } from '@/types'
import Image from 'next/image'

const Tab = ({ tab, isFilterTab, isActiveTab, onClick }: TabProps) => {
  const snap = useSnapshot(state)

  const activeStyles =
    isFilterTab && isActiveTab
      ? { backgroundColor: snap.color, opacity: 0.5 }
      : { backgroundColor: 'transparent', opacity: 1 }
  return (
    <div
      key={tab.name}
      className={`tab-btn ${
        isFilterTab ? 'rounded-full glassmorphism' : 'rounded-4'
      } `}
      style={activeStyles}
      onClick={onClick}
    >
      <Image
        src={tab.icon}
        alt={tab.name}
        width={`${isFilterTab ? 40 : 50}`}
        height={`${isFilterTab ? 40 : 50}`}
      />
    </div>
  )
}

export default Tab
