// https://edabit.com/challenge/t3iJRARc9K9x9AAdr

const trackRobot = (second) => { return; }

// Tests

console.log(trackRobot(["right 10", "up 50", "left 30", "down 10"]), [-20, 40])
console.log(trackRobot([]), [0, 0])
console.log(trackRobot(["left 10", "left 100", "left 1000", "left 10000"]), [-11110, 0])
console.log(trackRobot(["right 100", "right 100", "up 500", "up 10000"]), [200, 10500])
console.log(trackRobot(["left 10", "right 10", "down 10", "up 10"]), [0, 0])