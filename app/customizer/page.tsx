import CanvasClient from '@/canvas'
import { CustomizerClient } from '@/components'

const Customizer = () => {
  return (
    <main className='app transition-all ease-in'>
      <CustomizerClient />
      <CanvasClient />
    </main>
  )
}

export default Customizer
