class Buttons extends HTMLElement {
    constructor() {
        super()
        this.innerHTML = `<div class="win-btn" className="flex space-x-2 mr-3">
                <div class="other-win-btn">-</div>
                <div class="other-win-btn">□</div>
                <div class="close-win-btn">x</div>
            </div>
            `
    }
}

customElements.define("win-btn", Buttons)