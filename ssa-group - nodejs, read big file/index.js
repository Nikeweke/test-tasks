const fs = require('fs')
const path = require('path')

main()
async function main() {
  const file_path = process.argv[2]
  if (!file_path) {
    console.log('No file specified')
    process.exit(2)
  }

  const pather = 'C:\\Programms\\noder\\test.txt'
  
  console.log(path.basename(pather))
  console.log(path.extname(pather))
  console.log(path.dirname(pather))
  console.log(path.resolve('ss', 'tst.txt') )
  console.log(path.join('ss', 'tst.txt') )
  return 


  const resultFilepath = resultPathName(file_path)
  const resultStream = fs.createWriteStream(resultFilepath);

  const CHUNK_SIZE = 16; 
  const stream = fs.createReadStream(file_path, { highWaterMark: CHUNK_SIZE });
  for await(const data of stream) {
    const dataStr = String(data) 
    const numbers = dataStr
      .split(' ')
      // .map((item) => {
        //   return Math.pow(Number(item), 2)
        // })

    const isSpace = numbers.indexOf('')
    if (isSpace) {
      resultStream.write(numbers.join(' '))
    } else {
      resultStream.write(numbers.join(' ') + ' ')
    }
    // console.log(numbers)
  }

  resultStream.end()
}

function resultPathName(file_path) {
  const newPath = file_path.split('.')
  const ext = newPath[newPath.length-1]
  const file = newPath[newPath.length-2]
  const path = newPath.slice(0, newPath.length-2).join('/')
  // console.log(ext)
  // console.log(file)
  // console.log(path) 
  // console.log(`./${path}/${file}_result.${ext}`)
  return `./${path}/${file}_result.${ext}`
}
