import { ButtonCustom } from '@/components'
import { FilePickerProps } from '@/types'

const FilePicker = ({ file, setFile, readFile }: FilePickerProps) => {
  return (
    <div className='filepicker-container'>
      <div className='flex flex-1 flex-col'>
        <input
          type='file'
          id='file-upload'
          accept='image/*'
          onChange={(e) => {
            setFile(e.target.files?.[0]!)
          }}
        />
        <label htmlFor='file-upload' className='filepicker-label'>
          Upload file
        </label>
        <p className='mt-2 text-gray-500 text-xs truncate'>
          {/* {file} */}
          {file ? file.name : 'No file selected'}
        </p>
      </div>
      <div className='mt-4 flex flex-wrap gap-3'>
        <ButtonCustom
          btnType='outline'
          label='Logo'
          onClick={() => readFile('logo')}
          labelStyles='text-xs'
        />
        <ButtonCustom
          btnType='filled'
          label='Full'
          onClick={() => readFile('full')}
          labelStyles='text-xs'
        />
      </div>
    </div>
  )
}

export default FilePicker
