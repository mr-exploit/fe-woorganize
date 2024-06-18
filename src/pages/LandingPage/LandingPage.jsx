import Navbar from './LandingLayout/Navbar'
import Hero from './LandingLayout/Hero'
import Footer from '../../components/Footer'
import Venue from './LandingLayout/Venue'
import Service from './LandingLayout/Service'
import Portfolio from './LandingLayout/Portfolio'
import Testimonials from './LandingLayout/Testimonials'
import { createContext, useState } from 'react'

export const Context = createContext();

const LandingPage = () => {
    const [isLogin, setIslogin] = useState(true)

    return (
        <div className='position: relative'>
            <Context.Provider value={{ isLogin, setIslogin }}>
                <Navbar />
                <Hero />
                <Venue />
                <Service />
                <Portfolio />
                <Testimonials />
                <Footer />
            </Context.Provider>
        </div >
    )
}

export default LandingPage


