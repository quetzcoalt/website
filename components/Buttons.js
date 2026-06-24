class Buttons extends HTMLElement {
    constructor() {
        super()
        this.innerHTML = `<div class="win-btn" className="flex space-x-2 mr-3">
                <div>-</div>
                <div>□</div>
                <div>x</div>
            </div>
            `
    }
}

customElements.define("win-btn", Buttons)