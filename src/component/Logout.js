import React from 'react';
import { useNavigate } from 'react-router-dom';

function Logout() {
    const navigate = useNavigate();

    const handleLogout = () => {
        // Clear local storage or session data
        localStorage.removeItem('token');
        alert('You have been logged out!');
        navigate('/');
    };

    return (
        <div>
            <h2>Logout</h2>
            <button onClick={handleLogout}>Logout</button>
        </div>
    );
}

export default Logout;