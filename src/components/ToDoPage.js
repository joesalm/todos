import React from 'react';
import ToDoModel from '../model/ToDoModel';
import InputBox from './InputBox';
import { Container, Row, Col } from 'react-bootstrap';
import './ToDoPage.css';
import ToDoLine from './ToDoLine';


class ToDoPage extends React.Component {

    constructor(props) {
        super(props);

        this.state= {
            toDoArr: [], // array of Do things objects
            status: 1, // status code of toDo array (1=active, 2=not active) 
            displayStatusCode: 0 // 0=all, 1=Active only, 2=Not Active Only
        }

        this.addToDo = this.addToDo.bind(this);
        this.inBoxTextChange = this.inBoxTextChange.bind(this);
        this.addToDo = this.addToDo.bind(this);
    }

inBoxTextChange(inputText) {
    console.log(inputText);
    // if (inputText.charcode===13) alert ("Enter Pressed !");
}

    addToDo() {
debugger;
        const toDoDesc = "hellO";
        // const toDoDesc = this.inputText;
        // const toDoDesc = this.state.inputText;
        // const toDoDesc = this.props.toDoLine.toDoDesc;
        // const toDoDesc = this.props.toDoLine.toDoLine ; 
        const status = 1;
        alert (this.inputText);

        this.setState({
            toDoArr: this.state.toDoArr.concat(new ToDoModel(toDoDesc, status))

        })
    }

render() {
    // this.addToDo();

    const {toDoArr} = this.state

    // const resultStrings = toDoArr.map(toDo => toDoArr.toDoDesc);
    const linesToDo = toDoArr.map(toDoLine => 
        <Col lg={3} md={4} sm={6}>
            <ToDoLine toDoLine={toDoLine}/>
        </Col>)        
        
        // toDoArr.toDoDesc)
    return (
        <div className="p-thingToDo">
                <Container>
                    Todos
                    <InputBox placeholderText="fill in something to do" 
                        inputTextChanged={this.inBoxTextChange} resultSelected={this.addToDo}/>
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