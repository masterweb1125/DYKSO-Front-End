import React from 'react'
import no_img_available from "../../assets/imgs/no-image-available.jpg";
import profile_avatar from "../../assets/imgs/profile-avatar.jpg";
import profile_pic from "../../assets/imgs/profile-pic.png";
import { LIST } from '../../constant';

const ServiceInfo = ({ service }) => {
  return (
      <div className='wrapper w-[100%] flex md:flex-row flex-col md:gap-3 justify-between py-8'>
          {/* left side (pic) */}
          <div className="pic-section w-[100%] md:w-[48%] rounded-sm">
              <img src={service?.attachment ? service?.attachment : no_img_available} alt='paint-house-pic'/>
          </div>
          {/* right side info section */}
          <div className="service-info w-[100%] md:w-[48%] flex flex-col gap-4 py-8">
              {/* img + title */}
              <div className="img-title flex gap-1 md:gap-5 items-center py-6 border-b border-gray-200">
                  <img src={service?.profileImage ? service?.profileImage :  profile_avatar} alt='paint-house-pic' className='w-[5rem] h-[5rem]  object-cover rounded-full overflow-hidden' />
                  <h2 className='text-[1.4rem] font-normal md:font-semibold tracking-0 md:tracking-wide'>{service?.posterName ? service?.posterName : ""}</h2>
              </div>
              {/* additional info */}
              <div className="info flex flex-col gap-4">
                  <h2 className='text-[1.4rem] '>Additional Information</h2>
                  <p>
                      {service?.service_info ? service.service_info : ""}
                  </p>

                  {/* <ul className='list-disc ml-4 flex flex-col gap-1'>
                      {LIST.map((list) => (
                          <li key={list.id} className='text-[#8D8D8D]'>{list.LIST_DATA}</li>
                     ))}
                  </ul> */}
              </div>
          </div>
    </div>
  )
}

export default ServiceInfo