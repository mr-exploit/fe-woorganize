import React, { useContext } from 'react';
import logo2 from "../../../assets/logo/logo2.png";
import { Link } from 'react-router-dom';
import { Context } from '../LandingPage'

const Navbar = () => {
    const { isLogin, setIslogin } = useContext(Context);

    const linkNav = [
        { id: 1, name: "Concept", path: "/concept" },
        { id: 2, name: "Schedule", path: "/schedule" },
        { id: 3, name: "Cost Plan", path: "/costplan" },
        { id: 4, name: "Portfolios", path: "/portfolios" },
        { id: 5, name: "Services", path: "/services" },
        { id: 6, name: "Testimonials", path: "/testimonials" }
    ];

    const filteredLinks = isLogin ? linkNav.slice(0, 3) : linkNav.slice(3);

    return (
        <div className='flex justify-between absolute top-0 left-0 right-0 px-[64px] py-6'>
            <img src={logo2} alt="Logo" />
            <div className='flex gap-5 items-center'>
                <ul className='flex gap-10'>
                    {filteredLinks.map((link) => (
                        <Link to={link.path} key={link.id} className='text-white'>
                            {link.name}
                        </Link>
                    ))}
                </ul>
                <div className='flex gap-5'>
                    {isLogin ? (
                        <Link to={"/user/profile"} className='text-white'>My Profile</Link>
                    ) : (
                        <>
                            <Link to={"/signup"} className='text-white'>Sign Up</Link>
                            <Link to={'/login'} className='text-white'>Login</Link>
                        </>
                    )}
                </div>
            </div>
        </div>
    );
};

export default Navbar;
