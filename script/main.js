import Book from "./book.js";
import BookTolist from "./Library.js";
import { showBooks, getInputData, clearInputs} from "./UI.js";
import { saveBooks,loadBooks } from "./Storage.js";
import { showStatistics } from "./Statistics.js";
const library = BookTolist();
const saveBooksbtn = document.getElementById("saveBooks")
const loadBooksbtn = document.getElementById("loadBooks")

document.getElementById("addBook").addEventListener("click", () => {
    
    const bookClass = new Book(...getInputData());
    console.log(bookClass);
    library.addBook(bookClass);
    

    showBooks(library.getBooks());
    clearInputs();
    
});
saveBooksbtn.addEventListener("click", () => {
    saveBooks(library.getBooks());
    alert("Book is save");
});
loadBooksbtn.addEventListener("click",()=>{
    const books = loadBooks();

for (const [title, author] of books) {
    library.addBook(new Book(title, author));
}
    showBooks(books);
    console.log(library.getBooks());
})
document.getElementById("statistics").addEventListener("click", async () => {
    const { showStatistics } = await import("./Statistics.js");

    showStatistics(library.getBooks());
});






