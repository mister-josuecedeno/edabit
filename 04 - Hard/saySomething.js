// https://edabit.com/challenge/R8atdhgsG4B69AZzR

function saySomething(str) {
  throw 'what the heck';
}

let ERR = '';

const wait = () => new Promise((resolve, reject) => setTimeout(resolve, 1000));

wait()
  .then(() => saySomething('1 second has passed'))
  .catch((err) => (ERR = err));
