export default class Todo {
    constructor (title, body, isDone, dueDate) {
        this._dateCreated = new Date()
        this._title = title || '';
        this._body = body || '';
        this._dueDate = dueDate || new Date();
        this._isDone = isDone || false
    }


    get title() {
        return this._title;
    }

    set title(value) {
        this._title = value;
    }

    get body() {
        return this._body;
    }

    set body(value) {
        this._body = value;
    }

    get dueDate() {
        return this._dueDate;
    }

    set dueDate(value) {
        this._dueDate = value;
    }

    get dateCreated() {
        return this._dateCreated;
    }

    set dateCreated(value) {
        this._dateCreated = value;
    }

    get isDone() {
        return this._isDone;
    }

    set isDone(value) {
        this._isDone = value;
    }
}