import React, { useState } from "react";
import axios from "axios";
import InputAuth from "./InputAuth";
import background from '../../../assets/images/bg-auth.png';
import logo from '../../../assets/logo/logo-auth.svg';
import { Link, useNavigate } from "react-router-dom";
import { urlApi } from "../../../redux/config";

const FormAuth = (props) => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const navigate = useNavigate();

    const handleEmailChange = (event) => {
        setEmail(event.target.value);
    };

    const handlePasswordChange = (event) => {
        setPassword(event.target.value);
    };

    const handleSubmit = async (event) => {
        event.preventDefault();
        const urlApiENV = import.meta.env.VITE_API_URL;

        try {
            const response = await axios.post(`${urlApiENV}/login`, {
                email,
                password
            });

            console.log("Login response:", response.data);

            const token = response.data.Authorization;
            const users = [response.data.data.id, response.data.data.username, response.data.data.email];
            // Store the token in local storage
            localStorage.setItem("token", token);
            localStorage.setItem("users", JSON.stringify(users));  // Store as JSON string
    
            let user;
            try {
                const url = urlApiENV + "/user/" + response.data.data.id;
                const userResponse = await axios.get(url, {
                    headers: {
                        Authorization: `Bearer ${token}`,
                    },
                });
                console.log("check userResponse", userResponse.data[0])
                user = userResponse.data[0];
                console.log("check user", user)
                if (user && user.role === "admin") {
                    navigate("/admin/profile");
                } else {
                    navigate("/");
                }
            } catch (error) {
                console.error("Error during login:", error.response ? error.response.data : error.message);
            }

        } catch (error) {
            console.error("Error during login:", error.response ? error.response.data : error.message);
        }
    };

    const { name, inputs, details, path, navigation, login = "/" } = props;

    return (
        <div className='flex h-screen'>
            <div className='w-1/2 flex flex-col justify-center items-center' style={{
                backgroundImage: `url(${background})`
            }}>
                <img className="xl:w-[300px] 2xl:w-[450px]" src={logo} alt="" />
                <p className="text-[60px] xl:text-[40px] text-white font-boska font-bold w-[465px] text-center">Selamat Datang di Komunitas Kami</p>
            </div>
            <div className='flex flex-col justify-center p-20 w-1/2'>
                <div className='mb-[30px]'>
                    <h1 className='text-[50px] font-boska font-bold mb-[15px]'>{name}</h1>
                    <p>EverAfter memberikan Anda pengalaman terbaik dalam pernikahan impian Anda! </p>
                </div>
                <form onSubmit={handleSubmit}>
                    <div className='flex flex-col 2xl:gap-4 xl:gap-2 mb-10'>
                        {inputs.map((input, index) => {
                            if (input.type === "email") {
                                return (
                                    <InputAuth
                                        label={input.label}
                                        type={input.type}
                                        value={email}
                                        onChange={handleEmailChange}
                                        key={index}
                                    />
                                );
                            } else if (input.type === "password") {
                                return (
                                    <InputAuth
                                        label={input.label}
                                        type={input.type}
                                        value={password}
                                        onChange={handlePasswordChange}
                                        key={index}
                                    />
                                );
                            } else {
                                return (
                                    <InputAuth
                                        label={input.label}
                                        type={input.type}
                                        key={index}
                                    />
                                );
                            }
                        })}
                        <div className='flex justify-between'>
                            <div className='flex gap-2 items-center'>
                                <input type="checkbox" className='rounded-sm cursor-pointer' />
                                <p>ingatkan saya</p>
                            </div>
                            <p className="text-blue-600">Lupa Kata Sandi?</p>
                        </div>
                    </div>
                    <div className="mb-10">
                        <button type="submit" className='p-4 px-12 rounded-lg bg-neutral4 text-white'>
                            {name}
                        </button>
                    </div>
                    <p className="text-gray-600">{details} <Link className="text-blue-600 font-bold" to={path}>{navigation}</Link></p>
                </form>
            </div>
        </div>
    );
}

export default FormAuth;
