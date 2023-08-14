export const downloadCanvasToImage = () => {
  const canvas: HTMLCanvasElement = document.querySelector('canvas')!
  const dataURL: string = canvas.toDataURL()
  const link: HTMLAnchorElement = document.createElement('a')

  link.href = dataURL
  link.download = 'canvas.png'
  document.body.appendChild(link)
  link.click()
  document.body.removeChild(link)
}

export const reader = (file: Blob) =>
  new Promise((resolve, reject) => {
    const fileReader = new FileReader()
    fileReader.onload = () => {
      resolve(fileReader.result)
    }
    fileReader.onerror = (error) => {
      console.log('helpers.ts/reader: Error occurred', error)
      reject(error)
    }
    fileReader.readAsDataURL(file)
  })

export const getContrastingColor = (color: string) => {
  // Remove the '#' character if it exists
  const hex = color.replace('#', '')

  // Convert the hex string to RGB values
  const r = parseInt(hex.substring(0, 2), 16)
  const g = parseInt(hex.substring(2, 4), 16)
  const b = parseInt(hex.substring(4, 6), 16)

  // Calculate the brightness of the color
  const brightness = (r * 299 + g * 587 + b * 114) / 1000

  // Return black or white depending on the brightness
  return brightness > 128 ? 'black' : 'white'
}
