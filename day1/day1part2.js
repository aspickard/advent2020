const fs = require('fs')
const readline = require('readline')

const findPair = async (numbers) => {
  numbers.forEach(number1 => {
    numbers.forEach(number2 => {
      let res = numbers.filter(cur => cur + number1 + number2 === 2020)
      if (res.length) {
        console.log(res[0]*number1*number2)
        return
      }
    })
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


