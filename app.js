const greet = (name) => {
  console.log(name);
};

// greet("victor");
// greet("Florence");

// console.log(globalThis);
let counter = 0;

const clear = globalThis.setInterval(() => {
  console.log("MERN stack course");
  counter++;

  if (counter === 10) {
    console.log(counter);
    globalThis.clearInterval(clear);
  }
}, 1000);

console.log(__dirname);
console.log(__filename);
