import React, { useEffect, useState } from 'react';

const App = () => {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [emailDirty, setEmailDirty] = useState(false)
  const [emailSuccess, setEmailSuccess] = useState(false)
  const [passwordSuccess, setPasswordSuccess] = useState(false)
  const [passwordDirty, setPasswordDirty] = useState(false)
  const [emailError, setEmailError] = useState('Invalid Username')
  const [passwordError, setPasswordError] = useState('Invalid password')
  const [formValid, setFormValid] = useState(false)

  useEffect(() => {
    if (emailError || passwordError) {
      setFormValid(false)
    } else {
      setFormValid(true)
    }
  })

  function blurHandler(e) {
    switch (e.target.name) {
      case 'email':
        setEmailDirty(true);
        break;
      case 'password':
        setPasswordDirty(true);
        break;
    }
  }

  const emailHandler = (e) => {
    setEmail(e.target.value)
    const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    if (!re.test(String(e.target.value).toLowerCase())) {
      setEmailError('Invalid Username')
      setEmailSuccess(false)
    } else {
      setEmailError('')
      setEmailSuccess(true)
    }
  }

  const passwordlHandler = (e) => {
    setPassword(e.target.value)
    if (e.target.value.length < 8) {
      setPasswordError('Invalid password')
      if (!e.target.value) {
        setPasswordError('Password should not be empty')
      }
    } else {
      setPasswordError('')
      setPasswordSuccess(true)
    }
  }


  return (
    <div className="login-body">
      <h2><span>Bank</span> Support Poprtal</h2>
      <form>
        <div className="form-inner">
          {/* {(error != "") ? (<div className="error">{error}</div>) : ""} */}
          <div className="form-email">
            <input value={email} type="email" name="email" id="email" placeholder="E-mail" className="input-email" onBlur={e => blurHandler(e)} onChange={e => emailHandler(e)} />
          </div>
          {(emailDirty && emailError) && <div className='email-error-message' style={{ color: 'red' }}>{emailError}</div>}
          {(emailSuccess) && <div className='email-success-message'>{''}</div>}
          <div className="form-password">
            <input value={password} type="password" name="password" id="password" placeholder="Password" onBlur={e => blurHandler(e)} onChange={e => passwordlHandler(e)} />
          </div>
          {(passwordDirty && passwordError) && <div className='password-error-message' style={{ color: 'red' }}>{passwordError}</div>}
          {(passwordSuccess) && <div className='password-success-message'>{''}</div>}
          <input disabled={!formValid} type="submit" value="Login" className="btn-login" />
          <p>Forgot your password? <a href="#">Reset it here.</a></p>
        </div>
      </form>
    </div>
  );
}

export default App;
