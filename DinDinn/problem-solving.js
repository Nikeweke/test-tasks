

const str = 'abz'
const n = 2
const alphabet = 'abcdefghijklmnopqrstuvwxyz'.split('');


const result = changeChars(str, n)
console.log(result)

// What is the disadvantage of using the ASCII value of the letters to solve this problem?
// ASCII is not suited for any language that uses more than the basic Latin alphabet 
// Also, since the set of punctuation characters encoded in ASCII is limited, some marks that are notionally separate have been unified; for example, hyphen and minus are the same character, 
// as are apostrophe, opening single quotation mark, and closing single quotation mark.
function changeChars(str, n) {
  const splitedStr = str.split('')

  let index = splitedStr.length
  while(index--) {
    const alphabetIndex = alphabet.findIndex((letter) => letter === splitedStr[index])
    let newIndex = alphabetIndex+n
    if (newIndex > alphabet.length) {
      newIndex = 0
    }
    
    splitedStr[index] = alphabet[newIndex]
  }

  return splitedStr
}