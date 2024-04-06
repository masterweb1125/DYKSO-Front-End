import React from 'react'
import paint_house_pic from "../../assets/imgs/paint-house-pic.svg";
import profile_pic from "../../assets/imgs/profile-pic.png";
import { LIST } from '../../constant';

const ServiceInfo = () => {
  return (
      <div className='wrapper w-[100%] flex md:flex-row flex-col md:gap-3 justify-between py-8'>
          {/* left side (pic) */}
          <div className="pic-section w-[100%] md:w-[48%] rounded-sm">
              <img src={paint_house_pic} alt='paint-house-pic'/>
          </div>
          {/* right side info section */}
          <div className="service-info w-[100%] md:w-[48%] flex flex-col gap-4 py-8">
              {/* img + title */}
              <div className="img-title flex gap-1 md:gap-5 items-center py-6 border-b border-gray-200">
                  <img src={profile_pic} alt='paint-house-pic' />
                  <h2 className='text-[1.4rem] font-normal md:font-semibold tracking-0 md:tracking-wide'>Esther Howard</h2>
              </div>
              {/* additional info */}
              <div className="info flex flex-col gap-4">
                  <h2 className='text-[1.4rem] '>Additional Information</h2>

                  <ul className='list-disc ml-4 flex flex-col gap-1'>
                      {LIST.map((list) => (
                          <li key={list.id} className='text-[#8D8D8D]'>{list.LIST_DATA}</li>
                     ))}
                  </ul>
              </div>
          </div>
    </div>
  )
}

export default ServiceInfo