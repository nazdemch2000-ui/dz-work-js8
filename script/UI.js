
const titleInput = document.getElementById("title");
const authorInput = document.getElementById("author");
const bookList = document.getElementById("bookList");





export function showBooks(books) {
    bookList.innerHTML = "";

    for (const [title, author] of books) {
        const li = document.createElement("li");

        li.textContent = `${title} — ${author}`;

        bookList.appendChild(li);
    }
}

export function getInputData() {
    return [
        titleInput.value,
        authorInput.value]
    
}

export function clearInputs() {
    titleInput.value = "";
    authorInput.value = "";
}

