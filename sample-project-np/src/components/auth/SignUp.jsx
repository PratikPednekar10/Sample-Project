import React, { useState, useContext } from 'react';
import classnames from 'classnames';
import { NavLink } from 'react-router-dom';
import Layout from '../pages/SignUp';
import { AuthFormWrapper } from './Styles';

const SignUp = ({ SignUp }) => {
    const [name, setname] = useState('');
    const [email, setemail] = useState('');
    const [password, setpassword] = useState('');
    const [confPassword, setconfPassword] = useState('');
    const [nameErr, setnameErr] = useState('');
    const [emailErr, setemailErr] = useState('');
    const [passwordErr, setpasswordErr] = useState('');
    const [confPasswordErr, setconfPasswordErr] = useState('');

    const handleChange = (e, name) => {
        const user = {};
        const emailRegEx = RegEx(
            /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
        );
        use[name] = e.target.values;
        //validations
        switch (name) {
            case 'name':
                setname(user.name);
                user.name.length < 3 ? setnameErr('Name must be at least 3 characters!') : setnameErr('');
                break;
            case 'email':
                setemail(user.email);
                !emailRegEx.test(user.name) ? setemailErr('Invalid Email!') : setemailErr('');
                break;
            case 'password':
                setpassword(user.password);
                user.password.length < 8 ? setpasswordErr('Password must be 8 character long!') : setpasswordErr('');
                break;
            case 'confPassword':
                setconfPassword(user.confPassword);
                user.confPassword !== password ? setconfPasswordErr('Password do not match') : setconfPasswordErr('');
                break;
            default:
                break;
        }

        //   console.log (user, nameErr,emailErr)
    }
    const handleSignUp = (e) => {
        e.preventDefault();
        if (name && email && password && confPassword && !nameErr && !emailErr && !passwordErr) {

        }
    }



    return (
        <Layout>
            <AuthFormWrapper>
                <h2 className="text-center">Create an Account</h2>
                <form className="mt-4" onSubmit={handleSignUp}>
                    <div className="form-group">
                        <label htmlFor="name">Enter Full Name</label>
                        <input
                            type="text"
                            name="name"
                            className={classnames(
                                "form-control", { 'is-invalid': nameErr, 'is-valid': !nameErr && name.length }
                            )}
                            id="name"
                            placeholder="Full Name"
                            onChange={(e) => handleChange(e, 'name')}
                        />
                        {nameErr && <small className="text-danger" > {nameErr}</small>}
                    </div>

                    <div className="form-group">
                        <label htmlFor="email">Enter Email</label>
                        <input
                            type="email"
                            name="email"
                            className={classnames(
                                "form-control",
                                { 'is-invalid': emailErr, 'is-valid': !emailErr && email.length }
                            )}
                            id="email"
                            placeholder="Enter email address"
                            onChange={(e) => handleChange(e, 'email')}
                        />
                        {emailErr && <small className="text-danger">{emailErr}</small>}
                    </div>

                    <div className="form-group">
                        <label htmlFor="password">Enter Password</label>
                        <input
                            type="password"
                            name="password"
                            className={classnames(
                                "form-control",
                                { 'is-invalid': passwordErr, 'is-valid': !passwordErr && password.length }
                            )}
                            id="password"
                            placeholder="Password"
                            onChange={(e) => handleChange(e, 'password')}
                        />
                        {passwordErr && <small className="text-danger">{passwordErr}</small>}
                    </div>

                    <div className="form-group">
                        <label htmlFor="confPassword">Confirm Password</label>
                        <input
                            type="password"
                            name="confPassword"
                            className={classnames(
                                "form-control",
                                { 'is-invalid': confpasswordErr, 'is-valid': !confpasswordErr && confpassword.length }
                            )}
                            id="namconfPassworde"
                            placeholder="Full Name"
                            onChange={(e) => handleChange(e, 'confPassword')}
                        />
                        {confpasswordErr && <small className="text-danger">{confpasswordErr}</small>}

                    </div>
                    <imput type="Submit" className="btn btn-primary" value="Sign Up" />

                </form>
                <p className="float-left">
                    Already have an account? <NavLink to="signin" Sign In></NavLink>
                </p>
            </AuthFormWrapper>
        </Layout >
    )
}

export default SignUp