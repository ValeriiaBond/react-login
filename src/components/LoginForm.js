import React, { useState } from 'react';

function LoginForm({Login, error}) {
    const [details, setDetails] = useState({name: "", email: "", password: ""});

    const submitHandler = e => {
        e.preventDefault();

        Login(details);
    }

    return (
    <div className="login-body">
        <h2><span>Bank</span> Support Poprtal</h2>
        <form onSubmit={submitHandler}>
            <div className="form-inner">
            {(error != "") ? (<div className="error">{error}</div>) : ""}
                <div className="form-email">
                    <input type="email" name="email" id="email" placeholder="E-mail" onChange={e => setDetails({...details, email: e.target.value})} value={details.email}/>
                </div>
                <div className="form-password">
                    <input type="password" name="password" id="password" placeholder="Password" onChange={e => setDetails({...details, password: e.target.value})} value={details.password}/>
                </div>
                <input type="submit" value="Login" className="btn-login"/>
                <p>Forgot your password? <a href="#">Reset it here.</a></p>
            </div>
        </form>  
    </div>
        
    )
}

export default LoginForm
