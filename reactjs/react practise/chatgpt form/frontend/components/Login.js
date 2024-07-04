import React from 'react';
import { useForm } from 'react-hook-form';
import axios from 'axios';

const Login = () => {
    const { register, handleSubmit } = useForm();

    const onSubmit = async (data) => {
        try {
            const response = await axios.post('http://localhost:5000/auth/login', data);
            localStorage.setItem('token', response.data.token);
            alert('User logged in successfully');
        } catch (error) {
            console.error(error);
            alert('Error logging in user');
        }
    };

    return (
        <form onSubmit={handleSubmit(onSubmit)}>
            <input {...register('email')} type="email" placeholder="Email" />
            <input {...register('password')} type="password" placeholder="Password" />
            <button type="submit">Login</button>
        </form>
    );
};

export default Login;
