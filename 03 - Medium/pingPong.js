const pingPong = (arr, win) => {
  const pingPong = ',Ping!,Pong!'.repeat(arr.length);
  const result = pingPong.split(',').splice(1);
  return win ? result : result.slice(0,-1);
}

// Tests

console.log(pingPong(["Ping!", "Ping!", "Ping!"], true), ["Ping!", "Pong!", "Ping!", "Pong!", "Ping!", "Pong!"])
console.log(pingPong(["Ping!", "Ping!"], false), ["Ping!", "Pong!", "Ping!"])
console.log(pingPong(["Ping!"], true) , ["Ping!", "Pong!"])


