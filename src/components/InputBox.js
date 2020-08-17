import React from 'react';
import { Form } from 'react-bootstrap';
import './InputBox.css';

class InputBox extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            inputText: ""
        }

        this.handleInputChange = this.handleInputChange.bind(this);
        // this.handleClick = this.handleClick.bind(this);        
        // this.handleEnterKeyPressed = this.handleEnterKeyPressed.bind(this);
        // this._handleKeyDown = this._handleKeyDown.bind(this);
    }


    handleInputChange(event) {
        this.setState({
            inputText: event.target.value
        });

        this.props.inputTextChanged(event.target.value);
    }

    // handleClick(index) {
    //     this.props.resultSelected(index)
    //     this.setState({
    //         inputText: ""
    //     })
    // }

    handleEnterKeyPressed(text) {
        this.props.resultSelected(text)
        this.setState({
            inputText: "",
            // inputText: this.state.inputText
        })
    }

    _handleKeyDown = (e) => {
        if (e.key === 'Enter') {
                this.setState({ inputText: this.state.inputText})
            alert(this.state.inputText);
        {this.handleEnterKeyPressed(this.state.inputText)}
        }
      }

    

    render() {
        // Extracting props and state
        const { placeholderText, inputTextChanged, resultSelected } = this.props; 
        const { inputText } = this.state;

        return (
            <div className="c-input-box">
                <Form.Control type="search" placeholder={placeholderText} value={inputText} 
                    // onChange={this.handleInputChange} onKeyPress={this._handleKeyDown} />
                    onChange={this.handleInputChange} onKeyPress={this._handleKeyDown} />
            </div>
        )
    }
}

export default InputBox;