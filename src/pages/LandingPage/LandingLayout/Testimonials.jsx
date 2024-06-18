import React from 'react'
import { Carousel } from 'flowbite-react'
import testi1 from '../../../assets/images/testi1.png'
import CardTesti from './CardTesti'
const Testimonials = () => {
    return (
        <div className="h-[554px] bg-primary1 flex justify-center items-center">
            <Carousel>
                <CardTesti
                    text1="Kami sangat puas dengan pelayanan yang diberikan oleh Wedding Organizer ini. Mereka sangat profesional dalam menyusun setiap detail acara pernikahan kami. Dari pemilihan tema hingga pelaksanaan acara, semuanya berjalan dengan mulus. Terima kasih banyak atas dedikasi dan kerja keras tim Wedding Organizer!"
                    text2="Semoga Wedding Organizer ini terus sukses dalam membantu calon pengantin lain mewujudkan pernikahan impian mereka!"
                    url={testi1}
                    name="Rizki Bashir"
                />
                <CardTesti
                    text1="Kami sangat puas dengan pelayanan yang diberikan oleh Wedding Organizer ini. Mereka sangat profesional dalam menyusun setiap detail acara pernikahan kami."
                    text2="Semoga Wedding Organizer ini terus sukses dalam membantu calon pengantin lain mewujudkan pernikahan impian mereka!"
                    url={testi1}
                    name="Rizki Bashir"
                />
                <CardTesti
                    text1="Kami sangat puas dengan pelayanan yang diberikan oleh Wedding Organizer ini. Mereka sangat profesional dalam menyusun setiap detail acara pernikahan kami. Dari pemilihan tema hingga pelaksanaan acara, semuanya berjalan dengan mulus. Terima kasih banyak atas dedikasi dan kerja keras tim Wedding Organizer!"
                    text2="Semoga Wedding Organizer ini terus sukses dalam membantu calon pengantin lain mewujudkan pernikahan impian mereka!"
                    url={testi1}
                    name="Rizki Bashir"
                />
            </Carousel>
        </div>
    )
}

export default Testimonials
