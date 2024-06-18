import bgservice from "../../../assets/images/bg-service.png";

const Service = () => {
  return (
    <>
      <section className='h-[547px] mt-[60px] flex justify-center items-center' style={{
        backgroundImage: `url(${bgservice})`, backgroundSize: 'cover'
      }}>
        <div className='w-[1100px] bg-neutral1 py-3 rounded-lg flex mt-14'>
          <div className="px-8 py-6">
            <p className='text-[32px] font-boska text-neutral4 font-bold'>Services</p>
            <p className='text-neutral3 text-[16px] w-[214px]'>to plan and orchestrate your special occasion</p>
          </div>
        </div>
      </section>
    </>
  );
};
