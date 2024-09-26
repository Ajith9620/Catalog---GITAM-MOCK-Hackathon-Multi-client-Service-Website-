import React, { useState, useContext } from 'react';
import { AuthContext } from '../context/AuthContext';
import { loginUser, registerUser } from '../api/api';

const AuthForm = () => {
    const [isLogin, setIsLogin] = useState(true);
    const [formData, setFormData] = useState({ name: '', email: '', password: '' });
    const { login } = useContext(AuthContext);

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = isLogin ? await loginUser(formData) : await registerUser(formData);
            login(response.data);
        } catch (error) {
            console.error(error);
        }
    };

    return (
        <form onSubmit={handleSubmit}>
            {!isLogin && <input name="name" value={formData.name} onChange={handleChange} placeholder="Name" />}
            <input name="email" value={formData.email} onChange={handleChange} placeholder="Email" required />
            <input name="password" value={formData.password} onChange={handleChange} placeholder="Password" required />
            <button type="submit">{isLogin ? 'Login' : 'Register'}</button>
            <button type="button" onClick={() => setIsLogin(!isLogin)}>
                Switch to {isLogin ? 'Register' : 'Login'}
            </button>
        </form>
    );
};

export default AuthForm;
