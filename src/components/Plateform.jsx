import React from 'react'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import list from "../../public/List.json";
function Plateform() {
  const filterData=list.filter((data)=>data.category=="free");
  var settings = {
    dots: true,
    infinite: false,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 4,
    initialSlide: 0,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]
  };
  console.log(filterData);
  return (
    <>
    <div className='max-w-screen-2x1 container mx-auto md:px-20 px-4'>
      <h1 className='font-semibold text-xl pb-2'>SPTCONN Offered </h1>
    
    <div>
    <Slider {...settings}>
    
    <div >
  <figure>
    <img
      src="public/Teacher.jpg" className='px-4 px-3 py-3'
      alt="TEACHERS" style={{  height: '28vh' }} />
  </figure>
  <div className="card-body">
    <h2 className="card-title">
      TEACHERS
      <div className="badge badge-secondary">NEW</div>
    </h2>
    <p>Teach classroom moduled helps to connect allumni and professionals</p>
    <div className="card-actions justify-end">
    <div className="cursor-pointer px-2 py-1 rounded-lg border-[2px] hover:bg-orange-600 hover:text-white duration-200">ENROLL NOW</div>
      
    </div>
  </div>
</div>
<div>
  <figure>
    <img
      src="public/Professionals.jpg " className='px-4 px-3 py-3'
      alt="PROFESSIONALS"  style={{  height: '28vh' }} />
  </figure>
  <div className="card-body">
    <h2 className="card-title">
      PROFESSIONALS
      <div className="badge badge-secondary">NEW</div>
    </h2>
    <p>It help to provide industry support and introduce new technology</p>
    <div className="card-actions justify-end">
    <div className="cursor-pointer px-2 py-1 rounded-lg border-[2px] hover:bg-orange-600 hover:text-white duration-200">ENROLL NOW</div>
  
    </div>
  </div>
</div>


<div>
  <figure>
    <img
      src="public/Allumni.jpeg" className='px-4 px-3 py-3'
      alt="Allumni" style={{  height: '28vh' }} />
  </figure>
  <div className="card-body">
    <h2 className="card-title">
      ALLUMNI
      <div className="badge badge-secondary">NEW</div>
    </h2>
    <p>Allumni are the support system of instution it also offering expertise </p>
    <div className="card-actions justify-end">
      <div className="cursor-pointer px-2 py-1 rounded-lg border-[2px] hover:bg-orange-600 hover:text-white duration-200">ENROLL NOW</div>
    </div>
  </div>
</div>


<div>
  <figure>
    <img
      src="Public/Placement.jpg" className='px-4 px-3 py-3'
      alt="Placement"  style={{  height: '28vh' }}/>
  </figure>
  <div className="card-body">
    <h2 className="card-title">
      PLACEMENT
      <div className="badge badge-secondary">NEW</div>
    </h2>
    <p>it gives better placement with the help of teachers, professionals and allumni</p>
    <div className="card-actions justify-end">
    <div className="cursor-pointer px-2 py-1 rounded-lg border-[2px] hover:bg-orange-600 hover:text-white duration-200">ENROLL NOW</div>
    </div>
  </div>
</div>
      </Slider>

    </div>
    </div>
    </>

  )
}

export default Plateform
