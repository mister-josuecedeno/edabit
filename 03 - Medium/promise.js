const prom = () => {
  var result = "";

  let promise = new Promise((resolve, reject) => {
    resolve('success!')
})

promise.then((val) => result = val);
}
