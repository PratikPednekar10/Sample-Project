import React from 'react';
import Layout from '../pages/SignUp';
import { AuthFormWrapper } from './Styles';

const SignUp = () => {
    return (
        <Layout>
            <AuthFormWrapper>
                <h2>Create an Account</h2>
                <form>
                    <div className="form-group">
                        <label htmlFor="name">Enter Full Name</label>
                        <input
                            type="text"
                            name="name"
                            id="name"
                            placeholder="Full Name"
                        />
                    </div>
                    <div className="form-group">
                        <label htmlFor="name">Enter Email</label>
                        <input
                            type="email"
                            name="email"
                            id="email"
                            placeholder="Enter email address"
                        />
                    </div>
                    <div className="form-group">
                        <label htmlFor="password">Enter Password</label>
                        <input
                            type="password"
                            name="password"
                            id="password"
                            placeholder="Password"
                        />
                    </div>
                    <div className="form-group">
                        <label htmlFor="confPassword">Confirm Password</label>
                        <input
                            type="password"
                            name="confPassword"
                            id="namconfPassworde"
                            placeholder="Full Name"
                        />
                    </div>

                </form>
            </AuthFormWrapper>
        </Layout>
    )
}

export default SignUp