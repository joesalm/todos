import React from 'react';
// import ToDoModel from '../model/ToDoModel';
// import InputBox from './InputBox';
import { Container, Row, Col } from 'react-bootstrap';
import './ToDoLine.css';


class ToDoLine extends React.Component {

    constructor(props) {
        super(props);

        // this.state= {
        //     toDoArr: [], // array of Do things objects
        //     isDone: 1, // isDone code of toDo array (1=not Done, 2=Done) 
        //     displayStatusCode: 0 // 0=all, 1=Active only, 2=Not Active Only
        // }

        // this.addToDo = this.addToDo.bind(this);
        // this.inBoxTextChange = this.inBoxTextChange.bind(this);

        this.handleChangeIsDoneCheckbox = this.handleChangeIsDoneCheckbox.bind(this);
    }


    handleChangeIsDoneCheckbox(event) {
        this.setState({
            isDone: ((event.target.value.isChecked) ? 2 : 1)
        
        });
        // this.props.resultIsDone((event.target.value.isChecked) ? 2 : 1);
        this.props.resultIsDone(this.isDone);
    }


    render() {
        
        const {toDoLine, resultIsDone} = this.props;
        const isChecked = toDoLine.isDone===2 ? "Checked": "";
        return (
            <div className="p-thingToDoSingleLine">
                {/* <Container>
                    <Row> */}
                        <input type="checkbox" defaultChecked={isChecked} 
                            onChange={this.handleChangeIsDoneCheckbox} 
                        />
                        {this.props.toDoLine.toDoDesc} 
                    {/* </Row>
                </Container> */}
            </div>

        )
    }


}


export default ToDoLine;