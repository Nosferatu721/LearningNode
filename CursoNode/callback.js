const asyncCallback = (cb) => {
  setTimeout(() => {
    let random = Math.random();
    if (random > 0.5) {
      return cb(null, "Hello World");
    } else {
      cb(new Error("Hello Error"));
    }
  }, 2000);
};

asyncCallback((err, msg) => {
  if (err) {
    console.log("Error:", err);
  } else {
    console.log(err);
    console.log("Message:", msg);
  }
});
