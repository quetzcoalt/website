export const projects = [
  {
    id: "parsenator",
    name: "parsenator",
    description:
      "Trying to implement a basic parser combinator for strings, that I wanted to use for my lisp interpreter project, because I like doing everything from scratch",
    github: "https://github.com/0xbmoth/parsenator",
    features: [
      "Specific matchers that match a specific output",
      "General matches that succeed any valid input.",
      'Logical combinators (such as "or" and "and").',
      'Transformation combinators (such as "map" and "seq").',
      "Error handling that contains one parser combinator which is fail (Always fails with a given error message).",
    ],
    technologies: ["Rust"],
  },
  {
    id: "ilisp",
    name: "ilisp",
    description:
      "A lisp interpreter, because why not? it's a Racket-like lisp (since I love Racket).",
    github: "https://github.com/0xbmoth/iLisp",
    features: [
      "Binary, unary, logical and comparison operations",
      "Conditionals.",
      "Function definitions and function calls.",
      "Supports recursion too.",
    ],
    technologies: ["Rust"],
  },
  {
    id: "ilanguage",
    name: "My Toy Imperative Language",
    description:
      "The first language I ever wrote in my life. Planning to write more and improve the ones I already wrote.",
    github: "https://github.com/0xbmoth/Language",
    technologies: ["C#"],
    features: [
      "The grammar is <a href=`https://github.com/0xbmoth/Language/blob/master/Grammar.txt`>here</a>.",
      "It contains a Lexer, and Interpreter and a compiler to the VM I wrote (above project).",
      "Supports function calls definitions and function calls, has an environment for closures.",
      "Global and local variables.",
      "This project took me a lot of time but it was really fun.",
      "I followed Crafting Interpreters' book among other resources.",
    ],
  },
  {
    id: "rshell",
    name: "A Simple Shell",
    description:
      "A REPL POSIX compliant shell in Rust that's capable of interpreting shell commands, running external programs and some builtin commands.",
    github: "https://github.com/0xbmoth/rubik-s",
    features: [
      "Builtins: exit, echo, cat, type, cd, pwd.",
      "Navigation.",
      "Quoting.",
      "Redirection.",
      "Autocompletion.",
    ],
    technologies: ["Rust"],
  },
  {
    id: "expenses",
    name: "Expenses Tracker",
    description:
      "Expense Tracker is a simple and efficient full stack web application that helps you keep track of your spending. With a user-friendly interface, you can easily log your expenses, categorize them, and see a detailed history. The app provides insights into your financial habits and helps you manage your budget effectively.",
    github: "https://github.com/0xbmoth/expensesTracker?tab=readme-ov-file",
    technologies: [
      "HTML 5",
      "Tailwind",
      "TypeScript",
      "React",
      "Chart.js",
      "Node.js",
      "Express.js",
      "MongoDB",
      "JWT",
    ],
    features: [
      "User Authentication.",
      "Expenses Logging: Add new expenses with details such as date, category, description, and amount.",
      "Expenses Categories, History and Summary.",
      "Handy search and filter options",
      "Responsive Design",
    ],
  },
  {
    id: "bf",
    name: "Brainf*ck Interpreter",
    description:
      "A simple Brainfuck interpreter that prompts you to input your Brainfuck code in the console and outputs the result. It supports all standard Brainfuck commands.",
    github: "https://github.com/0xbmoth/brainf-ckpreter",
    features: [
      "Standard Commands: Supports all standard Brainfuck commands, including nested brackets.",
      "Output and Tape: Displays the result and the tape after interpreting the code.",
      "Interactive: Prompts for input and displays results directly in the console.",
    ],
    technologies: ["C#"],
  },
  {
    id: "calculator",
    name: "Mathematical Expression Evaluator",
    description:
      "A TypeScript program that evaluates mathematical expressions in infix notation and returns the result. It supports binary operations (+, -, *, /, ^) and unary operations (!, sin, cos, tan).",
    github: "https://github.com/0xbmoth/calculators",
    features: [
      "Tokenizer: Parses the input expression into individual tokens.",
      "Shunting Yard Algorithm: Converts infix expressions to RPN while handling operator precedence and associativity.",
      "RPN Evaluation with AST: Evaluates RPN expressions by constructing and collapsing an Abstract Syntax Tree.",
      "Stack Calculation: Evaluates RPN expressions using stack-based calculations.",
    ],
    technologies: ["TypeScript"],
  },
  {
    id: "pong",
    name: "Pong Game",
    description:
      "A simple Pong game implemented in TypeScript. The game features two paddles and a ball that bounces around the screen. The objective is to score points by getting the ball past the opponent's paddle.",
    github: "https://github.com/0xbmoth/pongTs",
    features: [
      "Two Paddles: Controls for moving paddles up and down.",
      "Ball Mechanics: The ball bounces off paddles and walls.",
      "Scoring System: Tracks and displays scores for both players.",
      "Basic Controls: Allows players to move paddles using keyboard inputs.",
    ],
    technologies: ["TypeScript", "HTML5", "Canvas"],
    demo: "https://0xbmoth.github.io/pongTs/",
  },
  {
    id: "html-wrapper-plugin",
    name: "HTML Wrapper",
    description:
      "This is an Obsidian plugin that turns your favourite HTML snippets into reusable piece of code without the need to type them each time. It's already submitted, waiting for approval, but it works like magic. I use it on a daily basis!",
    github: "https://github.com/0xbmoth/html-wrapper-plugin",
    features: ["Save your favourite HTML and inline CSS styling."],
    technologies: ["TypeScript", "Obsidian", "Plugin"],
  },
  {
    id: "http_server",
    name: "HTTP Server in Java",
    description:
      "A custom-built HTTP server implemented in Java. This server handles incoming HTTP requests and provides responses based on the request type and URL.",
    github: "https://github.com/0xbmoth/http-server-java",
    features: [
      "File Handling: Supports GET requests to retrieve files and POST requests to save files.",
      "Echo Requests: Returns the request body in response, with optional Gzip compression.",
      "User-Agent Information: Provides the User-Agent string from request headers.",
      "Dynamic Response Generation: Generates HTTP responses based on request path and method.",
      "Error Handling: Responds with appropriate HTTP status codes for various scenarios.",
    ],
    technologies: ["Java", "Java Sockets", "HTTP Protocol"],
  },
  {
    id: "express_app",
    name: "Node.js API",
    description:
      "A TypeScript-based Express application with built-in middleware for security, logging, and compression. It is designed for scalability and ease of integration with various controllers.",
    github: "https://github.com/0xbmoth/node-api",
    features: [
      "Middleware Integration: Uses helmet for security, cors for cross-origin resource sharing, morgan for logging, and compression for response bodies size reduction.",
      "Database Connection: Connects to MongoDB using Mongoose.",
      "Controller-Based Routing: Routes requests through specified controllers.",
      "Error Handling: Centralized error handling through middleware.",
    ],
    technologies: [
      "Express",
      "Mongoose",
      "Compression",
      "CORS",
      "Morgan",
      "Helmet",
    ],
  },
  {
    id: "solar_system",
    name: "Solar System Simulator",
    description:
      "A Three.js-based solar system simulation showcasing the planets and their orbits. ",
    github: "https://github.com/0xbmoth/solarSystem",
    demo: "https://0xbmoth.github.io/solarSystem/",
    features: [
      "Planetary Visualization: Displays planets with textures and accurate scaling.",
      "Interactive Controls: Allows user interaction to explore the solar system with orbit controls.",
      "Real-Time Animation: Planets and orbits animate continuously to simulate movement.",
    ],
    technologies: ["Three.js", "TypeScript", "WebGL"],
  },
  {
    id: "movies_fullstack_website",
    name: "Movies' Website",
    description:
      "A full-stack website to manage movie lists, including 'seen', 'to watch', and 'top 100' movies.",
    github: "https://github.com/0xbmoth/moviesTs",
    features: [
      "Seen List: Track movies you have watched.",
      "Top 100: Explore the top 100 movies according to user ratings.",
      "Watchlist: Save movies you want to watch later.",
      "User Authentication: Ensure personalized lists and secure access.",
    ],
    technologies: [
      "React",
      "TypeScript",
      "HTML",
      "CSS",
      "Bootstrap",
      "Vite",
      "Node.js",
      "Express",
      "MySQL",
      "Sequelize",
      "CORS",
      "Nodemon",
      "JWT",
    ],
  },
  {
    id: "simple_shell",
    name: "Simple Shell",
    description:
      "A basic command-line interface that reads user input and executes commands.",
    github: "https://github.com/0xbmoth/simpleShell",
    features: [
      "Command Execution: Executes user-entered commands and displays their output.",
      "Built-in Commands: Includes basic commands such as 'echo' to display messages or environment variable values, and 'env' to list environment variables and their values.",
    ],
    technologies: ["C"],
  },
  {
    id: "mini_games",
    name: "Mini Games",
    description:
      "A collection of simple games implemented in C using the ncurses library. It includes classic games like Snake and a retro racing game.",
    github: "https://github.com/0xbmoth/miniGames",
    features: [
      "Snake Game: Navigate a growing snake to eat fruit while avoiding collisions with boundaries and itself.",
      "Retro Racer: Control a car and avoid enemy cars in an ASCII art-based racing game.",
    ],
    technologies: ["C", "ncurses"],
  },
  {
    id: "rubiks",
    name: "Rubik's Cube",
    description: "An interactive Three.js Rubik's cube.",
    github: "https://github.com/0xbmoth/rubik-s",
    features: [
      "Dynamic grid of colored cubes.",
      "Support for dragging and rotating cubes.",
      "Interaction through mouse events.",
      "Real-time updates and animations.",
      "Control over rotation direction and angle.",
    ],
    technologies: ["Three.js", "TypeScript", "TWEEN.JS"],
  },
];

