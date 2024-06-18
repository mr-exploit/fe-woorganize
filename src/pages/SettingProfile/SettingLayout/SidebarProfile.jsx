import logo from '../../../assets/logo/logo-big.svg'
import profile from '../../../assets/logo/profile-icon.svg'
import setting from '../../../assets/logo/setting-icon.svg'
import logout from '../../../assets/icons/logout-icon.svg'
import { NavLink, useNavigate } from 'react-router-dom'
import Swal from 'sweetalert2'

const SidebarProfile = () => {
    const navigate = useNavigate();

    const handlePopup = () => {
        Swal.fire({
            title: "Apakah kamu yakin?",
            text: "Kamu akan keluar dari akun ini!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Iya, keluar!",
            cancelButtonText: 'Batal'
        }).then((result) => {
            if (result.isConfirmed) {
                Swal.fire({
                    title: "Berhasil!",
                    text: "Kamu telah keluar dari akun.",
                    icon: "success"
                });
                navigate("/")
            }
        });
    }

    return (
        <div className='fixed z-10 px-8 py-10 left-0 bottom-0 top-0 border-r border-neutral2 bg-white flex flex-col justify-between items-center'>
            <div className='pt-20'>
                <div className='flex flex-col gap-[38px] justify-center'>
                    <img src={logo} alt="Logo" />
                    <div className='flex flex-col justify-between items-center'>
                        <NavLink
                            to="/user/profile"
                            className={({ isActive }) => isActive ? 'p-[10px] flex gap-3 text-gray-700' : 'p-[10px] flex gap-3 text-neutral3'}
                        >
                            <img src={profile} alt="Profile" />
                            <p>Profile</p>
                        </NavLink>
                        <NavLink
                            to="/user/setting"
                            className={({ isActive }) => isActive ? 'p-[10px] flex gap-3 text-gray-700' : 'p-[10px] flex gap-3 text-neutral3'}
                        >
                            <img src={setting} alt="Setting" />
                            <p>Setting</p>
                        </NavLink>
                    </div>

                </div>
            </div>
            <button onClick={handlePopup} className='flex gap-4'>
                <img src={logout} alt="Setting" />
                <p className='text-[#D55F5A] text-[14px]'>Keluar Akun</p>
            </button>
        </div >
    )
}

export default SidebarProfile
