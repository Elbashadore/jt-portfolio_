import React ,{useState} from 'react';
import { validateEmail } from '../../utils/helpers';



function Form() {
  // Create state variables for the fields in the form
  // We are also setting their initial values to an empty string
  const [email, setEmail] = useState('');
  const [name, setName] = useState('');
  const [message, setMessage] = useState('');
  const [errorMessage, setErrorMessage] = useState({email: false, name: false, message:false });

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




    // If everything goes according to plan, we want to clear out the input after a successful registration.
    setName('');
    setEmail('');
    setMessage('');
  };

  function validInput(e) {
   if( !e.target.value.length) {
     const field = e.target.name
     setErrorMessage({...errorMessage,[field]:true})
     console.log(errorMessage.name)
   }
   else {const field = e.target.name
        setErrorMessage({...errorMessage,[field]:false})
  }
  }

  return (
    <div>
      { errorMessage.email === true && <p>Email is required</p>}
      <form className="form">
        <input 
          onBlur={validInput}
          value={email}
          name="email"
          onChange={handleInputChange}
          type="email" required
          placeholder="email"
        />
        {errorMessage.name === true && <p>Name is required</p>}
        <input
          onBlur={validInput}
          value={name}
          name="name"
          onChange={handleInputChange}
          type="text" required
          placeholder="Name"
        />
        <input
        {...errorMessage.message === true && <p>Message is required</p>}
          onBlur={validInput}
          value={message}
          name="message"
          onChange={handleInputChange}
          type="text" required
          placeholder="Message"
        />
        <button type="button" onClick={handleFormSubmit}>Submit</button>
      </form>
    </div>
  );
}

export default Form;
