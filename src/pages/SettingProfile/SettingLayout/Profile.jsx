import React from 'react'
import SidebarProfile from './SidebarProfile'
import NavbarProfile from './NavbarProfile'
import profile from '../../../assets/images/profile-medium.png'
import { useNavigate } from 'react-router-dom'

const Profile = () => {
    const userProfile = {
        fullName: "Muhammad Ihsan Nabawi",
        email: "ihsan@example.com",
        phone: "+62-123-4567-8910",
        postalCode: "12345"
    }

    const navigate = useNavigate()

    return (
        <>
            <NavbarProfile />
            <SidebarProfile />
            <div className='w-full pt-[150px] pl-[270px] flex flex-col gap-[53px] mb-24'>
                <h1 className='font-medium 2xl:text-[32px] text-[22px] text-neutral4'>My Profile</h1>
                <div className='flex flex-col gap-5'>
                    <div className='2xl:w-[100px] w-[80px]'>
                        <img src={profile} alt="" />
                    </div>
                    <div>
                        <p className='font-semibold'>Muhammad Ihsan Nabawi</p>
                    </div>
                </div>
                <div className='flex flex-col gap-[50px]'>
                    <p className='text-neutral4 text-2xl font-medium'>Informasi Pribadi</p>
                    <form action="">
                        <div className='flex gap-[52px]'>
                            <div className='flex flex-col gap-[32px]'>
                            <div className='flex flex-col w-[260px] gap-[10px]'>
                                <label>Nama Lengkap</label>
                                <p className='rounded-[8px] bg-gray-100 p-3'>{userProfile.fullName}</p>
                            </div>
                            <div className='flex flex-col w-[260px] gap-[10px]'>
                                <label>Email</label>
                                <p className='rounded-[8px] bg-gray-100 p-3'>{userProfile.email}</p>
                            </div>
                        </div>
                        <div className='flex flex-col gap-[32px]'>
                            <div className='flex flex-col w-[260px] gap-[10px]'>
                                <label>No Telp</label>
                                <p className='rounded-[8px] bg-gray-100 p-3'>{userProfile.phone}</p>
                            </div>
                            <div className='flex flex-col w-[260px] gap-[10px]'>
                                <label>Kode Pos</label>
                                <p className='rounded-[8px] bg-gray-100 p-3'>{userProfile.postalCode}</p>
                            </div>
                            </div>
                        </div>
                        <button onClick={() => { navigate("/admin/profile/edit") }} className='px-5 py-3 bg-neutral4 text-white rounded-[8px] mt-[50px] cursor-pointer'>
                            Edit Profile
                        </button>
                    </form>
                </div>
            </div>
        </>
    )
}

export default Profile
