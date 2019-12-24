const sumAll = function(num1, num2) {
  if (num1 < 0 || num2 < 0) {
    return 'ERROR'
  } else if (typeof num1 !== 'number' || typeof num2 !== 'number') {
    return 'ERROR'
  }

  let sum, end;
  
  if ( num1 < num2 ){
    sum = num1
    end = num2
  } else if (num1 > num2 ) {
    sum = num2
    end = num1
  }
  for( let i = sum + 1; i <= end; ++i ) {
    sum += i
  }
  return sum
}

module.exports = sumAll
