const oldest = (people) => {
  return Object.entries(people).sort((a, b) => b[1] - a[1])[0][0];
};

// Tests

console.log(
  oldest({ Charlotte: 53, Oliver: 15, Henry: 18, Gabriel: 46, Violet: 13 }),
  'Charlotte'
);
console.log(
  oldest({ Grayson: 50, Imogen: 63, Logan: 21, Daniel: 64, Rory: 19 }),
  'Daniel'
);
console.log(
  oldest({ Josh: 78, Adam: 63, Aria: 65, Grace: 51, Bella: 37 }),
  'Josh'
);
console.log(
  oldest({ Alex: 9, Jayden: 18, Julia: 43, Penelope: 32, Ella: 34 }),
  'Julia'
);
console.log(
  oldest({ Sam: 65, Joseph: 60, Mia: 41, Thomas: 31, Rebecca: 5 }),
  'Sam'
);
console.log(
  oldest({ Eden: 64, Archie: 18, Olivia: 32, Kai: 84, Harry: 14 }),
  'Kai'
);
console.log(
  oldest({ Anna: 67, Elijah: 10, Cole: 31, Andrew: 24, Elliot: 77 }),
  'Elliot'
);
console.log(
  oldest({ Innes: 77, Lilly: 11, Hallie: 41, Nina: 66, Ryan: 9 }),
  'Innes'
);
console.log(
  oldest({ Isla: 73, Elsie: 6, Frankie: 36, Robbie: 75, Kayla: 9 }),
  'Robbie'
);
console.log(
  oldest({ Jack: 64, Jacob: 33, Tommy: 17, Finn: 5, Isaac: 13 }),
  'Jack'
);
console.log(
  oldest({ Carson: 81, Charlie: 33, Riley: 28, Maria: 39, Sadie: 67 }),
  'Carson'
);
console.log(
  oldest({ Amy: 70, Owen: 11, Matilda: 64, Lexi: 37, Lena: 26 }),
  'Amy'
);
console.log(
  oldest({ Lola: 45, Tyler: 23, Hope: 4, Phoebe: 86, Freya: 44 }),
  'Phoebe'
);
console.log(
  oldest({ Hollie: 48, Harris: 24, Ava: 72, Alfie: 9, Louis: 47 }),
  'Ava'
);
console.log(
  oldest({ Erica: 32, Eve: 82, Harper: 74, Summer: 38, Ben: 72 }),
  'Eve'
);
console.log(
  oldest({ Michael: 63, Jessica: 65, Reuben: 25, Aiden: 82, Emily: 18 }),
  'Aiden'
);
console.log(
  oldest({ Brooke: 8, Lucy: 44, Cooper: 33, Ellie: 82, Millie: 7 }),
  'Ellie'
);
console.log(
  oldest({ Piper: 10, Quinn: 62, David: 20, John: 61, Noah: 17 }),
  'Quinn'
);
console.log(
  oldest({ Cara: 5, Max: 81, Lucas: 62, Sophie: 71, Amelia: 79 }),
  'Max'
);
console.log(
  oldest({ Leo: 29, Clara: 8, Florence: 69, Lewis: 38, James: 47 }),
  'Florence'
);
