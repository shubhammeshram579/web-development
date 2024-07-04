import React from 'react';
import Register from './components/Register';
import Login from './components/Login';
import Logout from './components/Logout';
import ImageUpload from './components/ImageUpload';

const App = () => {
    return (
        <div>
            <h1>Authentication and Image Upload</h1>
            <Register />
            <Login />
            <Logout />
            <ImageUpload />
        </div>
    );
};

export default App;
