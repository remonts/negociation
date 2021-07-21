class NegociationController {

    constructor() {
        let $ = document.querySelector.bind(document);
        this._inputValue = $('#value');
        this._inputDate = $('#date');
        this._inputAmount = $('#amount');
    }

    toAdd(event) {
        event.preventDefault();

        console.log(this._inputDate.value);
        console.log(this._inputAmount.value);
        console.log(this._inputValue.value);
    }
}