class ListNegociations {

    constructor(){
        this._negociations = [];
    }

    toAdd(negociation) {
        this._negociations.push(negociation);
    }

    get negociations() {
        return [].concat(this._negociations);
    }
}