export default class Todo {
    constructor (title, body, isDone, dueDate) {
        this.id = new Date().getMilliseconds()
        this.dateCreated = new Date()
        this.title = title || '';
        this.body = body || '';
        this.dueDate = dueDate || new Date();
        this.isDone = isDone || false
    }
}