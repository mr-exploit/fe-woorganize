import setting from '../../../assets/logo/setting-icon.svg'
import logout from '../../../assets/icons/logout-icon.svg'
import schedule from '../../../assets/icons/schedule-icon.svg'
import costplan from '../../../assets/icons/costplan-icon.svg'
import concept from '../../../assets/icons/concept-icon.svg'
import request from '../../../assets/icons/form-icon.svg'
import { NavLink, useNavigate } from 'react-router-dom'
import Swal from 'sweetalert2'

const SidebarAdmin = () => {
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
        <div className='px-8 pb-10 pt-14 border-r border-neutral2 bg-white flex flex-col justify-between w-[280px]'>
            <div className='pt-20'>
                <div className='flex flex-col gap-[20px] '>
                    <div className='flex flex-col justify-between'>
                        <NavLink
                            to="/fa1"
                            className={({ isActive }) => isActive ? 'p-[10px] flex gap-3 text-gray-700' : 'p-[10px] flex gap-3 text-neutral3'}
                        >
                            <img className='w-5' src={request} alt="Request" />
                            <p>Request</p>
                        </NavLink>
                        <NavLink
                            to="/dashboard/concept1"
                            className={({ isActive }) => isActive ? 'p-[10px] flex gap-3 text-gray-700' : 'p-[10px] flex gap-3 text-neutral3'}
                        >
                            <img className='w-5' src={concept} alt="Profile" />
                            <p>Concept</p>
                        </NavLink>
                        <NavLink
                            to="/ra1"
                            className={({ isActive }) => isActive ? 'p-[10px] flex gap-3 text-gray-700' : 'p-[10px] flex gap-3 text-neutral3'}
                        >
                            <img className='w-5' src={costplan} alt="CostPlan" />
                            <p>Costplan</p>
                        </NavLink>
                        <NavLink
                            to="/dashboard/schedule1"
                            className={({ isActive }) => isActive ? 'p-[10px] flex gap-3 text-gray-700' : 'p-[10px] flex gap-3 text-neutral3'}
                        >
                            <img className='w-5' src={schedule} alt="Schedule" />
                            <p>Schedule</p>
                        </NavLink>
                    </div>
                </div>
            </div>
            <div className='flex flex-col gap-4'>
                <NavLink to={'/admin/profile'} className='flex gap-3 px-[10px]'>
                    <img className='w-4' src={setting} alt="Setting" />
                    <p className='text-neutral3'>Settings</p>
                </NavLink>
                <button onClick={handlePopup} className='flex gap-3 px-[10px]'>
                    <img src={logout} alt="Setting" />
                    <p className='text-[#D55F5A] text-[14px]'>Keluar Akun</p>
                </button>
            </div>
        </div>
    );
}

export default SidebarAdmin;
