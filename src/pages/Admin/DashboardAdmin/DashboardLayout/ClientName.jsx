import React, { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import profile from '../../../../assets/images/profile-medium.png';
import axios from 'axios';
import Swal from 'sweetalert2';

const ClientName = () => {
    const [dataCon, setFormCon] = useState([]);
    const navigate = useNavigate();

    const urlApiENV = import.meta.env.VITE_API_URL;
    const token = localStorage.getItem("token");
    const DataUser = JSON.parse(localStorage.getItem("users"));
    const { id } = useParams();

    useEffect(() => {
        if (!token) {
            navigate("/login");
            return;
        }

        if (DataUser.role !== "admin") {
            navigate("/");
            return;
        }

        const fetchFormData = async () => {
            try {
                const response = await axios.get(`${urlApiENV}/api/concept/${id}`, {
                    headers: {
                        Authorization: `Bearer ${token}`
                    }
                });
                console.log("check data response", response.data.data);
                setFormCon(response.data.data);
            } catch (error) {
                console.error('Error fetching form data:', error);
                Swal.fire({
                    title: "Oops!",
                    text: `${error.response ? error.response.data.msg : error.message}`,
                    icon: "error",
                    showConfirmButton: false,
                    timer: 1500
                });
            }
        };

        fetchFormData();

    }, [urlApiENV, navigate, token, DataUser.role, id]);

    const getImageUrl = () => {
        if (dataCon.length > 0 && dataCon[0].image) {
            return `${urlApiENV}/${dataCon[0].image.replace(/\\/g, '/')}`;
        } else {
            return profile;
        }
    };

    return (
        <section className='p-2 bg-white border rounded-lg shadow-md m-3'>
            <div className="flex items-center p-4 ml-5">
                <img src={getImageUrl()} alt="Client" className="rounded-full w-12 h-12" />
                {dataCon.length > 0 && (
                    <div className="text-left ml-4">
                        <div className="font-semibold">{dataCon[0].nama}</div>
                        <div className="text-gray-500">{dataCon[0].email}</div>
                    </div>
                )}
            </div>
        </section>
    );
}

export default ClientName;
