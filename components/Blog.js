class Blog extends HTMLElement {
    constructor() {
        super()

        this.posts = [
            {
                id: "servobin",
                title: "Electrical Trash Bin",
                date: "09/11/2025",
                category: ["Electronics", "Arduino", "Servo"],
                description: "A relatively smart Trash Bin",
                content: "ServoBin",
            },
            {
                id: "fractals",
                title: "Generative Recursion",
                date: "04/08/2025",
                category: ["Racket", "Functional Programming"],
                description:
                "Patterns I generated while trying to implement the Sierpinski Carpet.",
                content: "Fractals",
            },
            {
                id: "PerlinNoise",
                title: "Perlin Noise",
                date: "19/11/2024",
                category: ["Terrain Generation", "Three.js", "3D"],    
                description: "Terrain generaction algorithm implementation",
                content: "Perlin Noise"
            },
        ]
    
        this.innerHTML = `
        <div class="blogs">
            ${this.posts.map((post) => `
                <a href="./blog/${post.id}.html">
                    <div data-id=${post.id} class="blog-card">
                        <div class="post-metadata">
                            <h3 class="post-title">${post.title}</h3>
                            <p class="post-date">${post.date}</p>
                        </div>

                        <p class="post-description"><span class="caret-deco">> </span>${post.description}</p>

                        <div class="categories">
                            ${post.category.map((c, i) => `
                            <p key=${i} class="category">
                                ${c}
                            </p>
                            `).join('')}
                        </div>
                    </div>
                </a>
            `).join('')}
        </div>
        `
    }
}

customElements.define("blog-page", Blog)