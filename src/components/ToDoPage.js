import React from 'react';
import ToDoModel from '../model/ToDoModel';
import InputBox from './InputBox';
import { Container, Row, Col } from 'react-bootstrap';
import './ToDoPage.css';
import ToDoLine from './ToDoLine';


class ToDoPage extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            toDoArr: [], // array of Do things objects
            isDone: 1, // isDone code of toDo array (1=Not done, 2=Done) 
            displayStatusCode: 0 // 0=all, 1=Active only, 2=Not Active Only
        }

        this.addToDo = this.addToDo.bind(this);
        this.inBoxTextChange = this.inBoxTextChange.bind(this);
        this.addToDo = this.addToDo.bind(this);
    }

    inBoxTextChange(inputText) {
        // console.log(inputText);
        // if (inputText.charcode===13) alert ("Enter Pressed !");
    }

    addToDo(text) {
        // console.log(text);

        const isDone = 1; // by dedault the status is not done..
        // alert (this.inputText);

        this.setState({
            toDoArr: this.state.toDoArr.concat(new ToDoModel(text, isDone))

        })
        // console.log(this.state.toDoArr);
    }

    render() {
        const { toDoArr } = this.state

        // const resultStrings = toDoArr.map(toDo => toDoArr.toDoDesc);
        const linesToDo = toDoArr.map(toDoLine =>
            <Col lg={3} md={4} sm={6}>
                <ToDoLine toDoLine={toDoLine} />
            </Col>)

        // toDoArr.toDoDesc)
        return (
            <div className="p-thingToDo">
                <Container>
                    <div className="input_box_sec" >
                        Todos
                        <InputBox placeholderText="fill in something to do"
                            inputTextChanged={this.inBoxTextChange} resultSelected={this.addToDo} />
                    </div>
                    <Row>
                        {linesToDo}
                    </Row>
                </Container>

                {/* {toDoArr} */}
            </div>

        )
    }


}


export default ToDoPage;