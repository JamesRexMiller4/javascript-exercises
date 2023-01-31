const removeFromArray = function() {
  let guts = Object.values(arguments)
  let arr = guts.splice(0, 1)
  arr = [...arr[0]]

  guts.forEach(num => {
    arr = arr.filter(variable => variable !== num)
  })
  return arr
}

module.exports = removeFromArray
