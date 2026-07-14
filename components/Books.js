class Books extends HTMLElement {
    constructor() {
        super()

        this.books =[
            { id: 0, cover: "vies.jpg", title: "Incognito", author: "David Eagleman" },
            { id: 1, cover: "evolution.jpg", title: "Why Evolution is True", author: "Jerry A. Coyne" }
        ]
    
        this.innerHTML = `
        <div class="books-grid">
            ${this.books.map((book) => `
                <div data-id=${book.id} class="book">
                    <p class="book-title">${book.title}</p>
                    <img class="book-cover" src="media/books/${book.cover}" >
                    <p class="book-author">- ${book.author} -</p>
                </div>
            `).join('')}
        </div>
        `
    }
}

customElements.define("book-lib", Books)