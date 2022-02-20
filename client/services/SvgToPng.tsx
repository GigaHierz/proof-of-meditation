/**
 * converts a base64 encoded data url SVG image to a PNG image
 * @param originalBase64 data url of svg image
 * @param width target width in pixel of PNG image
 * @return {Promise<String>} resolves to png data url of the image
 */
export default function base64SvgToBase64Png (
  originalBase64: string,
  img: HTMLImageElement,
  width: number,
  name: string,
  color: string[]
): Promise<string | null> {
  if (name) {
    return new Promise(resolve => {
      img.id = name
      img.onload = async () => {
        let canvas = document.createElement('canvas')
        let pixel = document.createElement('img')
        for (let k = 0; k < 20; k++)
          for (let i = 0; i < 5; i++) {
            for (let j = 0; j < 5; j++) {
              const squareDimensions = {
                squareX: i,
                squareY: j,
                squareWidth: 1,
                squareHeight: 1
              }
              pixel.style.background = color[k]
              pixel.style.width = '1px'
              canvas.width = width
              canvas.height = width
              let ctx = canvas.getContext('2d')
              ctx?.drawImage(pixel, i, j, 1, 1)
              // ctx.fillStyle = colors[k]
              // ctx.fillRect(i, j, 1, 1)

              // dataContainer[i][j] = k
              // dataContainer.push([i][j])
            }
          }

        try {
          let data = canvas.toDataURL('image/png')
          resolve(data)
        } catch (e) {
          resolve(null)
        }
      }
      img.src = originalBase64
    })
  } else {
    return new Promise(() => {
      enterValue()
    })
  }
}

const enterValue = () => {
  alert('Please enter a Value')
}
