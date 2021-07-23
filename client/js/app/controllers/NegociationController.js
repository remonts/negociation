class NegociationController {

    constructor() {
        let $ = document.querySelector.bind(document);
        this._inputValue = $('#value');
        this._inputDate = $('#date');
        this._inputAmount = $('#amount');
        this._listNegociations = new ListNegociations();
        this._negociationsView = new NegociationsView($('#negociations-view'));
        this._negociationsView.update(this._listNegociations);
    }

    toAdd(event) {
        event.preventDefault();

        let negociation = this._createNegociation();
        this._listNegociations.toAdd(negociation);
        this._negociationsView.update(this._listNegociations);
        this._clearForm();
    }

    _createNegociation() {

        let date = DateHelper.textToDate(this._inputDate.value);
        return new Negociation(
            date,
            this._inputAmount.value,
            this._inputValue.value
        );
    }

    _clearForm() {
        this._inputDate.value = '';
        this._inputAmount.value = 1;
        this._inputValue.value = 0.0;
        this._inputDate.focus();
    }
}