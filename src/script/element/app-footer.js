class CelementFooterApp extends HTMLElement {
    connectedCallback(){
        this.render();
    }
    render(){
        this.innerHTML = `
        <figure>
        <p>@rizkyemha</p>
        </figure>
        `
    }
};

customElements.define('app-footer', CelementFooterApp);