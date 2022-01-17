const countdown = (n, str) => {
  let counter = '';

  for (let i = n; i > 0; i--) {
    counter += `${i}. `
  }

  return `${counter}${str.toUpperCase()}!`;
}

// Tests

console.log(countdown(10, "Blast Off"), "10. 9. 8. 7. 6. 5. 4. 3. 2. 1. BLAST OFF!")
console.log(countdown(3, "go"), "3. 2. 1. GO!")
console.log(countdown(5, "FIRE"), "5. 4. 3. 2. 1. FIRE!")
console.log(countdown(12, "watch out"), "12. 11. 10. 9. 8. 7. 6. 5. 4. 3. 2. 1. WATCH OUT!")
console.log(countdown(7, "fire"), "7. 6. 5. 4. 3. 2. 1. FIRE!")
console.log(countdown(16, "shoot"), "16. 15. 14. 13. 12. 11. 10. 9. 8. 7. 6. 5. 4. 3. 2. 1. SHOOT!")
console.log(countdown(28, "fire"), "28. 27. 26. 25. 24. 23. 22. 21. 20. 19. 18. 17. 16. 15. 14. 13. 12. 11. 10. 9. 8. 7. 6. 5. 4. 3. 2. 1. FIRE!")
console.log(countdown(14, "watch out"), "14. 13. 12. 11. 10. 9. 8. 7. 6. 5. 4. 3. 2. 1. WATCH OUT!")
console.log(countdown(29, "take down"), "29. 28. 27. 26. 25. 24. 23. 22. 21. 20. 19. 18. 17. 16. 15. 14. 13. 12. 11. 10. 9. 8. 7. 6. 5. 4. 3. 2. 1. TAKE DOWN!")
console.log(countdown(8, "boom"), "8. 7. 6. 5. 4. 3. 2. 1. BOOM!")
