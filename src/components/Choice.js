import React, { Component } from 'react';
import { PropTypes } from 'prop-types';
import App from './App';
import "./Choice.css";


const Choice = (props) => (
    <li>
        {props.name}&nbsp;
        <input type="button" className="bt" value="Up !" onClick={() => props.getUpChoice(props.id)} />
        <input type="button" className="bt" value="Down !" onClick={() => props.getDownChoice(props.id)} />&nbsp;
        <span className="pct">Used <strong>{props.number}</strong> times and it represents <strong></strong> % !</span>
    </li>
);

Choice.propTypes = {
    id:PropTypes.number.isRequired,
    name:PropTypes.string.isRequired,
    number:PropTypes.number.isRequired
}

export default Choice;