const fs = require('fs')
const readline = require('readline')

const main = async () => {
  try {
    const readInterface = readline.createInterface({
      input: fs.createReadStream('./input.txt'),
      console: false
    })

    let inputs = [[]]
    let curInput = 0
    let validCount = 0

    readInterface.on('line', (line) => {
      if (line === '') {
        inputs.push([])
        curInput += 1
      } else {
        inputs[curInput] += ` ${line}`
      }
    })

    readInterface.on('close', () => {
      inputs.forEach(input => {
        let validation = {
          byr: false,
          iyr: false,
          eyr: false,
          hgt: false,
          hcl: false,
          ecl: false,
          pid: false
        }
        let cur = input.trim()
        let pairs = cur.split(' ')
        pairs.forEach(pair => {
          let curKey = pair.split(':')[0]
          if (curKey in validation) {
            validation[curKey] = true
          }
        })
        let valid = Object.keys(validation).filter(curField => {
          return validation[curField]
        }).length
        if (valid === Object.keys(validation).length) {
          validCount += 1
        }
      })
      console.log(validCount)
    })
  }
  catch (error) {
    console.log(error)
  }
}

main()


