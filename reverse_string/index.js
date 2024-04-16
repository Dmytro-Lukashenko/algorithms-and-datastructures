// --- Directions
// Given a string, return a new string with the reversed
// order of characters
// --- Examples
//   reverse('apple') === 'leppa'
//   reverse('hello') === 'olleh'
//   reverse('Greetings!') === '!sgniteerG'

// First solution
// function reverse(str) {
// return str.split('').reverse().join('')
// }

// Second solution
// function reverse(str) {
//   const reversedArr = [];
//   const arr = str.split('');
//   let reversedStr = '';
//   for (let i = arr.length; i >= 0; i--) {
//     reversedArr.push(arr[i]);
//   }
//   reversedStr = reversedArr.join('');
//   return reversedStr;
// }

// Third solution
// function reverse(str) {
//   let reversed = "";

//   for (const character of str) {
//     reversed = character + reversed;
//   }
//   console.log(reversed)
//   return reversed;
// }

// Fourth solution
// function reverse(str) {
//   return str.split('').reduce((rev, char) => char + rev, '')
// }


module.exports = reverse;
