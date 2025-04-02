import { useState, createContext, useContext } from 'react';
import * as userService from '../Services/userService';
import { toast } from 'react-toastify';

const AuthContext = createContext(null);

export const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(userService.getUser());

    const login = async (email, password) => {
        try {
            const user = await userService.login(email, password);
            setUser(user);
            toast.success('Login Successful');
            return user; // Return the user for optional chaining
        } catch (err) {
            const message = err.response?.data?.message ||
                err.message ||
                'Login failed. Please try again.';
            toast.error(message);
            throw err; // Re-throw if components need to handle the error
        }
    };

    const register = async (data) => {
        try {
            const user = await userService.register(data);
            setUser(user);
            toast.success('Registration Successful');
            return user;
        } catch (err) {
            const message = err.response?.data?.message ||
                err.message ||
                'Registration failed. Please try again.';
            toast.error(message);
            throw err;
        }
    };

    const logout = () => {
        userService.logout();
        setUser(null);
        toast.success('Logout Successful');
    };

    return (
        <AuthContext.Provider value={{ user, login, logout, register }}>
            {children}
        </AuthContext.Provider>
    );
};

export const useAuth = () => {
    const context = useContext(AuthContext);
    if (!context) {
        throw new Error('useAuth must be used within an AuthProvider');
    }
    return context;
};