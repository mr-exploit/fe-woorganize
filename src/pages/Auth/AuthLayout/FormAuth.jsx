import React from "react";
import InputAuth from "./InputAuth";
import background from '../../../assets/images/bg-auth.png';
import logo from '../../../assets/logo/logo-auth.svg';
import { Link } from "react-router-dom";

const FormAuth = (props) => {
    const { name, inputs, details, path, navigation, login = "/" } = props;
    return (
        <div className='flex h-screen'>
            <div className='w-1/2 flex flex-col justify-center items-center' style={{ backgroundImage: `url(${background})` }}>
                <img className="xl:w-[300px] 2xl:w-[450px]" src={logo} alt="" />
                <p className="text-[60px] xl:text-[40px] text-white font-boska font-bold w-[465px] text-center">Selamat Datang di Komunitas Kami</p>
            </div>
            <div className='flex flex-col justify-center p-20 w-1/2'>
                <div className='mb-[30px]'>
                    <h1 className='text-[50px] font-boska font-bold mb-[15px]'>{name}</h1>
                    <p>EverAfter memberikan Anda pengalaman terbaik dalam pernikahan impian Anda!</p>
                </div>
                <div className='flex flex-col 2xl:gap-4 xl:gap-2 mb-10'>
                    {inputs.map((input, index) => (
                        <InputAuth
                            key={index}
                            label={input.label}
                            type={input.type}
                            value={input.value}
                            onChange={input.onChange}
                        />
                    ))}
                    <div className='flex justify-between'>
                        <div className='flex gap-2 items-center'>
                            <input type="checkbox" className='rounded-sm cursor-pointer' />
                            <p>ingatkan saya</p>
                        </div>
                        <p className="text-blue-600">Lupa Kata Sandi?</p>
                    </div>
                </div>
                <div className="mb-10">
                    <button type="submit" className='p-4 px-12 rounded-lg bg-neutral4 text-white'>
                        {name}
                    </button>
                </div>
                <p className="text-gray-600">{details} <Link className="text-blue-600 font-bold" to={path}>{navigation}</Link></p>
            </div>
        </div>
    );
}

export default FormAuth;
