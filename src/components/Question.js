import React from 'react';
import { PropTypes } from 'prop-types';

import './Question.css';

import Choice from "./Choice";

/*class Question extends React.Component {
    displayQuestion() {
        return this.props.question.map(t =>
            <Choice
            key = {t.id}
            {...t}
            />
        );
    }

    render() {
        return (
            <ul className="question">
                {this.displayQuestion()}
            </ul>
        );
    }

}
**/

const displayChoice = (props) => props.question.map(t => <Choice
    key={t.id}
    {...t}
    getUpChoice={props.getUpChoice}
    getDownChoice={props.getDownChoice}
    />
);

const Question = (props) => <ul className="question">{displayChoice({...props})}</ul>;

Question.propTypes = {
    question: PropTypes.array.isRequired
}

const defaultQuestion =[{
    id:1,
    name:"BLUE",
    number:1
}];


export {defaultQuestion};

export {Question};