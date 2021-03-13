const options = {
  name: "test",
  width: 1024,
  height: 1024,
  colors: {
    border: 'black',
    bg: 'red'
  }
};


/* for (let key in options) {
  if (typeof (options[key]) === 'object') {
    for (let i in options[key]) {
      console.log(i, options[key][i]);
    }
  } else {
    console.log(key, options[key]);
  }
} */
let k = 0; 
for (let key in options) { 
  k++;
}
console.log(Object.keys(options).length); /* подсчёт количества ключей объекта */

const {border, bg} = options.colors;
console.log(border);