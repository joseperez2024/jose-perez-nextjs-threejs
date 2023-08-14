import { proxy } from 'valtio'

export interface State {
  [key: string]: any
  intro?: boolean
  color?: string
  isLogoTexture?: boolean
  isFullTexture?: boolean
  logoDecal?: string
  fullDecal?: string
}

const state = proxy<State>({
  intro: true,
  color: '#ef8d48',
  isLogoTexture: true,
  isFullTexture: false,
  logoDecal: './threejs.png',
  fullDecal: './threejs.png',
})

export default state
