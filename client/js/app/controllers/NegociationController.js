class NegociationController {

    constructor() {
        let $ = document.querySelector.bind(document);
        this._inputValue = $('#value');
        this._inputDate = $('#date');
        this._inputAmount = $('#amount');
    }

    toAdd(event) {
        event.preventDefault();

        let date = DateHelper.textToDate(this._inputDate.value);

        let negociation = new Negociation(
            date,
            this._inputAmount.value,
            this._inputValue.value
        );

        console.log(negociation);
        console.log(DateHelper.dateToText(negociation.date));
    }
}