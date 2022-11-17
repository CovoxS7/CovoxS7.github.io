import meine_einkaufsliste from "../meine-einkaufsliste.js";

export default class Eingabeformular {

    constructor() {
        this._html = this._html_generieren();
    }

    _formulardaten_holen(eventdaten) {
        return {
            artikel: eventdaten.target.elements.artikel.value,
            menge: eventdaten.target.elements.menge.value,
            typ: eventdaten.target.elements.typ.value
        }
    }

    _hinzufuegen_event(eingabeformular_container) {
        eingabeformular_container.querySelector("#eingabeformular").addEventListener("submit", e => {
            e.preventDefault();
            let formulardaten = this._formulardaten_holen(e)
            meine_einkaufsliste.eintrag_hinzufuegen(formulardaten);
            e.target.reset();
        })
    }

    _html_generieren() {
        let eingabeformular_container = document.createElement("div");
        eingabeformular_container.setAttribute("id", "eingabeformular-container");

        let zurueck_zur_einkaufsliste = document.createElement("button");
        zurueck_zur_einkaufsliste.setAttribute("class", "btn-1");
        zurueck_zur_einkaufsliste.setAttribute("id", "zurück-zur-einkausliste");
        zurueck_zur_einkaufsliste.textContent = `< zurück`;
        eingabeformular_container.insertAdjacentElement("afterbegin", zurueck_zur_einkaufsliste);

        zurueck_zur_einkaufsliste.addEventListener("click", () => {
            meine_einkaufsliste.anzeigen()
        });

        let eingabeformular = document.createElement("form");
        eingabeformular.setAttribute("id", "eingabeformular");
        eingabeformular.setAttribute("action", "#");
        eingabeformular.setAttribute("method", "get");
        eingabeformular_container.insertAdjacentElement("beforeend", eingabeformular);

        let artikel_eingabe_label = document.createElement("label");
        artikel_eingabe_label.setAttribute("for", "artikel");
        artikel_eingabe_label.setAttribute("class", "screenreader");
        artikel_eingabe_label.textContent = `Artikel`;
        eingabeformular_container.insertAdjacentElement("beforeend", artikel_eingabe_label);

        let artikel_eingabe_input = document.createElement("input");
        artikel_eingabe_input.setAttribute("type", "text");
        artikel_eingabe_input.setAttribute("class", "eingabeformular-felder");
        artikel_eingabe_input.setAttribute("id", "artikel");
        artikel_eingabe_input.setAttribute("name", "artikel");
        artikel_eingabe_input.setAttribute("form", "eingabeformular");
        artikel_eingabe_input.setAttribute("placeholder", "Artikel: z.b. Brot");
        artikel_eingabe_input.setAttribute("title", "Artikel des Eintrags");
        eingabeformular_container.insertAdjacentElement("beforeend", artikel_eingabe_input);

        let menge_eingabe_label = document.createElement("label");
        menge_eingabe_label.setAttribute("for", "menge");
        menge_eingabe_label.setAttribute("class", "screenreader");
        menge_eingabe_label.textContent = `Menge`;
        eingabeformular_container.insertAdjacentElement("beforeend", menge_eingabe_label);

        let menge_eingabe_input = document.createElement("input");
        menge_eingabe_input.setAttribute("type", "text");
        menge_eingabe_input.setAttribute("class", "eingabeformular-felder");
        menge_eingabe_input.setAttribute("id", "menge");
        menge_eingabe_input.setAttribute("name", "menge");
        menge_eingabe_input.setAttribute("form", "eingabeformular");
        menge_eingabe_input.setAttribute("placeholder", "Menge: z.b. 2");
        menge_eingabe_input.setAttribute("title", "Menge des Eintrags");
        eingabeformular_container.insertAdjacentElement("beforeend", menge_eingabe_input);

        let div_radio_zeile_1 = document.createElement("div");
        div_radio_zeile_1.setAttribute("class", "typ-auswahl");

        let stk_eingabe_input = document.createElement("input");
        stk_eingabe_input.setAttribute("type", "radio");
        stk_eingabe_input.setAttribute("id", "stk");
        stk_eingabe_input.setAttribute("name", "typ");
        stk_eingabe_input.setAttribute("form", "eingabeformular");
        stk_eingabe_input.setAttribute("value", "Stk");
        stk_eingabe_input.checked = true;
        div_radio_zeile_1.insertAdjacentElement("afterbegin", stk_eingabe_input);

        let stk_eingabe_label = document.createElement("label");
        stk_eingabe_label.setAttribute("for", "stk");
        stk_eingabe_label.setAttribute("class", "eingabeformular-felder");
        stk_eingabe_label.textContent = `Stück`;
        div_radio_zeile_1.insertAdjacentElement("beforeend", stk_eingabe_label);
        eingabeformular_container.insertAdjacentElement("beforeend", div_radio_zeile_1);

        let div_radio_zeile_2 = document.createElement("div");
        div_radio_zeile_2.setAttribute("class", "typ-auswahl");

        let kg_eingabe_input = document.createElement("input");
        kg_eingabe_input.setAttribute("type", "radio");
        kg_eingabe_input.setAttribute("id", "kg");
        kg_eingabe_input.setAttribute("name", "typ");
        kg_eingabe_input.setAttribute("form", "eingabeformular");
        kg_eingabe_input.setAttribute("value", "Kg");
        div_radio_zeile_2.insertAdjacentElement("afterbegin", kg_eingabe_input);

        let kg_eingabe_label = document.createElement("label");
        kg_eingabe_label.setAttribute("for", "kg");
        kg_eingabe_label.setAttribute("class", "eingabeformular-felder");
        kg_eingabe_label.textContent = `Kg`;
        div_radio_zeile_2.insertAdjacentElement("beforeend", kg_eingabe_label);
        eingabeformular_container.insertAdjacentElement("beforeend", div_radio_zeile_2);

        let g_eingabe_input = document.createElement("input");
        g_eingabe_input.setAttribute("type", "radio");
        g_eingabe_input.setAttribute("id", "g");
        g_eingabe_input.setAttribute("name", "typ");
        g_eingabe_input.setAttribute("form", "eingabeformular");
        g_eingabe_input.setAttribute("value", "g");
        div_radio_zeile_2.insertAdjacentElement("beforeend", g_eingabe_input);

        let g_eingabe_label = document.createElement("label");
        g_eingabe_label.setAttribute("for", "g");
        g_eingabe_label.setAttribute("class", "eingabeformular-felder");
        g_eingabe_label.textContent = `g`;
        div_radio_zeile_2.insertAdjacentElement("beforeend", g_eingabe_label);
        eingabeformular_container.insertAdjacentElement("beforeend", div_radio_zeile_2);

        let div_radio_zeile_3 = document.createElement("div");
        div_radio_zeile_3.setAttribute("class", "typ-auswahl");

        let l_eingabe_input = document.createElement("input");
        l_eingabe_input.setAttribute("type", "radio");
        l_eingabe_input.setAttribute("id", "l");
        l_eingabe_input.setAttribute("name", "typ");
        l_eingabe_input.setAttribute("form", "eingabeformular");
        l_eingabe_input.setAttribute("value", "L");
        div_radio_zeile_3.insertAdjacentElement("afterbegin", l_eingabe_input);

        let l_eingabe_label = document.createElement("label");
        l_eingabe_label.setAttribute("for", "l");
        l_eingabe_label.setAttribute("class", "eingabeformular-felder");
        l_eingabe_label.textContent = `L`;
        div_radio_zeile_3.insertAdjacentElement("beforeend", l_eingabe_label);
        eingabeformular_container.insertAdjacentElement("beforeend", div_radio_zeile_3);

        let ml_eingabe_input = document.createElement("input");
        ml_eingabe_input.setAttribute("type", "radio");
        ml_eingabe_input.setAttribute("id", "ml");
        ml_eingabe_input.setAttribute("name", "typ");
        ml_eingabe_input.setAttribute("form", "eingabeformular");
        ml_eingabe_input.setAttribute("value", "ml");
        div_radio_zeile_3.insertAdjacentElement("beforeend", ml_eingabe_input);

        let ml_eingabe_label = document.createElement("label");
        ml_eingabe_label.setAttribute("for", "ml");
        ml_eingabe_label.setAttribute("class", "eingabeformular-felder");
        ml_eingabe_label.textContent = `ml`;
        div_radio_zeile_3.insertAdjacentElement("beforeend", ml_eingabe_label);
        eingabeformular_container.insertAdjacentElement("beforeend", div_radio_zeile_3);

        let hinzufuegen_btn = document.createElement("button");
        hinzufuegen_btn.setAttribute("class", "btn-1");
        hinzufuegen_btn.setAttribute("type", "submit");
        hinzufuegen_btn.setAttribute("form", "eingabeformular");
        hinzufuegen_btn.textContent = `Hinzufügen`;
        eingabeformular_container.insertAdjacentElement("beforeend", hinzufuegen_btn);

        this._hinzufuegen_event(eingabeformular_container);

        return eingabeformular_container;
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
}