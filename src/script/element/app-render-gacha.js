class CelementRenderApp extends HTMLElement {
    set imgUrl({id, name, anime, grade, picture}){

        if (id && name && anime && grade && picture) {
            this._src = {id, name, anime, grade, picture};
            this.render();
        } else {
            alert("Data object is not complete. Required keys: id, name, anime, grade, picture")
        }
    };

    render(){
        this.innerHTML = `
                <container-waifu-item id="${this._src.id}">
                    <img src="${this._src.picture}">
                    <waifu-info>
                        <h1>${this._src.id}</h1>
                        <label>Name :</label>
                        <input type="text" value="${this._src.name}"></input>
                        <label>Anime :</label>
                        <input type="text" value="${this._src.anime}"></input>
                        <label>Grade :</label>
                        <input type="text" value="${this._src.grade}"></input>
                    </waifu-info>
                </container-waifu-item>
        `
    };

    connectedCallback(){
        this.render()
    };

};

customElements.define('app-render-gacha', CelementRenderApp);