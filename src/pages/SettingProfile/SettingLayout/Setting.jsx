import React from 'react'
import NavbarProfile from './NavbarProfile'
import SidebarProfile from './SidebarProfile'
import { Link, useNavigate } from 'react-router-dom'
import Swal from 'sweetalert2'

const Setting = () => {
    const navigate = useNavigate()
    const savePopUp = () => {
        Swal.fire({
            title: "Success!",
            text: "Password berhasil diganti!",
            icon: "success"
        });
        setPopUp(false)
    }

    const deletePopUp = () => {
        Swal.fire({
            title: "Are you sure?",
            text: "You won't be able to revert this!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, delete it!"
        }).then((result) => {
            if (result.isConfirmed) {
                Swal.fire({
                    title: "Deleted!",
                    text: "Your file has been deleted.",
                    icon: "success"
                });
                localStorage.removeItem('users')
                localStorage.removeItem('token')
                navigate('/')
            }
        });
    }
    return (
        <>
            <NavbarProfile />
            <SidebarProfile />
            <div className='w-full pt-[150px] pl-[270px] mb-24'>
                <div className='flex flex-col gap-[53px]'>
                    <h1 className='font-medium 2xl:text-[32px] text-[22px] text-neutral4'>Pengaturan Akun</h1>
                    <div className='flex flex-col gap-[30px]'>
                        <div>
                            <h1 className='text-[20px] text-neutral4 font-semibold'>Alamat Email</h1>
                            <div className='flex gap-1'>
                                <p className='text-[14px]'>Alamat email Anda adalah</p>
                                <p className='text-[14px] text-neutral4 font-semibold'>ihsan@gmail.com</p>
                            </div>
                        </div>
                        <div className='flex flex-col gap-5'>
                            <h1 className='text-[20px] text-neutral4 font-semibold'>Kata Sandi</h1>
                            <form action="">
                                <div className='flex mb-5'>
                                    <div className='flex gap-[52px]'>
                                        <div className='flex flex-col w-[260px] gap-[10px]'>
                                            <label htmlFor="">Kata Sandi</label>
                                            <input type="text" className='rounded-[8px]' />
                                        </div>
                                        <div className='flex flex-col w-[260px] gap-[10px]'>
                                            <label htmlFor="">Kata Sandi Sekarang</label>
                                            <input type="text" className='rounded-[8px]' />
                                        </div>
                                    </div>
                                </div>
                                <p>Tidak ingat kata sandi Anda?<Link className='text-[#6595F0]'> Atur ulang kata sandi Anda</Link></p>
                                <input onClick={(e) => {
                                    e.preventDefault()
                                    savePopUp()
                                }} type="submit" value="Simpan Kata Sandi" className='px-5 py-3 bg-neutral4 text-white rounded-[8px] mt-[30px] cursor-pointer' />
                            </form>
                        </div>
                        <div>
                            <div className='flex flex-col gap-3 w-[380px]'>
                                <h1 className='text-[20px] text-neutral4 font-semibold'>Hapus Akun</h1>
                                <div>
                                    <p className='text-[14px]'>Apakah Anda ingin menghapus akun?</p>
                                    <p className='text-[14px]'>Menghapus akun akan menghilangkan akses kesemua data dan konten yang terkait dengan akun tersebut</p>
                                </div>
                                <div>
                                    <p className='text-[#F73434] text-[14px]'>Saya ingin menghapus akun saya</p>
                                </div>
                                <button onClick={deletePopUp} className='px-5 py-3 bg-neutral4 text-white rounded-[8px] self-start'>Hapus Akun</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Setting
