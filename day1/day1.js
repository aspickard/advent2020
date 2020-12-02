const fs = require('fs')
const readline = require('readline')

const findPair = async (numbers) => {
  numbers.forEach(number => {
    let res = numbers.filter(cur => cur + number === 2020)
    if (res.length) {
      console.log(res[0]*number)
      return
    }
  })
}

const main = async () => {
  try {
    const readInterface = readline.createInterface({
      input: fs.createReadStream('./input.txt'),
      console: false
    })

    let numbers = []

    readInterface.on('line', (line) => {
      numbers.push(parseInt(line))
    })

    readInterface.on('close', () => {
      findPair(numbers)
    })
  }
  catch (error) {
    console.log(error)
  }
}

main()