/* =========================
   Component
   ========================= */

class CodeCard extends HTMLElement {
  constructor() {
    super();
  }

  connectedCallback() {
    this.render();
  }

  render() {
    const id = this.getAttribute("id") || "";
    const name = this.getAttribute("name") || "";
    const description = this.getAttribute("description") || "";
    const github = this.getAttribute("github") || "";
    const demo = this.getAttribute("demo");

    const features = JSON.parse(this.getAttribute("features") || "[]");
    const technologies = JSON.parse(this.getAttribute("technologies") || "[]");

    this.innerHTML = `
      <div id="${id}" class="card-code">
        <div class="first-section">
          <h2 class="code-name">${name}</h2>
          <div class="demo-source">
            ${
              demo
                ? `<a class="demo" href="${demo}" target="_blank">Live Demo</a>`
                : ""
            }
            <a class="demo" href="${github}" target="_blank">GitHub</a>
          </div>
        </div>

        <div class="second-section">
          <p>${description}</p><br/>

          <p>&gt; Features:</p>
          <ul>
            ${features.map(f => `<li class="enum-list">- ${f}</li>`).join("")}
          </ul>

          <div class="technologies">
            ${technologies.map(t => `<span class="technology">${t}</span>`).join(" ")}
          </div>
        </div>
      </div>
    `;
  }
}

customElements.define("code-card", CodeCard);

/* =========================
   Render projects
   ========================= */

const container =
  document.getElementById("codebase") ||
  document.body.appendChild(document.createElement("div"));

projects.forEach(project => {
  const card = document.createElement("code-card");

  card.setAttribute("id", project.id);
  card.setAttribute("name", project.name);
  card.setAttribute("description", project.description);
  card.setAttribute("github", project.github);
  card.setAttribute("features", JSON.stringify(project.features));
  card.setAttribute("technologies", JSON.stringify(project.technologies));

  if (project.demo) {
    card.setAttribute("demo", project.demo);
  }

  container.appendChild(card);
});