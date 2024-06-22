import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import Swal from 'sweetalert2';
import FormAuth from './AuthLayout/FormAuth';

const Login = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const navigate = useNavigate();

    const handleSubmit = async (event) => {
        event.preventDefault();
        const urlApiENV = import.meta.env.VITE_API_URL;

        try {
            const response = await axios.post(`${urlApiENV}/login`, {
                email,
                password
            });

            const token = response.data.Authorization;
            // const users = [response.data.data.id, response.data.data.username, response.data.data.email];
            // localStorage.setItem("token", token);
            // localStorage.setItem("users", JSON.stringify(users));

     
            try {
                const url = urlApiENV + "/user/" + response.data.data.id;
                const userResponse = await axios.get(url, {
                    headers: {
                        Authorization: `Bearer ${token}`,
                    },
                });
                const user = userResponse.data[0];

                localStorage.setItem("token", token);
                localStorage.setItem("users", JSON.stringify(user));

                Swal.fire({
                    title: "Login Successfully!",
                    text: "Login Successfully",
                    icon: "success"
                });
                if (user && user.role === "admin") {
                    navigate("/admin/profile");
                } else {
                    navigate("/user/profile");
                }
            } catch (error) {
                Swal.fire({
                    title: "Login Failed!",
                    text: `${error.response ? error.response.data.error : error.message}`,
                    icon: "error"
                });
            }

        } catch (error) {
            Swal.fire({
                title: "Login Failed!",
                text: `${error.response ? error.response.data.error : error.message}`,
                icon: "error"
            });
        }
    };

    return (
        <form onSubmit={handleSubmit}>
            <FormAuth
                inputs={[
                    { label: 'Alamat Email', type: 'email', value: email, onChange: (e) => setEmail(e.target.value) },
                    { label: 'Kata Sandi', type: 'password', value: password, onChange: (e) => setPassword(e.target.value) }
                ]}
                name="Masuk"
                details="Belum punya akun?"
                path="/signup"
                navigation="Daftar"
            />
            <button type="submit">Submit</button>
        </form>
    );
}

export default Login;