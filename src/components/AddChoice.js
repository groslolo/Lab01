import React from 'react';

class AddChoice extends React.Component {
    constructor() {
        super();

        this.state = {
            newChoice: ''
        };
    }


    render() {
        return (
            <div className="addchoice">
                New Choice : <input type="text" value={this.state.newChoice} onChange={this.changeName} />
                <button onClick={this.addChoice}>Add</button>
            </div>
        );
    }

    changeName = (e) => {
        this.setState({newChoice: e.target.value})
    }

    addChoice = () => {
        this.props.addChoice(this.state.newChoice)

        this.setState({newChoice: ''});
    }
}



export {AddChoice};