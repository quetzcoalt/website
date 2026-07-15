class NavBar extends HTMLElement {
    constructor() {
        super();
    }

    connectedCallback() {
        const basePath = this.getAttribute('base-path') || '.';

        this.innerHTML = `
            <nav class="navigation">
                <!-- Logo -->
                <div class="nav-logo">
                    <a class="logo-link" href="index.html">
                        <img class="sun-image" src='${basePath}/media/sun.png' />
                    </a>
                </div>

                <!-- Image (desktop only) -->
                <img class="nav-image" src="${basePath}/media/ascii.png" alt="galaxy" />

                <!-- Desktop Navigation -->
                <div class="sitemap-card">
                    <div class="sitemap-header">
                        <span class="sitemap-title">
                            <img src="${basePath}/media/gifs/hobbies.png" alt="hobbies" />
                            <span class="sitemap-filename">sitemap.txt</span>
                        </span>
                        <div class="win-btn" className="flex space-x-2 mr-3">
                            <div>-</div>
                            <div>□</div>
                            <div>x</div>
                        </div>
                    </div>

                    <div class="nav-list">
                        <ul class="desktop-nav-list">
                            <li>
                                <img class="folder-img" src='${basePath}/media/icons/folder.gif' />
                                <a class="nav-element" href="index.html">/about_me;</a>
                            </li>
                            <li>
                                <img class="folder-img" src='${basePath}/media/icons/folder.gif' />
                                <a class="nav-element" href="${basePath}/pages/codebase.html">/codebase;</a>
                            </li>
                            <li>
                                <img class="folder-img" src='${basePath}/media/icons/folder.gif' />
                                <a class="nav-element" href="${basePath}/pages/blog.html">/blog;</a>
                            </li>
                            <li>
                                <img class="folder-img" src='${basePath}/media/icons/folder.gif' />
                                <a class="nav-element" href="${basePath}/pages/now.html">/now;</a>
                            </li>
                            <li>
                                <img class="folder-img" src='${basePath}/media/icons/folder.gif' />
                                <a class="nav-element" href="${basePath}/pages/gallery.html">/gallery;</a>
                            </li>
                        </ul>
                    </div>
                </div>

                <img class="cat-img" src='${basePath}/media/characters/laptop-cat.gif' />

                <!-- Mobile Menu -->
                <div class="mobile-menu">
                    <div class="mobile-menu-wrap">
                        <div class="mobile-menu-btn">
                            <img class="cat-img" src='${basePath}/media/icons/menu.gif' />
                        </div>
                    </div>

                    <!-- Overlay -->
                    <div class="background-overlay opacity-0"></div>

                    <!-- Sliding Navbar -->
                    <div class="sliding-navbar translate-x-full">
                        <div class="close-wrap">
                            <div class="close-btn">
                                <img class="cat-img" src='${basePath}/media/icons/menu.gif' />
                            </div>
                        </div>

                        <ul class="nav-list-small">
                            <li><a class="nav-element-small" href="index.html">about_me;</a></li>
                            <li><a class="nav-element-small" href="${basePath}/pages/codebase.html">codebase;</a></li>
                            <li><a class="nav-element-small" href="${basePath}/pages/blog.html">blog;</a></li>
                            <li><a class="nav-element-small" href="${basePath}/pages/now.html">now;</a></li>
                            <li><a class="nav-element-small" href="wikipedia.com">my_notes;</a></li>
                            <li><a class="nav-element-small" href="${basePath}/pages/gallery.html">gallery;</a></li>
                        </ul>
                    </div>
                </div>
            </nav>
        `
        
        const menuBtn = this.querySelector(".mobile-menu-btn");
        const closeBtn = this.querySelector(".close-btn");
        const overlay = this.querySelector(".background-overlay");
        const slidingNavbar = this.querySelector(".sliding-navbar");
        
        const navElements = this.querySelectorAll(".nav-element")
        const navElementsSmall = this.querySelectorAll(".nav-element-small");

        let toggle = false;

        const currentPath = window.location.pathname;

        const updateUI = () => {
            overlay.classList.toggle("opacity-100", toggle);
            overlay.classList.toggle("opacity-0", !toggle);
            overlay.classList.toggle("pointer-events-none", !toggle);

            slidingNavbar.classList.toggle("translate-x-0", toggle);
            slidingNavbar.classList.toggle("translate-x-full", !toggle);
        }

        menuBtn.addEventListener("click", () => {
            toggle = true;
            updateUI();
        });

        closeBtn.addEventListener("click", () => {
            toggle = false;
            updateUI();
        });

        overlay.addEventListener("click", () => {
            toggle = false;
            updateUI();
        });

        const setActiveLink = (elements) => {
            elements.forEach(link => {
                try {
                    const linkPath = new URL(link.href).pathname;

                    if (linkPath === currentPath) {
                        link.classList.add("nav-element-clicked");
                    } else {
                        link.classList.remove("nav-element-clicked");
                    }
                } catch (e) {

                }
            });
        }

        setActiveLink(navElements);
        setActiveLink(navElementsSmall);
    }
}

customElements.define("nav-bar", NavBar)