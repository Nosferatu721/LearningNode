const promiseFunction = () =>
  new Promise((resolve, reject) => {
    setTimeout(() => {
      let random = Math.random();
      if (random > 0.5) {
        resolve("Hello World");
      } else {
        reject(new Error("Hello Error"));
      }
    }, 500);
  });

async function asyncAwait() {
  try {
    const msg = await promiseFunction();
    console.log(msg.toUpperCase());
  } catch (error) {
    console.log("ERROR:", error);
  }
}

asyncAwait();
