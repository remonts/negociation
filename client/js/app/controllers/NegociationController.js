class NegociationController {

    constructor() {
        let $ = document.querySelector.bind(document);
        this._inputValue = $('#value');
        this._inputDate = $('#date');
        this._inputAmount = $('#amount');
    }

    toAdd(event) {
        event.preventDefault();
        
        let data = new Date(
            ...this._inputDate.value
                    .split('-')
                    .map((item, indice) => item - indice % 2)
        );

        let negociacao = new Negociation(
            data,
            this._inputAmount.value,
            this._inputValue.value
        );
        console.log(negociacao);
    }
}