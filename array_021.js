const arr = [1, 223, 34, 6, 8];
arr.sort();
console.log(arr);
function compareNum(a, b) {
  return a-b;
}


arr.push(7);
console.log(arr);
/* 
for (let i = 0; i < arr.length; i++) {
  console.log(arr[i]);
} */

/* for (let value of arr) {
  console.log(value);
} */

arr.forEach(function(item, i, arr) {
  console.log(`${i}: ${item} внутри массива ${arr}`);
});

const str = prompt("", "");
const products = str.split(', ');
console.log(products);