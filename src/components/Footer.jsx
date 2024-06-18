import { Link } from 'react-router-dom'
import facebook from '../assets/logo/facebook.svg'
import instagram from '../assets/logo/instagram.svg'
import twitter from '../assets/logo/twitter.svg'
import logo3 from '../assets/logo/logo-new.svg'

const Footer = () => {
    return (
        <footer>
            <div className='bg-neutral4 px-[200px] flex justify-between items-center'>
                <img src={logo3} alt="" />
                <div>
                    <p className="text-neutral1 text-center">Copyright &#169; 2024 All Right Reserved <br/>Ever After 2024</p>
                </div>
                <div className="flex gap-3">
                    <img src={facebook} alt="" />
                    <img src={instagram} alt="" />
                    <img src={twitter} alt="" />
                </div>
            </div>
        </footer>
    )
}

export default Footer
