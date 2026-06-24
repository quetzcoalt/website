class BlogPost extends HTMLElement {
    constructor() {
        super()

        this.blogs = [
            {
                id: "ServoBin",
                title: "Electrical Trash Bin",
                date: "09/11/2025",
                category: ["Electronics", "Arduino", "Servo"],
            },
            {
                id: "GenerativeRecursion",
                title: "Generative Recursion",
                date: "04/08/2025",
                category: ["Racket", "Functional Programming"],    
            },
            {
                id: "PerlinNoise",
                title: "Perlin Noise",
                date: "19/11/2024",
                category: ["Terrain Generation", "Three.js", "3D"],    
            },
        ]
    }
}

customElements.define("blog-post", BlogPost)