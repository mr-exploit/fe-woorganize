import PortfolioCard from "./PortfolioCard"
import portfolio1 from "../../../assets/images/portfolio1.png"
import portfolio2 from "../../../assets/images/portfolio2.png"
import portfolio3 from "../../../assets/images/portfolio3.png"
import portfolio4 from "../../../assets/images/portfolio4.png"

const Portfolio = () => {
    return (
        <section className="px-[200px] h-full">
            <div className='py-[50px] bg-neutral1'>
                <p className='text-neutral4 font-semibold text-[20px] mb-5'>Our portfolios</p>
                <div className='grid grid-cols-2 gap-4'>
                    <PortfolioCard
                        name="Joy & Jordan"
                        url={portfolio1}
                    />
                    <PortfolioCard
                        name="Dianne & Michael"
                        url={portfolio2}
                    />
                    <PortfolioCard
                        name="Gabrielle & Simon"
                        url={portfolio3}
                    />
                    <PortfolioCard
                        name="Zee & Adrian"
                        url={portfolio4}
                    />
                </div>
            </div>
        </section>
    )
}

export default Portfolio
