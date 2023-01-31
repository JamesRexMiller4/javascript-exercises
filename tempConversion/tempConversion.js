const ftoc = function(num) {
  num = (num - 32) * 5/9
  return parseFloat(num.toFixed(1))
}

const ctof = function(num) {
  num = num * (9/5) + 32
  return parseFloat(num.toFixed(1))
}

module.exports = {
  ftoc,
  ctof
}
