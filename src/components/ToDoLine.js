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
        //     status: 1, // status code of toDo array (1=active, 2=not active) 
        //     displayStatusCode: 0 // 0=all, 1=Active only, 2=Not Active Only
        // }

        // this.addToDo = this.addToDo.bind(this);
        // this.inBoxTextChange = this.inBoxTextChange.bind(this);
    }


render() {
    return (
        <div className="p-thingToDoSingleLine">
                <Container>
                    <Row>
                        {this.props.toDoLine.toDoDesc}
                    </Row>
                </Container>
        </div>

    )
}


}


export default ToDoLine;