import React from 'react'
import logo3 from '../../../assets/logo/logo-new.svg'
import profile from '../../../assets/images/profile-admin.png'
import { Link } from 'react-router-dom'

const NavbarAdmin = () => {
    return (
        <header className='bg-neutral4 flex justify-between px-[64px] py-[20px] fixed left-0 top-0 right-0 z-20'>
            <img src={logo3} alt="" />
            <div className='flex gap-5 items-center'>
                <div className='flex gap-5'>
                    <Link to={"/admin/profile"}>
                        <div className='flex gap-3 items-center'>
                            <img src={profile} alt="Profile" className='w-[40px]' />
                        </div>
                    </Link>
                </div>
            </div>
        </header>
    )
}

export default NavbarAdmin
