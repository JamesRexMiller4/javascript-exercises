const repeatString = function(string, num) {
  if (num === 0) {
    return ''
  } else if (num < 0) {
    return 'ERROR'
  }
  
  let arr = [string]
  for (let i=1; i < num; i++) {
    arr.push(string)
  }
  return arr.join('')
}

module.exports = repeatString
