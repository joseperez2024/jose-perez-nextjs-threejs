import { State } from '@/store'
import { swatch, fileIcon, ai, logoShirt, stylishShirt } from '../public/assets'
import { StaticImageData } from 'next/image'

export const EditorTabs = [
  {
    name: 'colorpicker',
    icon: swatch,
  },
  {
    name: 'filepicker',
    icon: fileIcon,
  },
  {
    name: 'aipicker',
    icon: ai,
  },
]

type FilterTabsItem = {
  name: string
  icon: StaticImageData // Replace with the actual type
}

type FilterTabs = FilterTabsItem[]

export const FilterTabs: FilterTabs = [
  {
    name: 'logoShirt',
    icon: logoShirt,
  },
  {
    name: 'stylishShirt',
    icon: stylishShirt,
  },
]

export type DecalType = {
  stateProperty: keyof State
  filterTab: keyof State
}

export const DecalTypes: Record<string, DecalType> = {
  logo: {
    stateProperty: 'logoDecal',
    filterTab: 'logoShirt',
  },
  full: {
    stateProperty: 'fullDecal',
    filterTab: 'stylishShirt',
  },
}
