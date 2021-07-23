class View {

    constructor(element) {
        this.element = element;
    }

    _template(model) {}

    _update(model) {
        this._element.innerHTML = this._template(model);
    }
}