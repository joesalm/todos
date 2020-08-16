class ToDoModel {
    constructor(toDoDesc, status) {
        this.toDoDesc = toDoDesc; // texts that describe what to do.
        this.status = status; // status: number. legend: 1=active, 2=not active.
    }
}


export default ToDoModel;