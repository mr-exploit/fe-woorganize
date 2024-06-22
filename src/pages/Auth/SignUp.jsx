import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import Swal from 'sweetalert2';
import FormAuth from './AuthLayout/FormAuth';

const SignUp = () => {
    const [username, setUsername] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const navigate = useNavigate();

    const handleSubmit = async (event) => {
        event.preventDefault();
        const urlApiENV = import.meta.env.VITE_API_URL;

        try {
            const response = await axios.post(`${urlApiENV}/register`, {
                username,
                email,
                password
            });

            const responmsg = response.data.msg;
            console.log("Login response:", responmsg);
            if(responmsg){
                Swal.fire({
                    title: "Register Success!",
                    text: "You have successfully registered",
                    icon: "success"
                }).then(() => {
                    navigate('/login');
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
                    { label: 'Nama Lengkap', type: "text", value: username, onChange: (e) => setUsername(e.target.value) }, 
                    { label: 'Alamat Email', type: 'email', value: email, onChange: (e) => setEmail(e.target.value) }, 
                    { label: 'Kata Sandi', type: 'password', value: password, onChange: (e) => setPassword(e.target.value) }
                ]}
                name="Daftar"
                details="Sudah punya akun?"
                path="/login"
                navigation="Masuk"
            />
            <button type="submit">Submit</button>
        </form>
    )
}

export default SignUp;
