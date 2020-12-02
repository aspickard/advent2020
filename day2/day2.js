const fs = require('fs')
const readline = require('readline')

const parseRule = (input) => {
  let pair = input.split('-')
  let min = parseInt(pair[0])
  let max = parseInt(pair[1])
  let chars = input.split(' ')
  let ruleChar = chars[1][0]
  let password = input.split(':')[1]
  let regex = new RegExp(ruleChar, 'g')
  let count = password.match(regex)
  count = count && count.length || 0
  if (count >= min && count <= max) {
    return true
  }
  return false
}

const main = async () => {
  try {
    const readInterface = readline.createInterface({
      input: fs.createReadStream('./input2.txt'),
      console: false
    })

    let strings = []

    readInterface.on('line', (line) => {
      strings.push(line)
    })

    readInterface.on('close', () => {
      let validCount = 0
      strings.forEach(input => {
        if (parseRule(input)) {
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


