import { AiPickerProps } from '@/types'
import { ButtonCustom } from '@/components'

const AIPicker = ({
  prompt,
  setPrompt,
  generatingImg,
  handleSubmit,
}: AiPickerProps) => {
  console.log('AIPicker: ', typeof prompt)
  return (
    <div className='aipicker-container'>
      <textarea
        className='aipicker-textarea'
        rows={5}
        placeholder='Ask AI...'
        value={prompt}
        onChange={(e) => setPrompt(e.target.value)}
      />
      <div className='flex flex-wrap gap-3'>
        {generatingImg ? (
          <ButtonCustom
            btnType='outline'
            label='Asking Ai..'
            labelStyles='text-xs'
          />
        ) : (
          <>
            <ButtonCustom
              btnType='outline'
              label='AI logo'
              onClick={() => handleSubmit('logo')}
              labelStyles='text-xs'
            />
            <ButtonCustom
              btnType='filled'
              label='AI full'
              onClick={() => handleSubmit('full')}
              labelStyles='text-xs'
            />
          </>
        )}
      </div>
    </div>
  )
}

export default AIPicker
