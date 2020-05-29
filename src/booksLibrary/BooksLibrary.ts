interface Book {
  title: string
  isRead: boolean
}

const BooksLibrary = () => {
  const present = (title: string, match: string) => title.toLowerCase() == match.toLowerCase()

  const isBookRead = (books: Array<Book>, title: string) => books.some(book => present(book.title, title) && book.isRead)

  return {
    isBookRead,
  }
}

export { Book, BooksLibrary }
