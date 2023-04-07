class CelementContentApp extends HTMLElement {
    connectedCallback(){
        this.render()
    }

    render(){
        this.innerHTML = `
        <figure class="container-app-content">
            <app-generate>
                <h1>Pickmee[!]</h1>
                <p>Gacha Waifu for Free</p>
                <input type="submit" value="generate" class="generateButton"></input>
            </app-generate>
        </figure>
        `
    }
}

customElements.define('app-content', CelementContentApp);