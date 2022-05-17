import React ,{useState} from 'react';
import { validateEmail } from '../../utils/helpers';

let placeHolderEmail = 'Email';
let placeHolderName = 'Name';
let placeHolderMessage = 'Message';

let errorStatus = ''



function Form() {
  // Create state variables for the fields in the form
  // We are also setting their initial values to an empty string
  const [email, setEmail] = useState('');
  const [name, setName] = useState('');
  const [message, setMessage] = useState('');
  const [errorMessage, setErrorMessage] = useState({email: false, name: false, message:false, submit:false, emailError: 'Email is required', nameError: 'Name is required',messageError:'Message is required' });

  const handleInputChange = (e) => {
    // Getting the value and name of the input which triggered the change
    const { target } = e;
    const inputType = target.name;
    const inputValue = target.value;

    // Based on the input type, we set the state of either email, username, and password
    if (inputType === 'email') {
      setEmail(inputValue);
    } else if (inputType === 'name') {
      setName(inputValue);
    } else {
      setMessage(inputValue);
    }
  };

  const handleFormSubmit = (e) => {
    // Preventing the default behavior of the form submit (which is to refresh the page)
    e.preventDefault();

    if (errorMessage.name === true| errorMessage.email === true | errorMessage.message === true) {
      setErrorMessage({...errorMessage,submit:true})
      return
    } else {setErrorMessage({...errorMessage,submit:false})}





    // If everything goes according to plan, we want to clear out the input after a successful registration.
    setName('');
    setEmail('');
    setMessage('');
    placeHolderEmail = 'Email';
    placeHolderName = 'Name';
    placeHolderMessage = 'Message';
  };

  function validInput(e) {
   if( !e.target.value.length) {
     const field = e.target.name
     setErrorMessage({...errorMessage,[field]:true})
   }
   else {const field = e.target.name
        setErrorMessage({...errorMessage,[field]:false})
  }
  }

  return (
    <div class="justify-content-center text-center">
      <h1>Contact Form</h1>
      <form className="form my-2">
        <input 
        {...errorMessage.email &&(errorStatus="errorText")}
        {...errorMessage.email === false && (errorStatus='')}
        {...errorMessage.email &&(placeHolderEmail="Please enter an email")}
          onBlur={validInput}
          value={email}
          name="email"
          onChange={handleInputChange}
          type="email" required
          placeholder={placeHolderEmail}
          class={errorStatus}
        />
        <input
        {...errorMessage.name &&(errorStatus="errorText")}
        {...errorMessage.name === false && (errorStatus='')}
          {...errorMessage.name &&(placeHolderName="Please enter a name")}
          onBlur={validInput}
          value={name}
          name="name"
          onChange={handleInputChange}
          type="text" required
          placeholder={placeHolderName}
          class={errorStatus}
        />
        <input
        {...errorMessage.message &&(errorStatus="errorText")}
        {...errorMessage.message === false && (errorStatus='')}
          {...errorMessage.message &&(placeHolderMessage="Please enter a message")}
          onBlur={validInput}
          value={message}
          name="message"
          onChange={handleInputChange}
          type="text" required
          placeholder={placeHolderMessage}
          class={errorStatus}
        />
        <button type="button" onClick={handleFormSubmit}>Submit</button>
      </form>
      {errorMessage.submit &&(
        <div>
          <p className="error-text">Make sure all fields are filled out before submitting</p>
        </div>
      )}
    </div>
  );
}

export default Form;
