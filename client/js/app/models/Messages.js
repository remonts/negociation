class Messages {

    constructor(text = '') {
        this._text;
    }

    get text() {
        return this._text;
    }

    set text(text) {
        this._text = text;
    }
}