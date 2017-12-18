import React from 'react';
import ReactDOM from 'react-dom';


const choiceHelper = {
    addChoice: (question, newChoiceName) => [
        ...question,
        {
            id: Math.floor((Math.random() * 10000) + 1),
            name: newChoiceName,
            number: 1
        }
    ],

    getUpChoice: (question, updatedChoiceId) =>
        question.map(t => t.id !== updatedChoiceId
        ? t
        : {
            ...t,
            number: t.number +1
        }),

    getDownChoice: (question, updatedChoiceId) =>
        question.map(t => t.id !== updatedChoiceId
        ? t
        : (t.number == 0 ? t : {
            ...t,
            number: t.number -1
        })),


};

export {choiceHelper};