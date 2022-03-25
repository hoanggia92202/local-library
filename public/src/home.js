function getTotalBooksCount(books) {
  return books.length;
}

function getTotalAccountsCount(accounts) {
  return accounts.length;
}

function getBooksBorrowedCount(books) {
  return books.filter((book) => !book.borrows[0].returned).length;
}

/* helper function */
function sortByHighestNumber(arr) {
  return arr.sort((a, b) => {
    return b.count - a.count;
  });
}

/* helper function */
function getTotalGenre(genreArray, genre) {
  let total = 0;
  genreArray.forEach((item) => {
    if (item === genre) {
      total++;
    }
  });
  return total;
}

/* helper function */
function authorTotalBookCheckout(books, id) {
  let total = [];
  books.forEach((book) => {
    if (book.authorId === id) {
      total.push(book.borrows.length);
    }
  });
  return total.reduce((total, current) => total + current);
}

function getMostCommonGenres(books) {
  let result = [];
  const genreArray = books.map((book) => book.genre);
  const uniqueGenre = [...new Set(genreArray)];
  uniqueGenre.forEach((genre) => {
    const total = getTotalGenre(genreArray, genre);
    result.push({ name: genre, count: total });
  });
  const sortedResult = sortByHighestNumber(result).slice(0, 5);
  return sortedResult;
}

function getMostPopularBooks(books) {
  let result = [];
  books.forEach((book) => {
    result.push({
      name: book.title,
      count: book.borrows.length,
    });
  });
  const sortedResult = sortByHighestNumber(result).slice(0, 5);
  return sortedResult;
}

function getMostPopularAuthors(books, authors) {
  let result = [];
  authors.forEach((author) => {
    const total = authorTotalBookCheckout(books, author.id);
    result.push({
      name: `${author.name.first} ${author.name.last}`,
      count: total,
    });
  });
  const sortedResult = sortByHighestNumber(result).slice(0, 5);
  return sortedResult;
}

module.exports = {
  getTotalBooksCount,
  getTotalAccountsCount,
  getBooksBorrowedCount,
  getMostCommonGenres,
  getMostPopularBooks,
  getMostPopularAuthors,
};
