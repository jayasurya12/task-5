
//Set function using Duplicates Data removed..
// let hi = new Set(['aab', 'abc', 'abb', 'aab', 'abc', 'bac', 'bac']);
// console.log(Array.from(hi));
// //Prime Numbers....
// function primeNumber() {
//   let num = [prompt('Enter Number ')];
//   for (i = 0; i < num.length; i++) {
//     console.log(num[i]);
//     if (num[i] % 2 !== 0) {
//       console.log('Prime Numbers ' + num[i]);
//     } else {
//       console.log('Not a prime');
//     }
//   }
// }
// primeNumber();

// function checkPalindrome(str) {
//   const len = str.length;
//   for (let i = 0; i < len / 2; i++) {
//     if (string[i] !== string[len - 1 - i]) {
//       return 'It is not a palindrome';
//     }
//   }

//   return 'It is a palindrome';
// }

// const string = prompt('Enter a string: ');

// const value = checkPalindrome(string);

// console.log(value);

// function palindrome(str){
//   let reversedValue=str.split('').reverse().join('');
//   console.log(reversedValue)
//   if(reversedValue === str){
//     console.log("it is a palindrome word or number "+reversedValue)
//   }
//   else{
//     console.log("it is not a palindrome")
//   }
// }
// palindrome('12221');

function pali(str1) {
    let left = 0;
    let right = str1.length - 1;
    if (left < right) {
      if (str1[left] != str1[right]) {
        return false;
      }
      left++;
      right--;
    }
    return true;
  }
  let str1 = 'madam';
  console.log(pali(str1));
  // //odd numbers...
  
  let numberContainer = [1, 9, 17, 22, 44, 65, 97, 107, 57, 41, 11, 13];
  
  let oddNumber = numberContainer.filter(item => {
    return item % 2;
  });
  console.log(oddNumber);
  
  
  
  const textContainers = 'hey hi how are you';
  const words = textContainers.split(' ');
  
  for (let i = 0; i < words.length; i++) {
    words[i] = words[i][0].toUpperCase() + words[i].substr(1);
  }
  console.log(words.join(' '))
    //Sum..
  
let sum=[2, 3, 4, 5, 6, 7, 2, 3, 4, 6, 10];
let total = sum.reduce((pre, accum)=> {
return (pre += accum);
});
console.log(total);

(function(){
    for(i=0; i<100; i++){
        if(i%2!==0)
        console.log(i);
    }
})();
