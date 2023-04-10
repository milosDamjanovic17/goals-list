import React, { useState } from 'react';

import Button from '../../UI/Button/Button';
import './CourseInput.css';

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
      <div className={`form-control ${!isValid ? 'invalid' : ''}`}> {/* using template literal and ternary operator, depending on the state we'll add proper class accordingly */}
        <label>Course Goal</label>
        <input type="text" onChange={goalInputChangeHandler} />
      </div>
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