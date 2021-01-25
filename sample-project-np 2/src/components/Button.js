import React from 'react';
import './Button.css';
import { Link } from 'react-router-dom';
import signup from './auth/SignUpAuth';

export function Button() {
    return (
        <Link to='sign-up'>
            <button className='btn'>Sign Up</button>
        </Link>
    );
}