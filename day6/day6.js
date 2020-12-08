const fs = require('fs')
const readline = require('readline')

const main = async () => {
  try {
    const readInterface = readline.createInterface({
      input: fs.createReadStream('./input.txt'),
      console: false
    })

    let answers = [[]]
    let index = 0

    readInterface.on('line', (line) => {
      if (line.trim() === '') {
        index += 1
        answers.push([])
      } else {
        answers[index].push(line)
      }
    })

    readInterface.on('close', () => {
      let count = 0
      answers.forEach(group => {
        let size = group.length
        for (i = 65; i <= 90; i++) {
          let char = String.fromCharCode(i).toLowerCase()
          let counted = false
          group.forEach(line => {
            if (line.indexOf(char) > -1 && !counted) {
              count += 1
              counted = true
            }
          })
        }
      })
      console.log(count)
    })
  }
  catch (error) {
    console.log(error)
  }
}

main()

