'use client'
import axios from 'axios'
import { useEffect, useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import { useSnapshot, proxy } from 'valtio'

import config from '../../config/config'
import {
  EditorTabs,
  FilterTabs,
  DecalType,
  DecalTypes,
} from '../../config/constants'
import { downloadCanvasToImage, reader } from '../../config/helpers'
import { fadeAnimation, slideAnimation } from '../../config/motion'

import {
  AIPicker,
  ButtonCustom,
  ColorPicker,
  FilePicker,
  Tab,
} from '@/components'

import state, { State } from '@/store'
import { download, logoShirt } from '../../public/assets'
import { useRouter } from 'next/navigation'

const CustomizerClient = () => {
  const snap = useSnapshot(state)
  snap.intro && (state.intro = false)

  const [file, setFile] = useState<Blob>()

  const [prompt, setPrompt] = useState<string>('')
  const [generatingImg, setGeneratingImg] = useState(false)

  const [activeEditorTab, setActiveEditorTab] = useState('')
  const [activeFilterTab, setActiveFilterTab] = useState<State>({
    logoShirt: true,
    stylishShirt: false,
  })

  // show tab content depending on activeTab
  const generateTabContent = () => {
    switch (activeEditorTab) {
      case 'colorpicker':
        return <ColorPicker />
      case 'aipicker':
        return (
          <AIPicker
            prompt={prompt}
            setPrompt={setPrompt}
            generatingImg={generatingImg}
            handleSubmit={handleSubmit}
          />
        )
      case 'filepicker':
        return <FilePicker file={file} setFile={setFile} readFile={readFile} />
      default:
        return null
    }
  }

  const handleSubmit = async (type: string) => {
    if (!prompt) return alert('Please enter a prompt')
    const bodyPrompt = prompt

    axios
      .post(`http://localhost:3000/api/v1/dalle`, {
        headers: { 'Content-Type': 'application/json' },
        body: bodyPrompt,
      })
      .then((res) => {
        const data = res.data
        console.log('handleSubmit data: ', typeof prompt)
        // handleDecals(
        //   type as keyof typeof DecalTypes,
        //   `data:image/png;base64,${data.photo}`
        // )
      })
      .catch((error) => {
        alert(error)
      })
      .finally(() => {
        setGeneratingImg(false)
        setActiveEditorTab('')
      })
    /* try {
      console.log('handleSubmit prompt: ', typeof prompt)
      setGeneratingImg(true)
      // const response = await fetch('http://localhost:3000/api/v1/dalle', {
      //   method: 'POST',
      //   body: JSON.stringify({ prompt }),
      //   headers: { 'Content-Type': 'application/json' },
      // })

      const response = await axios.post(
        'http://localhost:3000/api/v1/dalle',
        {
          body: prompt, // Send the prompt as part of the request body
        },
        {
          headers: { 'Content-Type': 'application/json' }, // Set the content type header
        }
      )

      const data = await response.data

      console.log('handleSubmit data: ', response)

      // handleDecals(
      //   type as keyof typeof DecalTypes,
      //   `data:image/png;base64,${data.photo}`
      // )
    } catch (error) {
      alert(error)
    } finally {
      setGeneratingImg(false)
      setActiveEditorTab('')
    } */
  }

  const handleDecals = (type: keyof typeof DecalTypes, result: any) => {
    const decalType: DecalType = DecalTypes[type]

    state[decalType.stateProperty] = result

    const foundTab = FilterTabs.find((tab) => tab.name === decalType.filterTab)
    const filterTabName = foundTab ? foundTab.name : undefined

    // console.log(
    //   'filterTabName : ',
    //   FilterTabs.find((tab) => tab.name === decalType.filterTab)
    // )

    console.log('filterTabName?.name : ', filterTabName)
    // console.log('handleDecals activeFilterTab: ', activeFilterTab)

    // console.log(
    //   '!activeFilterTab[filterTabName] NOT : ',
    //   filterTabName && !activeFilterTab[filterTabName]
    // )

    // handleActiveFilterTab(filterTabName!)

    if (filterTabName && !activeFilterTab[filterTabName]) {
      handleActiveFilterTab(filterTabName)
    }
  }

  const handleActiveFilterTab = (tabName: string) => {
    console.log('tabName : ', tabName)
    // console.log('activeFilterTab[tabName] : ', activeFilterTab[tabName])
    // console.log('activeFilterTab : ', activeFilterTab)
    switch (tabName) {
      case 'logoShirt':
        console.log('state.isLogoTexture : ', state.isLogoTexture)
        state.isLogoTexture = !activeFilterTab[tabName]
        break
      case 'stylishShirt':
        state.isFullTexture = !activeFilterTab[tabName]
        break
      default:
        state.isLogoTexture = !state.isLogoTexture
        state.isFullTexture = !state.isFullTexture
        break
    }

    if (tabName && activeFilterTab.hasOwnProperty(tabName)) {
      setActiveFilterTab((prevState) => ({
        ...prevState,
        [tabName]: !prevState[tabName],
      }))
    }

    // console.log('activeFilterTab after: ', activeFilterTab)

    // setActiveFilterTab((prevState) => ({
    //   ...prevState,
    //   [tabName]: !prevState[tabName],
    // }))
  }

  const readFile = (type: string) => {
    if (file) {
      reader(file)
        .then((result) => {
          handleDecals(type as keyof typeof DecalTypes, result)
          setActiveEditorTab('')
        })
        .catch((error) => {
          console.error('Error reading file:', error)
        })
    }
  }

  const router = useRouter()

  const handleClick = () => {
    state.intro = true
    router.push('/')
  }

  return (
    <AnimatePresence>
      {!snap.intro && (
        <>
          <motion.div
            key='custom'
            className='absolute top-0 left-0 z-10'
            {...slideAnimation('left')}
          >
            <div className='flex items-center min-h-screen'>
              <div className='editortabs-container tabs'>
                {EditorTabs.map((tab: any) => (
                  <Tab
                    key={tab.name}
                    tab={tab}
                    onClick={() => setActiveEditorTab(tab.name)}
                  />
                ))}
                {generateTabContent()}
              </div>
            </div>
          </motion.div>
          <motion.div
            className='absolute z-10 top-5 right-5'
            {...fadeAnimation}
          >
            <ButtonCustom
              label='Go Back'
              btnType='filled'
              onClick={handleClick}
            />
          </motion.div>
          <motion.div
            className='filtertabs-container'
            {...slideAnimation('up')}
          >
            {FilterTabs.map((tab: any, index) => (
              <Tab
                key={tab.name}
                tab={tab}
                onClick={() => handleActiveFilterTab(tab.name)}
                isFilterTab
                isActiveTab={activeFilterTab[tab.name]}
              />
            ))}
          </motion.div>
        </>
      )}
    </AnimatePresence>
  )
}

export default CustomizerClient
