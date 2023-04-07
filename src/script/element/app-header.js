class CelementHeaderApp extends HTMLElement {
    connectedCallback(){
        this.render();
    }
    render(){
        this.innerHTML = `
        <figure>
        <h1>Gacha Machine</h1>
        </figure>
        `
    }
};

customElements.define('app-header', CelementHeaderApp);