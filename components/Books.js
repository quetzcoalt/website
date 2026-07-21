class Books extends HTMLElement {
    constructor() {
        super()

        this.books =[
            { id: 0, cover: "pi.jpg", title: "Learning Computer Architecture with Raspberry Pi", author: "Eben Upton, Jeff Duntemann" },
            { id: 1, cover: "marcopolo.jpg", title: "La Malédiction de Marco Polo", author: "James Rollins" }
        ]
    
        this.innerHTML = `
        <div class="books-grid">
            ${this.books.map((book) => `
                <div data-id=${book.id} class="book">
                    <p class="book-title">${book.title}</p>
                    <img class="book-cover" src="../media/books/${book.cover}" >
                    <p class="book-author">- ${book.author} -</p>
                </div>
            `).join('')}
        </div>
        `
    }
}

customElements.define("book-lib", Books)