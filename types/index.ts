import { type } from 'os'
import { MouseEventHandler, ReactElement, ReactNode } from 'react'
import { IconType } from 'react-icons'

export interface ButtonCustomProps {
  label: string
  btnType?: 'filled' | 'button' | 'submit' | 'outline'
  onClick?: () => void
  buttonStyles?: string
  labelStyles?: string
  icon?: IconType
  iconStyles?: string
  // onClick?: MouseEventHandler<HTMLButtonElement>
  // btnType?: 'button' | 'submit'
  // labelStyles?: string
  // icon?: IconType
  // iconStyles?: string
  // isDisabled?: boolean
}

export interface ClientOnlyProps {
  children: ReactNode
}

export interface CameraRigProps {
  children: ReactNode
}

export interface ITab {
  name: string
  icon: string
}

export interface TabProps {
  tab: ITab
  isFilterTab?: boolean
  isActiveTab?: boolean
  onClick?: () => void
}

export interface FilePickerProps {
  file: Blob | null | undefined
  setFile: (file: Blob) => void
  readFile: (type: string) => void
}

export interface AiPickerProps {
  prompt: string
  setPrompt: (prompt: string) => void
  generatingImg: boolean
  handleSubmit: (type: string) => Promise<void>
}

export interface NavSocialMenu {
  socialStyles?: string | undefined
}

export interface TextTypingProps {
  title?: string
  textStyles?: string
}
export interface TextTitleProps {
  title?: string | ReactElement
  textStyles?: string
}

export interface IssueCardProps {
  active: string
  id: string
  index: number
  setActive: (id: string) => void
  title: string
  subtitle: string
  icon: IconType
  summary: string
}
