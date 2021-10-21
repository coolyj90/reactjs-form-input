import { useRef, useState } from "react";


const SimpleInput = (props) => {
  const nameInputRef = useRef();
  const [enteredName, setEnteredName] = useState('');
  const [enteredNameIsValid,setEnteredIsValid]=useState(false);
  const [enteredNameTouched,setEnteredNameTouched] = useState(false)


  const nameInputChangeHandler = event => {
    setEnteredName(event.target.value);
    console.log(event.target.value);

  };

  const formSubmissionHandler = event => {
    event.preventDefault();
    setEnteredNameTouched(true);

    console.log(enteredName);
    if(enteredName.trim()===''){
      setEnteredIsValid(false);
      return;
    }

    const enteredValue = nameInputRef.current.value;
    console.log(enteredValue);
    //nameInputRef.current.value='';=>NOT IDEAL
    setEnteredName('');
  };

  const nameInputIsInvalid = !enteredNameIsValid && enteredNameTouched;
  const nameInputClasses = nameInputIsInvalid?'form-control invalid':'form-control';

  return (
    <form onSubmit={formSubmissionHandler}>
      <div className={nameInputClasses}>
        <label htmlFor='name'>Your Name</label>
        <input ref={nameInputRef} type='text' id='name' onChange={nameInputChangeHandler} value={enteredName} />
        {nameInputIsInvalid && <p className="error-text">Name must not be empty.</p>}
      </div>
      <div className="form-actions">
        <button>Submit</button>
      </div>
    </form>
  );
};

export default SimpleInput;
