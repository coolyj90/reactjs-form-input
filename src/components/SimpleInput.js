import { useEffect, useState } from "react";


const SimpleInput = (props) => {
  const [enteredName, setEnteredName] = useState('');
  const [enteredNameTouched,setEnteredNameTouched] = useState(false);
  const [formIsValid,setFormIsValid] =useState(false);

  const enteredNameIsValid=enteredName.trim()!=="";
  const nameInputIsInvalid=!enteredNameIsValid && enteredNameTouched;

  useEffect(()=>{
    if(enteredNameIsValid){
      setFormIsValid(true);
    }
    else {
      setFormIsValid(false);
    }


  },[enteredNameIsValid])
  const nameInputBlurHandler= event =>{
    setEnteredNameTouched(true);
  }


  const nameInputChangeHandler = event => {
    setEnteredName(event.target.value);
    console.log(event.target.value);
    console.log(enteredName);

  };

  const formSubmissionHandler = event => {
    event.preventDefault();
    setEnteredNameTouched(true);
    console.log(enteredName);
    setEnteredName('');
    setEnteredNameTouched(false);
  };

  // const nameInputIsInvalid = !enteredNameIsValid && enteredNameTouched;
  const nameInputClasses = nameInputIsInvalid?'form-control invalid':'form-control';

  return (
    <form onSubmit={formSubmissionHandler}>
      <div className={nameInputClasses}>
        <label htmlFor='name'>Your Name</label>
        <input type='text' id='name' onChange={nameInputChangeHandler}  onBlur={nameInputBlurHandler} value={enteredName} />
        {nameInputIsInvalid && <p className="error-text">Name must not be empty.</p>}
      </div>
      <div className="form-actions">
        <button disabled={!formIsValid}>Submit</button>
      </div>
    </form>
  );
};

export default SimpleInput;
