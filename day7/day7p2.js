const fs = require('fs')
const readline = require('readline')

let VALID = []
let INVALID = []

const parseBranch = (branch) => {
  let clean = branch.trim().replace('.', '')
  clean = clean.replace(/bag?./g, '')
  let count = parseInt(clean.substring(0, 1))
  let bag = clean.substring(1).trim()
  return [bag, count]
}

const parseLine = (line, tree) => {
  let pair = line.split('contain')
  let key = pair[0].replace(/bag?./g, '').trim()
  tree[key] = {}
  if (pair[1].trim() !== 'no other bags.') {
    let branches = pair[1].split(',')
    branches.forEach(branch => {
      let entry = parseBranch(branch)
      tree[key][entry[0]] = entry[1]
    })
  }
}

const checkChild = (tree, child) => {
  let count = 0
  Object.keys(tree[child]).forEach(value => {
    count += (checkChild(tree, value) * tree[child][value]) + tree[child][value]
  })
  return count
}

const main = async () => {
  try {
    const readInterface = readline.createInterface({
      input: fs.createReadStream('./input.txt'),
      console: false
    })

    let rules = []
    let tree = {}

    readInterface.on('line', (line) => {
      rules.push(line)
    })

    readInterface.on('close', () => {
      rules.forEach(line => parseLine(line, tree))
      count = 0
      child = 'shiny gold'
      count += checkChild(tree, child)
      console.log(count)
    })
  }
  catch (error) {
    console.log(error)
  }
}

main()


