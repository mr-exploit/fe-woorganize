import axios from "axios";
import { useState } from "react";
import { useHistory, useNavigate } from "react-router-dom";

const handleLogin = async(email, password) =>{
    console.log("handleLogin")

    // const [isLoading, setIsLoading] = useState(false);
    // const [error, setError] = useState("");

    try {
        const url = import.meta.env.VITE_API_URL;
        const response = await axios.post(
            url,
            {
                email,
                password,
            }
        );
        console.log("check error", response)
        // if(response.data)
        // const token = response[0].Authorization;

    } catch (error) {
        console.log("check error", error)
    }
    // setIsLoading(true);
    // setError("");
}

const handleRegister = async(email, username, password, confPassword) =>{
    console.log("handleRegister")
}

export {
    handleLogin,
    handleRegister
}
