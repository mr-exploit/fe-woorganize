import React from 'react';
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import { Link } from 'react-router-dom';

const Request = () => {
    return (
        <>
            <Header />
            <div className="min-h-screen flex flex-col items-center justify-center bg-white">
                <div className="text-center mb-12 mt-12">
                    <div className="text-neutral-700 text-[55px] font-bold font-['Boska'] leading-normal tracking-widest mb-4">Form Planning</div>
                    <div className="text-neutral-400 text-2xl font-normal font-['Switzer'] leading-normal tracking-wide mb-4">We’d love to hear from you. Please fill out this form.</div>
                    <div className="border-b border-neutral-400 w-2/3 mx-auto"></div>
                </div>
                <form className="w-full max-w-[1289px] flex flex-col items-center px-4 mb-12">
                    <div className="w-full flex flex-col mb-6">
                        <label htmlFor="firstName" className="text-neutral-700 text-[25px] font-medium font-['Switzer'] leading-normal tracking-wide mb-2">First Name</label>
                        <input id="firstName" className="w-full h-[93px] bg-white rounded-[14px] border border-black text-neutral-400 text-[25px] font-medium font-['Switzer'] leading-normal tracking-wide px-6 py-3" type="text" placeholder="First Name" />
                    </div>
                    <div className="w-full flex flex-col mb-6">
                        <label htmlFor="lastName" className="text-neutral-700 text-[25px] font-medium font-['Switzer'] leading-normal tracking-wide mb-2">Last Name</label>
                        <input id="lastName" className="w-full h-[93px] bg-white rounded-[14px] border border-black text-neutral-400 text-[25px] font-medium font-['Switzer'] leading-normal tracking-wide px-6 py-3" type="text" placeholder="Last Name" />
                    </div>
                    <div className="w-full flex flex-col mb-6">
                        <label htmlFor="email" className="text-neutral-700 text-[25px] font-medium font-['Switzer'] leading-normal tracking-wide mb-2">Email</label>
                        <input id="email" className="w-full h-[93px] bg-white rounded-[14px] border border-black text-neutral-400 text-[25px] font-medium font-['Switzer'] leading-normal tracking-wide px-6 py-3" type="text" placeholder="Email" />
                    </div>
                    <div className="w-full flex flex-col mb-6">
                        <label htmlFor="phoneNumber" className="text-neutral-700 text-[25px] font-medium font-['Switzer'] leading-normal tracking-wide mb-2">Phone Number</label>
                        <input id="phoneNumber" className="w-full h-[93px] bg-white rounded-[14px] border border-black text-neutral-400 text-[25px] font-medium font-['Switzer'] leading-normal tracking-wide px-6 py-3" type="text" placeholder="Phone Number" />
                    </div>
                    <div className="w-full flex flex-col mb-6">
                        <label htmlFor="planningConcept" className="text-neutral-700 text-[25px] font-medium font-['Switzer'] leading-normal tracking-wide mb-2">Planning Concept</label>
                        <textarea
                            id="planningConcept"
                            className="w-full bg-white rounded-[14px] border border-black text-neutral-400 text-[25px] font-medium font-['Switzer'] leading-normal tracking-wide px-6 py-3"
                            placeholder="Tulis konsep awal pernikahan yang anda inginkan, sertakan juga tanggal hari H dan kasaran budget anda!"
                            style={{ height: '300px' }}
                        />
                    </div>
                    <Link to="/aform" className="w-full h-[93px] bg-zinc-500 text-white text-[25px] font-medium font-['Switzer'] leading-normal tracking-wide rounded-[14px] px-6 py-3 mt-6 text-center flex items-center justify-center">
                        Submit
                    </Link>
                </form>
                <div className="w-full max-w-[1289px] px-4 text-left mb-12">
                    <div className="text-neutral-700 text-xl font-bold font-['Switzer'] underline leading-normal tracking-wide">
                        Note: Pastikan semua data telah diisi dengan benar!
                    </div>
                </div>
            </div>
            <Footer />
        </>
    );
}

export default Request;
