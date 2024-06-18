import React from 'react'
import logo3 from '../assets/logo/logo-new.svg'
import profile from '../assets/icons/profile-icon.svg'
import { Link } from 'react-router-dom'

const Header = () => {
    const linkNav = [{
        id: 1,
        name: "Concept",
        path: "/concept"
    }, {
        id: 2,
        name: "Schedule",
        path: "/schedule"
    }, {
        id: 3,
        name: "Cost Plan",
        path: "/costplan"
    }
    ]
    return (
        <header className='bg-neutral4 flex justify-between px-[64px] py-[20px]'>
            <Link to={'/'}>
                <img src={logo3} alt="" />
            </Link>
            <div className='flex gap-5 items-center'>
                <ul className='flex gap-10'>
                    {linkNav.map((link) => {
                        return (
                            <Link to={link.path} key={link.id} className=' text-white'>{link.name}</Link>
                        )
                    })}
                </ul>
                <div className='flex gap-5'>
                <img src={profile} alt="" />
                </div>
            </div>
        </header>
    )
}

export default Header
