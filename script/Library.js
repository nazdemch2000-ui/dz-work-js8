export default function BookTolist() {

    const bookList = [];

    return {
        addBook(book) {
            bookList.push([book.title, book.author]);
        },

        getBooks() {
            return bookList;
        }
    };
}