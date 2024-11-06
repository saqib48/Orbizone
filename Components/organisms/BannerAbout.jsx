import React from 'react'

function BannerAbout() {
  return (
    <div className=' my-[8%] mx-4 '>
      <div className="flex flex-col md:flex-row items-center">
        <div className="flex flex-col w-full lg:w-1/3 justify-center items-center md:items-start p-8">
          <h1 className='text-6xl md:text-7xl font-bold mb-5 text-gray-200 first-letter:text-blue-500'>About Us</h1>
        </div>
        <div className="md:mb-0 md:mt-0 ml-0 md:ml-12 lg:w-2/3  justify-center">
          <div className="flex gap-3  ">
            <div className="grid gap-3 mt-[9%] ">
              <div className="overflow-hidden rounded-md w-full  ">
                <img className='h-[300px] w-[280px] object-cover ' src="/assits/images/work1.webp" alt="1" />
              </div>
              <div className="overflow-hidden rounded-md w-full flex justify-end  ">
                <img className='h-[200px] w-[145px] object-cover ' src="/assits/images/work2.webp" alt="2" />
              </div>
            </div>
            <div className="overflow-hidden rounded-md w-[300px] h-[590px] ">
              <video autoPlay muted loop className='w-full h-full object-cover'>
                <source type="video/mp4" src="https://res.cloudinary.com/dqdsf1q5t/video/upload/v1702552860/WhatsApp_Video_2023-12-14_at_16.17.27_601ba76c_bwkrij.mp4" />
              </video>
            </div>
            <div className="grid gap-3 mt-[6%] mb-[5%] ">
              <div className="overflow-hidden rounded-md w-full  ">
                <img className='h-[240px] w-[340px] object-cover ' src="/assits/images/work3.webp" alt="3" />
              </div>
              <div className="overflow-hidden rounded-md w-full  ">
                <img className='h-[240px] w-[145px] object-cover ' src="/assits/images/work 4.webp" alt="4" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default BannerAbout