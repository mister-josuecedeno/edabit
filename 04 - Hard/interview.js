const interview = (times, totalTime) => {
  const LIMIT = [5, 5, 10, 10, 15, 15, 20, 20];
  const TOTAL_QUESTIONS = 8;
  const TIME_LIMIT = 120;

  // Questions Completed
  const completedQ = times.length;
  if (completedQ < TOTAL_QUESTIONS) return 'disqualified';

  // Completed in time
  if (totalTime > TIME_LIMIT) return 'disqualified';

  // Completed individual questions in time
  for (const time in times) {
    if (times[time] > LIMIT[time]) return 'disqualified';
  }

  return 'qualified';
};

// Tests
console.log(interview([5, 5, 10, 10, 15, 15, 20, 20], 120), 'qualified');
console.log(interview([2, 3, 8, 6, 5, 12, 10, 18], 120), 'qualified');
console.log(interview([2, 3, 8, 6, 5, 12, 10, 18], 64), 'qualified');
console.log(interview([5, 5, 10, 10, 25, 15, 20, 20], 120), 'disqualified');
console.log(interview([5, 5, 10, 10, 15, 15, 20], 120), 'disqualified');
console.log(interview([5, 5, 10, 10, 15, 15, 20, 20], 130), 'disqualified');
console.log(interview([5, 5, 10, 10, 15, 20, 50], 160), 'disqualified');
console.log(interview([5, 5, 10, 10, 15, 15, 40], 120), 'disqualified');
console.log(interview([10, 10, 15, 15, 20, 20], 150), 'disqualified');
console.log(interview([5, 5, 10, 20, 15, 15, 20, 20], 140), 'disqualified');
