'use client'

import { useRef } from 'react'
import { useFrame } from '@react-three/fiber'
import { easing } from 'maath'
import { useSnapshot } from 'valtio'

import { Group } from 'three'

import state from '@/store'
import { CameraRigProps } from '@/types'

const CameraRig = ({ children }: CameraRigProps) => {
  const group = useRef<Group>(null!)
  const snap = useSnapshot(state)

  useFrame((state, delta) => {
    const isBreakPoint = window.innerWidth <= 1280
    const isMobile = window.innerWidth <= 640

    // set the model initial position
    let targetPosition: [x: number, y: number, z: number] = [-0.4, 0, 2]
    if (snap.intro) {
      if (isBreakPoint) targetPosition = [0, 0.2, 2.5]
      if (isMobile) targetPosition = [0, 0, 2.5]
    } else {
      if (isMobile) targetPosition = [0, 0, 2.5]
      else targetPosition = [0, 0, 2]
    }

    // set model camera position
    easing.damp3(state.camera.position, targetPosition, 0.25, delta)

    // set the model rotation smoothly
    easing.dampE(
      group.current.rotation,
      [state.pointer.y / 10, -state.pointer.x / 5, 0],
      0.25,
      delta
    )
  })

  return <group ref={group}>{children}</group>
}

export default CameraRig
