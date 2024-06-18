import testiright from '../../../assets/logo/testi-right.svg'
import testileft from '../../../assets/logo/testi-left.svg'

const CardTesti = (props) => {
    const { name, url, text1, text2 } = props
    return (
        <div className='w-full flex justify-center items-center flex-col gap-12 h-full'>
            <div className='text-center'>
                <p className='font-boska font-bold text-[32px] text-neutral4'>Testimonials</p>
                <p className='text-neutral1'>from happy, delighted couples</p>
            </div>
            <div className='w-[776px] text-center position: relative'>
                <img src={testiright} alt="" className='position: absolute right-[-60px]' />
                <img src={testileft} alt="" className='position: absolute left-[-60px]' />
                <p className='text-neutral1'>{text1}</p>
                <br />
                <p className='text-neutral1'>{text2}</p>
            </div>
            <div className='flex flex-col gap-5 justify-center items-center'>
                <img src={url} alt="" />
                <p className='text-neutral1'>{name}</p>
            </div>
        </div>
    )
}

export default CardTesti
