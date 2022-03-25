function findAuthorById(authors, id) {
  return authors.find((author) => author.id === id);
}

function findBookById(books, id) {
  return books.find((book) => book.id === id);
}

function partitionBooksByBorrowedStatus(books) {
  let bookStatus = [[], []];
  books.forEach((book) => {
    const checkout = book.borrows.some((item) => item.returned !== true);
    checkout ? bookStatus[0].push(book) : bookStatus[1].push(book);
  });
  return bookStatus;
}

function getBorrowersForBook(book, accounts) {
  let result = [];
  accounts.forEach((account) => {
    const checkout = book.borrows.find((item) => item.id === account.id);
    if (checkout) {
      const { returned } = checkout;
      const { id, picture, age, company, email, registered, name } = account;
      result.push({
        id,
        returned,
        picture,
        age,
        name,
        company,
        email,
        registered,
      });
    }
  });
  return result;
}

module.exports = {
  findAuthorById,
  findBookById,
  partitionBooksByBorrowedStatus,
  getBorrowersForBook,
};
