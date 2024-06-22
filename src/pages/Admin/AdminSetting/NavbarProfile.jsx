import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import navback from '../../../assets/logo/navback.svg';
import profile from '../../../assets/images/profile-small.png';
import Swal from 'sweetalert2';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const NavbarProfile = () => {
    const userData = localStorage.getItem('users');
    const parsedUserData = JSON.parse(userData)
    const userId = parsedUserData.id;
    const navigate = useNavigate();
    const urlApiENV = import.meta.env.VITE_API_URL;
    const [userProfile, setUserProfile] = useState(null);
    const usertoken = localStorage.getItem('token');


    useEffect(() => {
        if (!userId) return;

        const fetchData = async () => {
          try {
            const response = await axios.get(`${urlApiENV}/api/user?id=${userId}`, {
              headers: {
                Authorization: `Bearer ${usertoken}`
              }
            });

            const userData = response.data.data[0];

            const updatedUserProfile = {
              ...userData,
              NO_HP: userData.NO_HP || "No_HP Kosong",
              Kode_Pos: userData.Kode_Pos || "Kode_Pos Kosong",
            };

            setUserProfile(updatedUserProfile);
          } catch (error) {
            console.error('Error fetching user profile:', error);
            Swal.fire({
              title: "Oops!",
              text: `${error.response ? error.response.data.error : error.message}`,
              icon: "error"
            });
            navigate('/login');
          }
        };

        fetchData();
    }, [userId, navigate, urlApiENV, usertoken]);

    if (!userProfile) {
        return null;
    }

    const getImageUrl = () => {
        if (userProfile.Image) {
            return `${urlApiENV}/${userProfile.Image.replace(/\\/g, '/')}`;
        } else {
            return profile; 
        }
    };

    return (
        <div className='z-20 px-[50px] py-[20px] flex justify-between items-center border-b border-neutral2 fixed left-0 top-0 right-0 bg-neutral1'>
            <Link to={"/"} className='flex gap-3'>
                <img src={navback} className='fill-gray-500 '  alt="" />
                <p className='text-neutral3'>Kembali</p>
            </Link>
            <img src={getImageUrl()} style={{ height: "5%", width: "5%" }} alt="" />
        </div>
    );
};

export default NavbarProfile;
