// AuthContext.js
import React, { createContext, useContext, useEffect, useState } from 'react';

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
    const [authenticated, setAuthenticated] = useState(!!localStorage.getItem('accessToken'));
    const [token, setToken] = useState('');

    const login = (newToken) => {
        // Perform your login logic here and set authenticated to true
        setAuthenticated(true);
        setToken(newToken); // Set the token received upon login
        localStorage.setItem('accessToken', newToken); // Store the token in localStorage
    };

    const logout = () => {
        // Perform your logout logic here and set authenticated to false
        setAuthenticated(false);
        // Remove the token from the state
        setToken('');
        // Remove the token from localStorage
        localStorage.removeItem('accessToken');
    };



    useEffect(() => {
        console.log("Authenticated", authenticated);
    }, [authenticated, token]);

    return (
        <AuthContext.Provider value={{ authenticated, token, login, logout }}>
            {children}
        </AuthContext.Provider>
    );
};

export const useAuth = () => {
    return useContext(AuthContext);
};
