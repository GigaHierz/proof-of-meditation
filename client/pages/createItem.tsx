import { useEffect } from 'react'
import { getFitbitData } from '../services/fitbitService'

function ListPage () {
  let ctx: any
  let canvas: any
  let container: any
  let dataContainer: Array<Array<number>> = [[0, 1]] //  array of aarrys
  useEffect(() => {
    container = document.getElementById('myCanvas')
    if (!container.hasChild) {
      canvas = document.createElement('canvas')
      canvas.width = 240
      canvas.height = 240
      container?.appendChild(canvas)
      ctx = canvas.getContext('2d')
    }
  }, [])

  getFitbitData('hallo', 'hallo').then(data => {
    console.log(data)
    createNft(data)
  })

  function createNft (colors: string[]) {
    for (let k = 0; k < 20; k++)
      for (let i = 0; i < 5; i++) {
        for (let j = 0; j < 5; j++) {
          const squareDimensions = {
            squareX: i,
            squareY: j,
            squareWidth: 1,
            squareHeight: 1
          }

          // ctx.fillStyle = colors[k]
          // ctx.fillRect(i, j, 1, 1)

          // dataContainer[i][j] = k
          // dataContainer.push([i][j])
          createSquare(squareDimensions, colors[k])
        }
      }
  }

  function createSquare (squareDimensions: any, color: any) {
    const { squareX, squareY, squareWidth, squareHeight } = squareDimensions

    // const img = document.createElement('img')
    // img.style.background = '#11111'
    // img.style.width = '1px'

    if (ctx) {
      ctx.fillStyle = '#4D4D4D'
      ctx.fillRect(squareX, squareY, squareWidth, squareHeight)
    }
    // console.log(ctx)
  }

  function hexToRgb (hex: string) {
    var result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex)
    return result
      ? {
          r: parseInt(result[1], 16),
          g: parseInt(result[2], 16),
          b: parseInt(result[3], 16)
        }
      : null
  }

  return (
    <div>
      <div id='myCanvas'></div>
    </div>
  )
}

export default ListPage
