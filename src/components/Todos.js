import React from 'react';

import './Todos.css';

class Todos extends React.Component {
    displayTodos() {
        return this.props.todos.map(t => (
            <li key ={t.id}>
                <input type="checkbox" defaultChecked={t.isDone} />
                {t.name}
            </li>
        ));
    }

    render(){
        return (
            <ul className="todosList">
                {this.displayTodos()}
            </ul>
        );
    }
}

const myTodos =[{
    id:1,
    name:"naaaaa",
    isDone: true
}];

export {myTodos};

export {Todos};