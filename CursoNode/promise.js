const promise = new Promise((resolve, reject) => {
  setTimeout(() => {
    let random = Math.random();
    if (random > 0.5) {
      resolve("Hello World");
    } else {
      reject(new Error("Hello Error"));
    }
  }, 2000);
});

promise
  .then((msg) => msg.toUpperCase())
  .then((msgUpper) => console.log(msgUpper))
  .catch((err) => console.log(err));
