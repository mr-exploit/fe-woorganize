import React, { useEffect, useState } from 'react';
import SidebarProfile from './SidebarProfile';
import NavbarProfile from './NavbarProfile';
import profile from '../../../assets/images/profile-medium.png';
import Swal from 'sweetalert2';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const Profile = () => {
  const navigate = useNavigate();
  const [userProfile, setUserProfile] = useState(null);
  const urlApiENV = import.meta.env.VITE_API_URL;
  const [userId, setUserId] = useState(null);
  const userData = localStorage.getItem('users');
  const usertoken = localStorage.getItem('token');
  useEffect(() => {
    
    if (userData) {
      const parsedUserData = JSON.parse(userData);
      if (parsedUserData.role === 'user') {
        setUserId(parsedUserData.id);
      } else {
        navigate('/');
      }
    } else {
      navigate('/login');
    }
  }, [navigate]);

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
          NO_HP: userData.No_HP || "No_HP Kosong",
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
  }, [userId, navigate, urlApiENV]);

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
    <>
      <NavbarProfile />
      <SidebarProfile />
      <div className='w-full pt-[150px] pl-[270px] flex flex-col gap-[53px] mb-24'>
        <h1 className='font-medium 2xl:text-[32px] text-[22px] text-neutral4'>My Profile</h1>
        <div className='flex flex-col gap-5'>
          <div className='2xl:w-[100px] w-[80px]'>
            <img src={getImageUrl()} alt="Profile" />
          </div>
          <div>
            <p className='font-semibold'>{userProfile.Nama}</p>
          </div>
        </div>
        <div className='flex flex-col gap-[50px]'>
          <p className='text-neutral4 text-2xl font-medium'>Informasi Pribadi</p>
          <form action="">
            <div className='flex gap-[52px]'>
              <div className='flex flex-col gap-[32px]'>
                <div className='flex flex-col w-[260px] gap-[10px]'>
                  <label>Nama Lengkap</label>
                  <p className='rounded-[8px] bg-gray-100 p-3'>{userProfile.Nama}</p>
                </div>
                <div className='flex flex-col w-[260px] gap-[10px]'>
                  <label>Email</label>
                  <p className='rounded-[8px] bg-gray-100 p-3'>{userProfile.Email}</p>
                </div>
              </div>
              <div className='flex flex-col gap-[32px]'>
                <div className='flex flex-col w-[260px] gap-[10px]'>
                  <label>No Telp</label>
                  <p className='rounded-[8px] bg-gray-100 p-3'>{userProfile.NO_HP}</p>
                </div>
                <div className='flex flex-col w-[260px] gap-[10px]'>
                  <label>Kode Pos</label>
                  <p className='rounded-[8px] bg-gray-100 p-3'>{userProfile.Kode_Pos}</p>
                </div>
              </div>
            </div>
            <button onClick={() => { navigate(`/user/profile/edit/${userProfile.id}`) }} className='px-5 py-3 bg-neutral4 text-white rounded-[8px] mt-[50px] cursor-pointer'>
              Edit Profile
            </button>
          </form>
        </div>
      </div>
    </>
  )
}

export default Profile;
