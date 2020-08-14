import React from 'react';
import ToDoModel from '../model/ToDoModel';


class ToDoPage extends React.Component {

    constructor(props) {
        super(props);

        this.state= {
            toDoArr: [], // array of Do things objects
            displayStatusCode: 0 // 0=all, 1=Active only, 2=Not Active Only
        }

        this.addToDo = this.addToDo.bind(this);
    }

    addToDo() {

        const toDoDesc = "hello";
        const status = 1;

        this.setState({
            toDoArr: this.state.toDoArr.concat(new ToDoModel(toDoDesc, status))

        })
    }

render() {
    this.addToDo();
    // console.log(this.toDoArr[0]);
    return (
        <div>

            {/* {toDoArr} */}
        </div>

    )
}


}


export default ToDoPage;