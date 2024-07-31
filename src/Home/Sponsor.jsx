import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';
import sponsorimg from '../assets/images/sponsor/01.png'
import sponsorimg1 from '../assets/images/sponsor/02.png'
import sponsorimg2 from '../assets/images/sponsor/03.png'
import sponsorimg3 from '../assets/images/sponsor/04.png'
import sponsorimg4 from '../assets/images/sponsor/05.png'
import sponsorimg5 from '../assets/images/sponsor/06.png'


// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';



// import required modules
import { Autoplay } from 'swiper/modules';

const sponsorList = [
    {
    imgUrl: sponsorimg,
    },
    {
    imgUrl: sponsorimg1,
    },
    {
    imgUrl: sponsorimg2,
    },
    {
    imgUrl: sponsorimg3,
    },
    {
    imgUrl: sponsorimg4,
    },
    {
    imgUrl: sponsorimg5,
    },
    ];

const Sponsor = () => {
  return <div className='sponsor-section section-bg'>
    <div className='container'>
        <div className='section-wrapper'>
            <div className='sponsor-slider'>
            <Swiper
        slidesPerView={2}
        spaceBetween={20}
        autoplay={
            {
                delay: 2000,
                disableOnInteraction:false
            }
        }
        breakpoints={{
          640: {
            slidePreView: 1,
            spaceBetween:20,
          },
          768: {
            slidePreView: 3,
            spaceBetween:40,
          },
          1024: {
            slidePreView: 4,
            spaceBetween:50,
          },
        }}
        modules={[Autoplay]}
        className="mySwiper"
      >
        {
            sponsorList.map((val, i) =>(
                <SwiperSlide key={i}>
                    <div className='sponsor-items'>
                        <div className='sponsor-thumb'>
                            <img src={val.imgUrl} alt="" />

                        </div>

                    </div>
                </SwiperSlide>
            ))
        }
      </Swiper>

            </div>

        </div>

    </div>

  </div>
}

export default Sponsor