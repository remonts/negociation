class MessageView {

    constructor(element) {
        this._element = element;
    }

    _template(model) {
        return `<p class="alert alert-info">${model.text}</p>`;
    }

    _update(model) {
        this._element.innerHTML = this._template(model);
    }
}