import React, { createContext, useState, useEffect } from "react";
import {jwtDecode} from 'jwt-decode'; 
import { useNavigate } from "react-router-dom";
import Swal from 'sweetalert2';

const AuthContext = createContext();

export default AuthContext;

export const AuthProvider = ({ children }) => {
    const [authTokens, setAuthTokens] = useState(() => 
        localStorage.getItem("authTokens") ? 
        JSON.parse(localStorage.getItem("authTokens"))
        : null
    );

    const [user, setUser] = useState(
        localStorage.getItem("authTokens") ? 
        jwtDecode(localStorage.getItem("authTokens"))
        : null
    );

    const [loading, setLoading] = useState(true);

    const navigate = useNavigate();

    const loginUser = async (email, password) => {
        const url = `${process.env.REACT_API_URL}token/`;
        try {
            const response = await fetch(url, {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify({ email, password })
            });
            const data = await response.json();

            if (response.ok) {
                setAuthTokens(data);
                setUser(jwtDecode(data.access));
                localStorage.setItem("authTokens", JSON.stringify(data));
                navigate("/");
                Swal.fire({
                    title: "Login Success",
                    icon: "success",
                    toast: true,
                    timer: 6000,
                    position: 'top-right',
                    timerProgressBar: true,
                    showConfirmButton: false
                });
            } else {
                console.log("An Error Occurred:", response.status);
                Swal.fire({
                    title: "Email - Password does not exist",
                    icon: "error",
                    toast: true,
                    timer: 6000,
                    position: 'top-right',
                    timerProgressBar: true,
                    showConfirmButton: false
                });
            }
        } catch (error) {
            console.error("Request failed:", error);
            Swal.fire({
                title: "Network or Server Error",
                icon: "error",
                toast: true,
                timer: 6000,
                position: 'top-right',
                timerProgressBar: true,
                showConfirmButton: false
            });
        }
    };

    const registerUser = async (username, email, password, confirm_password) => {
        const url = `${process.env.REACT_API_URL}register/`;
        try {
            const response = await fetch(url, {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify({ username, email, password, confirm_password })
            });
            const data = await response.json();

            if (response.ok) {
                navigate('/login');
                Swal.fire({
                    title: "Registration Success",
                    icon: "success",
                    toast: true,
                    timer: 6000,
                    position: 'top-right',
                    timerProgressBar: true,
                    showConfirmButton: false
                });
            } else {
                console.log("An Error Occurred:", response.status, data);
                Swal.fire({
                    title: "There was a server error",
                    icon: "error",
                    toast: true,
                    timer: 6000,
                    position: 'top-right',
                    timerProgressBar: true,
                    showConfirmButton: false
                });
            }
        } catch (error) {
            console.error("Request failed:", error);
            Swal.fire({
                title: "Network or Server Error",
                icon: "error",
                toast: true,
                timer: 6000,
                position: 'top-right',
                timerProgressBar: true,
                showConfirmButton: false
            });
        }
    };

    const logoutUser = () => {
        setAuthTokens(null);
        setUser(null);
        localStorage.removeItem("authTokens");
        navigate('/login');
        Swal.fire({
            title: "You have been logged out",
            icon: "success",
            toast: true,
            timer: 6000,
            position: 'top-right',
            timerProgressBar: true,
            showConfirmButton: false
        });
    };

    const contextData = {
        user, setUser,
        authTokens, setAuthTokens,
        registerUser, loginUser, logoutUser
    };

    useEffect(() => {
        if (authTokens) {
            setUser(jwtDecode(authTokens.access));
        }
        setLoading(false);
    }, [authTokens]);

    return (
        <AuthContext.Provider value={contextData}>
            {loading ? null : children}
        </AuthContext.Provider>
    );
};
