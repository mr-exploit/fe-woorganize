

const PortfolioCard = (props) => {

    const { name, url } = props
    return (
        <div className='h-[298px] rounded-lg flex justify-center items-end pb-5' style={{
            backgroundImage: `url(${url})`, backgroundSize: 'cover',
            backgroundRepeat: 'no-repeat'
        }}>
            <div>
                <p className='text-white'>THE WEDDING OF</p>
                <p className='font-boska font-bold text-[24px] text-white'>{name}</p>
            </div>
        </div>
    )
}

export default PortfolioCard
