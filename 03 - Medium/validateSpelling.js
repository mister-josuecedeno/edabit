const validateSpelling = (txt) => {
  const firstWord = txt
    .match(/[A-Z](?=\.)/g)
    .join('')
    .toLowerCase();
  const secondWord = txt
    .match(/\w(?!\. )/g)
    .join('')
    .toLowerCase();
  return firstWord === secondWord;
};

// Tests

console.log(validateSpelling('C. Y. T. O. P. L. A. S. M. Cytoplasm?'), true);
console.log(validateSpelling('P. H. A. R. A. O. H. Pharaoh!'), true);
console.log(
  validateSpelling('H. A. N. K. E. R. C. H. E. I. F. Handkerchief.'),
  false
);
console.log(validateSpelling('M. E. C. O. M. M. E. N. N. Recommend.'), false);
console.log(
  validateSpelling('C. H. R. Y. S. A. N. T. H. E. M. U. M. Chrysanthemum!'),
  true
);
console.log(
  validateSpelling('A. C. C. O. M. M. O. D. A. M. E. Accommodate!'),
  false
);
console.log(
  validateSpelling('S. U. A. C. E. I. L. L. A. N. C. E. Surveillance.'),
  false
);
console.log(validateSpelling('B. U. S. I. N. E. S. S. Business.'), true);
console.log(
  validateSpelling('C. O. N. V. E. N. I. E. N. T. Convenient.'),
  true
);
console.log(
  validateSpelling('C. O. N. V. E. N. O. E. N. T. Convenient!'),
  false
);
console.log(validateSpelling('C. H. A. U. F. F. E. U. R. Chauffeur.'), true);
console.log(validateSpelling('L. I. A. A. S. O. N. Liaison!'), false);
console.log(
  validateSpelling('O. C. C. U. R. R. E. N. C. E. Occurrence?'),
  true
);
console.log(
  validateSpelling('E. C. C. C. R. R. E. N. C. E. Occurrence!'),
  false
);
console.log(validateSpelling('E. A. B. A. R. R. A. S. S. Embarrass!'), false);
console.log(
  validateSpelling('C. O. N. V. E. N. I. E. N. T. Convenient?'),
  true
);
console.log(
  validateSpelling('U. N. C. O. N. S. C. I. C. U. U. Unconscious!'),
  false
);
console.log(validateSpelling('I. E. D. R. D. Weird!'), false);
console.log(
  validateSpelling('D. F. F. T. N. I. T. E. L. Y. Definitely?'),
  false
);
console.log(validateSpelling('C. A. A. E. N. D. A. R. Calendar.'), false);
console.log(
  validateSpelling('A. C. C. O. M. M. O. D. C. T. E. Accommodate!'),
  false
);
console.log(
  validateSpelling('A. C. C. O. M. M. O. D. A. O. O. Accommodate!'),
  false
);
console.log(
  validateSpelling('S. U. R. V. E. I. L. L. A. N. C. E. Surveillance.'),
  true
);
console.log(validateSpelling('S. E. P. A. R. A. T. E. Separate!'), true);
console.log(
  validateSpelling('Q. U. O. S. T. I. O. N. N. A. U. R. E. Questionnaire.'),
  false
);
console.log(validateSpelling('S. E. S. A. R. A. T. E. Separate!'), false);
console.log(validateSpelling('E. M. B. B. R. R. A. S. R. Embarrass.'), false);
console.log(validateSpelling('E. M. B. A. R. R. A. S. S. Embarrass?'), true);
console.log(
  validateSpelling('A. M. C. O. M. O. O. D. A. T. E. Accommodate!'),
  false
);
console.log(validateSpelling('B. U. S. I. S. E. S. U. Business.'), false);
console.log(
  validateSpelling('D. E. F. I. N. I. T. E. L. Y. Definitely?'),
  true
);
console.log(
  validateSpelling('C. H. R. Y. S. A. N. T. H. E. M. U. M. Chrysanthemum!'),
  true
);
console.log(validateSpelling('N. Y. C. E. S. S. A. R. A. Necessary.'), false);
console.log(
  validateSpelling('A. C. C. O. M. M. O. M. A. T. A. Accommodate?'),
  false
);
console.log(validateSpelling('T. O. M. O. R. R. T. M. Tomorrow?'), false);
console.log(
  validateSpelling('N. N. C. O. N. S. S. I. O. U. S. Unconscious.'),
  false
);
console.log(
  validateSpelling('C. H. R. Y. S. A. N. T. H. E. M. U. M. Chrysanthemum?'),
  true
);
console.log(validateSpelling('L. I. A. I. S. O. L. Liaison.'), false);
console.log(validateSpelling('T. O. M. O. R. R. O. W. Tomorrow.'), true);
console.log(validateSpelling('N. E. C. E. S. S. A. R. Y. Necessary?'), true);
console.log(validateSpelling('B. U. S. I. N. E. S. S. Business.'), true);
console.log(validateSpelling('T. O. M. O. R. R. O. W. Tomorrow!'), true);
console.log(
  validateSpelling('S. U. R. V. E. I. L. L. A. N. C. E. Surveillance.'),
  true
);
console.log(validateSpelling('T. O. M. M. R. R. O. W. Tomorrow.'), false);
console.log(validateSpelling('C. U. A. U. U. F. E. U. R. Chauffeur!'), false);
console.log(validateSpelling('F. H. A. U. C. F. E. U. R. Chauffeur!'), false);
console.log(validateSpelling('C. H. A. U. F. F. E. U. R. Chauffeur.'), true);
console.log(
  validateSpelling('S. U. F. F. I. C. I. E. N. S. Sufficient!'),
  false
);
console.log(
  validateSpelling('I. Y. I. O. S. C. N. C. A. R. C. Y. Idiosyncarcy?'),
  false
);
console.log(
  validateSpelling('Q. U. E. S. T. I. O. N. N. A. E. A. E. Questionnaire?'),
  false
);
console.log(
  validateSpelling('A. C. C. M. M. M. E. D. A. T. E. Accommodate!'),
  false
);
console.log(validateSpelling('E. M. B. A. R. R. A. S. S. Embarrass!'), true);
console.log(
  validateSpelling('P. A. R. L. I. A. E. P. N. T. Parliament!'),
  false
);

// Made by @Joshua Señoron
