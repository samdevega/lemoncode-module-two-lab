import { Book, BooksLibrary } from './BooksLibrary'

describe('BooksLibrary', () => {
  const booksLibrary = BooksLibrary()

  describe('isBookRead', () => {
    const books: Array<Book> = [
      { title: "Harry Potter y la piedra filosofal", isRead: true },
      { title: "Canción de hielo y fuego", isRead: false },
      { title: "Devastación", isRead: true },
    ]
    
    describe('is truthy when', () => {
      it('book is present and read', () => {
        expect(booksLibrary.isBookRead(books, 'Devastación')).toBe(true)
      })
    })
    
    describe('is falsy when', () => {
      it('book is present and not read', () => {
        expect(booksLibrary.isBookRead(books, 'Canción de hielo y fuego')).toBe(false)
      })
      
      it('book is not present', () => {
        expect(booksLibrary.isBookRead(books, 'Los Pilares de la Tierra')).toBe(false)
      })
    })
  })
})
