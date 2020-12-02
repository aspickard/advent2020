const fs = require('fs')
const readline = require('readline')

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
      console.log(numbers)
    })
  }
  catch (error) {
    console.log(error)
  }
}

main()


