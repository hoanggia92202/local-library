function findAccountById(accounts, id) {
  return accounts.find((account) => account.id === id);
}

function sortAccountsByLastName(accounts) {
  let sortedAccounts = [];

  const lastName = accounts
    .map((account) => {
      return account.name.last;
    })
    .sort();

  lastName.forEach((name) => {
    const matchAccount = accounts.find((account) => account.name.last === name);
    sortedAccounts.push(matchAccount);
  });
  return sortedAccounts;
}

function getTotalNumberOfBorrows(account, books) {
  let totalCheckout = 0;
  for (let i = 0; i < books.length; i++) {
    books[i].borrows.forEach((item) => {
      if (item.id === account.id) {
        totalCheckout++;
      }
    });
  }
  return totalCheckout;
}

function getBooksPossessedByAccount(account, books, authors) {
  let matchingBooks = [];
  books.map((book) => {
    const status = book.borrows.find(
      (status) => status.id === account.id && !status.returned
    );
    if (status) {
      const { id, title, genre, authorId, borrows } = book;
      const author = authors.find((author) => author.id === authorId);
      matchingBooks.push({ id, title, genre, authorId, author, borrows });
    }
  });
  return matchingBooks;
}

module.exports = {
  findAccountById,
  sortAccountsByLastName,
  getTotalNumberOfBorrows,
  getBooksPossessedByAccount,
};
