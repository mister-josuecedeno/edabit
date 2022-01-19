const countSmileys = (arr) => {
  const regex = /(\;|\:)(\-|\~){0,1}(\)|D)/gi;
  return (arr.join('').match(regex) || []).length;
};

// Tests

console.log(countSmileys([":)", ";(", ";}", ":-D"]), 2);
console.log(countSmileys([";D", ":-(", ":-)", ";~)"]), 3);
console.log(countSmileys([";]", ":[", ";*", ":$", ";-D"]), 1);
console.log(countSmileys([";(", ":>", ":}", ":]"]), 0);
console.log(countSmileys([":)", ":)", ":)", ":)", ":)", ":)", ":)", ":)", ":)", ":)", ":)", ":)", ":)",]), 13);
console.log(countSmileys([':)',':(',':D',':O',':;']), 2);
console.log(countSmileys([':-)',';~D',':-D',':_D']), 3);
console.log(countSmileys([':---)','))',';~~D',';D']), 1);
console.log(countSmileys([';~)',':)',':-)',':--)']), 3);
console.log(countSmileys([':o)',':--D',';-~)']), 0);
console.log(countSmileys([]), 0, "An empty array should return 0");
