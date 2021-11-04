const tidyBooks = (books) => {
  const tidy = [];
  for (const book of books) {
    let [title, author] = book.trim().split('-');
    tidy.push([title, author]);
  }
  return tidy;
}

// Tests

console.log(tidyBooks(["     The Catcher in the Rye - J. D. Salinger    ", 
"    Brave New World - Aldous Huxley   ", 
"    Of Mice and Men - John Steinbeck    "]), 
[["The Catcher in the Rye", "J. D. Salinger"], 
["Brave New World", "Aldous Huxley"], 
["Of Mice and Men", "John Steinbeck"]])


console.log(tidyBooks(["     The Grapes of Wrath - John Steinbeck    ", 
"    Great Expectations - Charles Dickens   ", 
"    The Scarlet Letter - Nathaniel Hawthorne    "]), 
[["The Grapes of Wrath", "John Steinbeck"], 
["Great Expectations", "Charles Dickens"], 
["The Scarlet Letter", "Nathaniel Hawthorne"]])
