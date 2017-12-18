import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App';
import { Question } from './components/Question';



import { choiceHelper } from "./helpers/choice-helper";

it('adds a choice to my question', () => {
  const initialQuestion = [
    { id: 1, name: 'First Choice', number: 1 },
    { id: 2, name: 'Second Choice', number: 2 }
  ]

  const newQuestion = choiceHelper.addChoice(initialQuestion, 'Last Choice');

  const expectedQuestion = [
    ...initialQuestion,
    newQuestion[2]
  ]

  expect(newQuestion).toEqual(expectedQuestion);
});

it('does not change my initial question to add a choice using the helper', () => {
  const initialQuestion = [
    { id: 1, name: 'First Choice', number: 1 },
    { id: 2, name: 'Second Choice', number: 2 }
  ]

  const expectedQuestion = [...initialQuestion];

  choiceHelper.addChoice(initialQuestion, 'Last Choice');

  expect(initialQuestion).toEqual(expectedQuestion);
});

it('adds one to a choice to my list', () => {
  const initialQuestion = [
    { id: 1, name: 'First Choice', number: 1 },
    { id: 2, name: 'Second Choice', number: 2 }
  ]

  const newQuestion = choiceHelper.getUpChoice(initialQuestion, 2);

  const expectedQuestion = [
    { id: 1, name: 'First Choice', number: 1 },
    { id: 2, name: 'Second Choice', number: 3 }
  ]

  expect(newQuestion).toEqual(expectedQuestion);
});

it('does not change my initial Question to add one to a Choice using the helper', () => {
  const initialQuestion = [
    { id: 1, name: 'First Choice', number: 1 },
    { id: 2, name: 'Second Choice', number: 2 }
  ]

  const expectedQuestion = [...initialQuestion];
  choiceHelper.getUpChoice(initialQuestion, 2);

  expect(initialQuestion).toEqual(expectedQuestion);
})

it('substracts one to a choice to my list', () => {
  const initialQuestion = [
    { id: 1, name: 'First Choice', number: 1 },
    { id: 2, name: 'Second Choice', number: 2 }
  ]

  const newQuestion = choiceHelper.getDownChoice(initialQuestion, 2);

  const expectedQuestion = [
    { id: 1, name: 'First Choice', number: 1 },
    { id: 2, name: 'Second Choice', number: 1 }
  ]

  expect(newQuestion).toEqual(expectedQuestion);
});

it('does not change my initial Question to substract one to a Choice using the helper', () => {
  const initialQuestion = [
    { id: 1, name: 'First Choice', number: 1 },
    { id: 2, name: 'Second Choice', number: 2 }
  ]

  const expectedQuestion = [...initialQuestion];
  choiceHelper.getDownChoice(initialQuestion, 2);

  expect(initialQuestion).toEqual(expectedQuestion);
})