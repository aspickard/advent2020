const fs = require('fs')
const readline = require('readline')

const main = async () => {
  try {
    const readInterface = readline.createInterface({
      input: fs.createReadStream('./input.txt'),
      console: false
    })

    let seats = []
    let highest = 0

    readInterface.on('line', (line) => {
      seats.push(line)
    })

    readInterface.on('close', () => {
      seats.forEach(line => {
        let rowCode = line.substring(0, 7)
        let seatCode = line.substring(7)
        let row = rowCode.replace(/F/g, 0)
        row = row.replace(/B/g, 1)
        row = parseInt(row, 2)
        let seat = seatCode.replace(/L/g, 0)
        seat = seat.replace(/R/g, 1)
        seat = parseInt(seat, 2)
        let code = (row * 8 + seat)
        if (code > highest) {
          highest = code
        }
      })
      console.log(highest)
    })
  }
  catch (error) {
    console.log(error)
  }
}

main()


