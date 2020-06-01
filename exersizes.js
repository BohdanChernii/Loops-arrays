first:https://www.codewars.com/kata/convert-a-string-to-an-array/train/javascript?fbclid=IwAR3YI859W93y0_kzYKnFWQPKMYTPngUBndr0OjOoqGD05E9f4Wk9kBN7Dko

function stringToArray(string){
  return string.split(' ');
}


second:https://www.codewars.com/kata/dna-to-rna-conversion/train/javascript?fbclid=IwAR3D-5X2qEcRQRi9FnSoowmwN223QOXAyfATdOlwsA15IzwVkoO-tDcJUr0

function DNAtoRNA(dna) {
  return dna.replace(/T/g,'U');
}

third:https://www.codewars.com/kata/577a98a6ae28071780000989/train/javascript?fbclid=IwAR3sFI7sR8YRR_GaLbAEGy--0Uqmh_QL3djXsudzfZhl2ATbrwDDu8o-uJY
const min = function(list){   
    return Math.min(... list);
}
const max = function(list){
    return Math.max(... list);
}

fourth:https://www.codewars.com/kata/544a54fd18b8e06d240005c0/train/javascript?fbclid=IwAR0DUfCgT9D6TA5v6APj9wqXRRPn25arII0x2fefoyxd_UrZr96KRNqNq7Y
function min(arr, toReturn) {
 let val = Math.min(... arr)
  return toReturn === 'value' ? val : arr.indexOf(val)
}
