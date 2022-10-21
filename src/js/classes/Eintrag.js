import meine_einkaufsliste from "../meine-einkaufsliste.js";

export default class Eintrag {

    constructor(artikel, menge, typ) {

        this._artikel = artikel,
        this._menge = menge,
        this._typ = typ,
        this._timestamp = Date.now(),
        this._html = this._html_generieren()
    }

    _html_generieren() {
        let listenpunkt = document.createElement("li");
        listenpunkt.setAttribute("id", this._timestamp);

        let menge = document.createElement("span");
        menge.setAttribute("class", "menge");
        menge.textContent = `${this._menge}${this._typ}`;
        listenpunkt.insertAdjacentElement("afterbegin", menge);

        let artikel = document.createElement("span");
        artikel.setAttribute("class", "artikel");
        artikel.textContent = `${this._artikel}`;
        listenpunkt.insertAdjacentElement("beforeend", artikel);

        artikel.addEventListener("click", e => {
            if (e.target.className !== "artikel gekauft") {
                artikel.setAttribute("class", "artikel gekauft");
                meine_einkaufsliste.eintrag_gekauft(this._timestamp);
            } else {
                artikel.setAttribute("class", "artikel");
                meine_einkaufsliste.eintrag_gekauft(this._timestamp);
            }
        });

        return listenpunkt;
    }

    timestamp() {
        return this._timestamp;
    }

    html() {
        return this._html;
    }
    
}