export default class Book {
    constructor(title, author) {
        this.title = title;
        this.author = author;
    }

    info() {
        console.log(`${this.title} — ${this.author}`);
    }
}