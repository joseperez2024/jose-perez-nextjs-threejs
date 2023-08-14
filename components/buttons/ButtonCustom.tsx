'use client'

import { ButtonCustomProps } from '@/types'
import React from 'react'

import state from '@/store'
import { useSnapshot } from 'valtio'

import { getContrastingColor } from '@/config/helpers'

const ButtonCustom = ({
  label,
  btnType,
  onClick,
  buttonStyles,
  labelStyles,
  icon: Icon,
  iconStyles,
}: ButtonCustomProps) => {
  const snap = useSnapshot(state)

  const generateStyle = (btnType: string) => {
    if (btnType === 'filled') {
      return {
        backgroundColor: state.color,
        color: state.color ? getContrastingColor(state.color) : '',
      }
    } else if (btnType === 'outline') {
      return {
        borderWidth: '1px',
        borderColor: state.color,
        color: state.color,
      }
    }
  }

  return (
    <button
      className={`px-2 py-1.5 flex-1 rounded-md ${buttonStyles}`}
      style={btnType && generateStyle(btnType)}
      onClick={onClick}
    >
      {Icon && (
        <div className=''>
          <Icon className={`btn-icon ${iconStyles}`} />
        </div>
      )}
      <span className={labelStyles && labelStyles}> {label}</span>
    </button>
  )
}

export default ButtonCustom
