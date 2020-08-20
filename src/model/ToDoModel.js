class ToDoModel {
    constructor(toDoDesc, isDone) {
        this.toDoDesc = toDoDesc; // texts that describe what to do.
        this.isDone = isDone; // isDone: number. legend: 1=not Done, 2=Done.
                              // i could put bolean but if case in the future is might be
                              // possible to add another status... therefore ...
    }
}


export default ToDoModel;