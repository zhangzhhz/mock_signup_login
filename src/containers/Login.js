import React, { useState } from 'react';
import { FormGroup, FormControl, ControlLabel } from 'react-bootstrap';
import LoaderButton from '../components/LoaderButton';
import { useFormFields } from "../libs/hooksLib";
import './Login.css';

export default function Login(props) {
  // const [email, setEmail] = useState("");
  // const [password, setPassword] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [fields, handleFieldChange] = useFormFields({
    email: '',
    password: ''
  })

  // useEffect(() => console.log(password), [password]);

  function validateForm() {
    // return email.length > 0 && password.length > 0;
    return fields.email.length > 0 && fields.password.length > 0;
  }

  async function handleSubmit(event) {
    event.preventDefault();

    setIsLoading(true);

    console.log("Authenticating...");
    props.userHasAuthenticated(1===0);
    console.log(`Not authenticated..`);
    alert(`Incorrect Login`);
    setIsLoading(false);
  }

  return (
    <div className='Login'>
      <form onSubmit={handleSubmit}>
        <FormGroup controlId='email' bsSize='large'>
          <ControlLabel>Email</ControlLabel>
          <FormControl
            autoFocus
            type='email'
            // value={email}
            // onChange={e => setEmail(e.target.value)}
            value={fields.email}
            onChange={handleFieldChange}
          />
        </FormGroup>
        <FormGroup controlId='password' bsSize='large'>
          <ControlLabel>Password</ControlLabel>
          <FormControl
            type='password'
            // value={password}
            // onChange={e => setPassword(e.target.value)}
            value={fields.password}
            onChange={handleFieldChange}
          />
        </FormGroup>
        <LoaderButton block bsSize='large' disabled={!validateForm()} isLoading={isLoading} type='submit'>
          Login
        </LoaderButton>
      </form>
    </div>
  );
}