function Book() {
  this.author = 'author';
  this.published = 'published';
}

const Author = {
  name: 'name',
  books: 'books',
};

var Publisher = new (function () {
  this.authors = 'authors';
  this.books = 'books';
})();

class Review {
  constructor() {
    this.rating = 'rating';
    this.user = 'user';
  }
}

const Bookstore = (function () {
  return {
    books: 'books',
    prices: 'prices',
  };
})();
