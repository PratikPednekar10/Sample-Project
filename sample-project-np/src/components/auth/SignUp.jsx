import React, { useState, useContext } from 'react';
import { NavLink } from 'react-router-dom';
import Layout from '../pages/SignUp';
import { AuthFormWrapper } from './Styles';

const SignUp = () => {
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
                setname(user.email);
                !emailRegEx.test(user.name) ? setemailErr('Invalid Email!') : setemailErr('');
                break;
            case 'password':
                setname(user.password);
                user.password.length < 3 ? setpasswordErr('Password must be 8 character long!') : setpasswordErr('');
                break;
            case 'confPassword':
                setname(user.confPassword);
                user.confPassword !== password ? setconfPasswordErr('Password do not match') : setconfPasswordErr('');
                break;
            default:
                break;
        }


    }



    return (
        <Layout>
            <AuthFormWrapper>
                <h2 className="text-center">Create an Account</h2>
                <form className="mt-4">
                    <div className="form-group">
                        <label htmlFor="name">Enter Full Name</label>
                        <input
                            type="text"
                            name="name"
                            className="form-control"
                            id="name"
                            placeholder="Full Name"
                            onChange={(e) => handleChange(e, 'name')}
                        />
                    </div>
                    <div className="form-group">
                        <label htmlFor="name">Enter Email</label>
                        <input
                            type="email"
                            name="email"
                            className="form-control"
                            id="email"
                            placeholder="Enter email address"
                            onChange={(e) => handleChange(e, 'email')}
                        />
                    </div>
                    <div className="form-group">
                        <label htmlFor="password">Enter Password</label>
                        <input
                            type="password"
                            name="password"
                            className="form-control"
                            id="password"
                            placeholder="Password"
                            onChange={(e) => handleChange(e, 'password')}
                        />
                    </div>
                    <div className="form-group">
                        <label htmlFor="confPassword">Confirm Password</label>
                        <input
                            type="password"
                            name="confPassword"
                            className="form-control"
                            id="namconfPassworde"
                            placeholder="Full Name"
                            onChange={(e) => handleChange(e, 'confPassword')}
                        />
                    </div>
                    <imput type="Submit" className="btn btn-primary" value="Sign Up" />

                </form>
                <p className="float-left">
                    Already have an account? <NavLink to="signin" Sign In></NavLink>
                </p>
            </AuthFormWrapper>
        </Layout>
    )
}

export default SignUp