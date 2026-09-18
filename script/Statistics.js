export function showStatistics(books) {
    console.log("Количество книг:", books.length);

    const authors = new Set();

    for (const [title, author] of books) {
        authors.add(author);
    }

    console.log("Количество авторов:", authors.size);
}