import React, { useState, useEffect } from 'react';
import SidebarProfile from './SidebarProfile';
import NavbarProfile from './NavbarProfile';
import profile from '../../../assets/images/profile-medium.png';
import Swal from 'sweetalert2';
import axios from 'axios';
import { useParams, useNavigate } from 'react-router-dom';

const EditProfile = () => {
  const { id } = useParams(); 
  const [userId, setUserId] = useState(null);
  const navigate = useNavigate();
  const urlApiENV = import.meta.env.VITE_API_URL;
  const [formData, setFormData] = useState({
    nama: '',
    no_hp: '',
    kode_pos: '',
    image: ''
  });
  
  const token = localStorage.getItem('token');

  const userData = localStorage.getItem('users');
  
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
  }, [navigate, userData]);


  useEffect(() => {
    const fetchData = async () => {
      try {
        const url = `${urlApiENV}/api/user?id=${id}`;

        if (!token) {
          navigate("/login"); // Redirect to login if no token found
          return;
        } 


        const response = await axios.get(url, {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });

        const userData = response.data.data[0];
        const getImageUrl = () => {
          if (userData.Image) {
            return `${urlApiENV}/${userData.Image.replace(/\\/g, '/')}`;
          } else {
            return profile;
          }
        };
        setFormData({
          ...userData,
          nama: userData.Nama,
          no_hp: userData.No_HP || 'no_hp kosong',
          kode_pos: userData.Kode_Pos || 'kode_pos kosong',
          image: getImageUrl()
        });
      } catch (error) {
        console.error('Error fetching user profile:', error);
        Swal.fire({
          title: "Oppss!",
          text: `${error.response ? error.response.data.error : error.message}`,
          icon: "error"
        });
      }
    };

    fetchData();
  }, [id, navigate, token, urlApiENV]);

  const handlePopUp = () => {
    Swal.fire({
      title: "Success!",
      text: "Perubahan telah berhasil!",
      icon: "success"
    });
    navigate('/user/profile');
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prevState => ({
      ...prevState,
      [name]: value
    }));
  };

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    setFormData(prevState => ({
      ...prevState,
      image: file
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const formDataToSend = new FormData();
    formDataToSend.append('nama', formData.nama);
    formDataToSend.append('no_hp', formData.no_hp);
    formDataToSend.append('kode_pos', formData.kode_pos);
    if (formData.image) {
      formDataToSend.append('image', formData.image);
    }

    // Kirim data profil yang diperbarui ke backend
    axios.put(`${urlApiENV}/api/user/profile/${id}`, formDataToSend, {
      headers: {
        'Content-Type': 'multipart/form-data',
        Authorization: `Bearer ${token}`,
      },
    })
      .then(response => {
        console.log('Profile updated:', response.data);
        handlePopUp();
      })
      .catch(error => {
        console.error('Error updating profile:', error);
        // Tambahkan penanganan kesalahan sesuai kebutuhan
        Swal.fire({
          title: "Oppss!",
          text: `${error.response ? error.response.data.error : error.message}`,
          icon: "error"
        });
      });
  };

  const getImageUrl = () => {
    if (formData.image && typeof formData.image === 'object') {
      return URL.createObjectURL(formData.image);
    }
    return formData.image;
  };

  return (
    <>
      <NavbarProfile />
      <SidebarProfile />
      <div className='w-full pt-[150px] pl-[270px] flex flex-col gap-[53px] mb-24'>
        <h1 className='font-medium 2xl:text-[32px] text-[22px] text-neutral4'>Edit Profile</h1>
        <div className='flex flex-col gap-5'>
          <div className='2xl:w-[100px] w-[80px]'>
            <img src={getImageUrl()} alt="Profile" />
          </div>
          <div>
            <p className='font-bold text-neutral4'>Foto Anda</p>
            <p className='text-neutral4 text-[14px]'>Ini akan ditampilkan di profil Anda</p>
          </div>
          <div>
            <input type="file" className='rounded-md text-[14px] file:bg-transparent' onChange={handleImageChange} />
          </div>
        </div>
        <div className='flex flex-col gap-[50px]'>
          <p className='text-neutral4 text-2xl font-medium'>Informasi Pribadi</p>
          <form onSubmit={handleSubmit}>
            <div className='flex gap-[52px]'>
              <div className='flex flex-col gap-[32px]'>
                <div className='flex flex-col w-[260px] gap-[10px]'>
                  <label htmlFor="nama">Nama Lengkap</label>
                  <input type="text" className='rounded-[8px]' id="nama" name="nama" value={formData.nama} onChange={handleChange} />
                </div>
                <div className='flex flex-col w-[260px] gap-[10px]'>
                  <label htmlFor="no_hp">No Telp</label>
                  <input type="text" className='rounded-[8px]' id="no_hp" name="no_hp" value={formData.no_hp} onChange={handleChange} />
                </div>
              </div>
              <div className='flex flex-col gap-[32px]'>
                <div className='flex flex-col w-[260px] gap-[10px]'>
                  <label htmlFor="kode_pos">Kode Pos</label>
                  <input type="text" className='rounded-[8px]' id="kode_pos" name="kode_pos" value={formData.kode_pos} onChange={handleChange} />
                </div>
              </div>
            </div>
            <input type="submit" value="Simpan Perubahan" className='px-5 py-3 bg-neutral4 text-white rounded-[8px] mt-[50px] cursor-pointer' />
          </form>
        </div>
      </div>
    </>
  );
};

export default EditProfile;
