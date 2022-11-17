import Eingabeformular from "./Eingabeformular.js";
import Eintrag from "./Eintrag.js";

export default class Einkaufsliste {
  constructor() {
    this._eintraege = [];
    this._gekauft = [];
    this._wiederherstellen();
    this._html = this._html_generieren();
  }

  eintrag_hinzufuegen(formulardaten) {
    let neuer_eintrag = new Eintrag(
      formulardaten.artikel,
      formulardaten.menge,
      formulardaten.typ
    );
    this._eintraege.push(neuer_eintrag);
    this._html = this._html_generieren();
    this._speichern();
    this.anzeigen();
  }

  eintrag_gekauft(timestamp) {
    let start_index = null;
    for (let i = 0; i < this._gekauft.length; i++) {
      if (this._gekauft[i] === parseInt(timestamp)) {
        start_index = i;
      }
    }
    if (start_index !== null) {
      this._gekauft.splice(start_index, 1);
    } else {
      this._gekauft.push(timestamp);
    }
  }

  _eintrag_entfernen() {
    this._gekauft.forEach((e) => {
      let start_index;
      for (let i = 0; i < this._eintraege.length; i++) {
        if (this._eintraege[i].timestamp() === parseInt(e)) {
          start_index = i;
        }
      }
      this._eintraege.splice(start_index, 1);
    });
    this._gekauft = [];
    this._speichern();
    this._html = this._html_generieren();
    this.anzeigen();
  }

  _html_generieren() {
    let einkaufslisten_container = document.createElement("div");
    einkaufslisten_container.setAttribute("id", "einkaufslisten-container");

    let artikel_hinzufuegen = document.createElement("button");
    artikel_hinzufuegen.setAttribute("class", "btn-1");
    artikel_hinzufuegen.setAttribute("id", "artikel-hinzufuegen");
    artikel_hinzufuegen.textContent = "+ Artikel hinzufügen";
    einkaufslisten_container.insertAdjacentElement(
      "afterbegin",
      artikel_hinzufuegen
    );

    let einkaufsliste = document.createElement("ul");
    this._eintraege.forEach((eintrag) => {
      einkaufsliste.insertAdjacentElement("beforeend", eintrag.html());
    });
    einkaufslisten_container.insertAdjacentElement("beforeend", einkaufsliste);

    let artikel_entfernen = document.createElement("button");
    artikel_entfernen.setAttribute("class", "btn-1");
    artikel_entfernen.setAttribute("id", "artikel-entfernen");
    artikel_entfernen.textContent = `- Artikel entfernen`;
    einkaufslisten_container.insertAdjacentElement(
      "beforeend",
      artikel_entfernen
    );

    artikel_hinzufuegen.addEventListener("click", () => {
      new Eingabeformular().anzeigen();
    });

    artikel_entfernen.addEventListener("click", () => {
      this._eintrag_entfernen();
    });

    return einkaufslisten_container;
  }

  _entfernen() {
    let container = document.querySelector("main>*");
    if (container !== null) {
      container.remove();
    }
  }

  anzeigen() {
    let main = document.querySelector("main");
    if (main !== null) {
      this._entfernen();
      main.insertAdjacentElement("afterbegin", this._html);
    }
  }

  _speichern() {
    localStorage.setItem("eintraege", JSON.stringify(this._eintraege));
  }

  _wiederherstellen() {
    let gespeicherte_eintraege = localStorage.getItem("eintraege");
    if (gespeicherte_eintraege !== null) {
      JSON.parse(gespeicherte_eintraege).forEach((eintrag) => {
        this.eintrag_hinzufuegen({
          artikel: eintrag._artikel,
          menge: eintrag._menge,
          typ: eintrag._typ,
        });
      });
    }
  }

  start() {
    this.anzeigen();
  }
}
