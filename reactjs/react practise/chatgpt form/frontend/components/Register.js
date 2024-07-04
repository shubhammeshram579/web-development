import React from 'react';
import { useForm } from 'react-hook-form';
import axios from 'axios';

const Register = () => {
    const { register, handleSubmit } = useForm();

    const onSubmit = async (data) => {
        try {
            await axios.post('http://localhost:5000/auth/register', data);
            alert('User registered successfully');
        } catch (error) {
            console.error(error);
            alert('Error registering user');
        }
    };

    return (
        <form onSubmit={handleSubmit(onSubmit)}>
            <input {...register('username')} placeholder="Username" />
            <input {...register('email')} type="email" placeholder="Email" />
            <input {...register('password')} type="password" placeholder="Password" />
            <button type="submit">Register</button>
        </form>
    );
};

export default Register;
