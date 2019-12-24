const caesar = function(phrase, shift) {
  while (shift > 26) {
    shift = shift - 26
  }

  while (shift < 0) {
    shift = 26 + shift
  }

  let arr = phrase.split('')

  const alphabet = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M',
'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'];

  const lowerCaseAlphabet = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm',
'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];

  return arr.map(letter => {
    if (alphabet.includes(letter)) {
      let index = alphabet.indexOf(letter)
      let shiftIndex = index + shift

      if (shiftIndex > 25) {
        shiftIndex = shiftIndex - 26
      } else if (shiftIndex < 0) {
        shiftIndex = 26 + shiftIndex
      }
      return alphabet[shiftIndex]

    } else if (lowerCaseAlphabet.includes(letter)) {
      let index = lowerCaseAlphabet.indexOf(letter)
      let shiftIndex = index + shift
      
      if (shiftIndex > 25) {
        shiftIndex = shiftIndex - 26
      } else if (shiftIndex < 0) {
        shiftIndex = 26 + shiftIndex
      }
      return lowerCaseAlphabet[shiftIndex]

    } else {
      return letter
    }
  }).join('')
  
}

module.exports = caesar
