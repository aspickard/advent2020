const fs = require('fs')
const readline = require('readline')

const checkSquare = (x, y, numbers) => {
  return numbers[y][x] === "#" ? 1 : 0
}

const checkGrid = (xdelta, ydelta, numbers) => {
  let x = 0
  let y = 0
  let count = 0
  let lines = numbers.length
  let length = numbers[0].length
  for (let i=0; i<lines - 1; i++) {
    x += xdelta
    y += ydelta
    count += checkSquare(x % length, y, numbers)
  }
  return count
}
const main = async () => {
  try {
    const readInterface = readline.createInterface({
      input: fs.createReadStream('./input.txt'),
      console: false
    })

    let numbers = []
    let length = 0

    readInterface.on('line', (line) => {
      numbers.push(line.split(''))
    })

    readInterface.on('close', () => {
      let count = checkGrid(3, 1, numbers)
      console.log(count)
    })
  }
  catch (error) {
    console.log(error)
  }
}

main()


