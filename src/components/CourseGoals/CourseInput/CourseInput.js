import React, { useState } from 'react';
import Styled from 'styled-components';
import Button from '../../UI/Button/Button';
import './CourseInput.css';

const FormControl = Styled.div`

  margin: 0.5rem 0;


& label {
  font-weight: bold;
  display: block;
  margin-bottom: 0.5rem;
  color: ${props => (props.invalid ? 'red' : 'black')}
}

& input {
  display: block;
  width: 100%;
  border: 1px solid ${props => (props.invalid ? 'red' : '#ccc')};
  background: ${props => (props.invalid ? '#ffd7d7' : 'transparent')}
  font: inherit;
  line-height: 1.5rem;
  padding: 0 0.25rem;
}


& input:focus {
  outline: none;
  background: #fad0ec;
  border-color: #8b005d;
}

&.invalid input {

  border-color: red;
  background: rgb(255, 198, 198);
}

&.invalid label {

  color: red;
}

`

const CourseInput = props => {
  const [enteredValue, setEnteredValue] = useState('');
  const [isValid, setIsValid] = useState(true);

  // handler for tracking states as we type inside input bar
  const goalInputChangeHandler = event => {
    if(event.target.value.trim().length > 0){
      setIsValid(true);
    }

    setEnteredValue(event.target.value); // will pass whatever we type to the input bar
  };

  const formSubmitHandler = event => {
    event.preventDefault();
    if(enteredValue.trim().length === 0){
      setIsValid(false);
      return;
    }
    console.log(`Submiting ${enteredValue} to props.onAddGoal function`);
    props.onAddGoal(enteredValue);
  };

  return (
    <form onSubmit={formSubmitHandler}> {/* calling formSubmitHandler function once we click submit 'Add Goal' button */}
      <FormControl invalid={!isValid}> {/* CHECK THE STYLED COMPONENT SYNTAX AND LOGIC .76 & .77 FOR CLARIFICATION */}
        <label>Course Goal</label>
        <input type="text" onChange={goalInputChangeHandler} />
      </FormControl>
      <Button type="submit">Add Goal</Button>
    </form>
  );
};

export default CourseInput;



/* 
  logic behind passing value to onAddGoal(enteredValue)

  1. We'll use setEnteredValue to track the new state of component WHILE we are typing, as soon as we stop it will be put in enteredValue state
  2. Once we are satisfied with value that we want to submit, onAddGoal will submit the enteredValue

*/