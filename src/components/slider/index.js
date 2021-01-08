import React from 'react'
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import photo1 from '../../assets/img/photos/photo-1.jpg'
import photo2 from '../../assets/img/photos/photo-2.jpg'
import photo3 from '../../assets/img/photos/photo-3.jpg'
import photo4 from '../../assets/img/photos/photo-4.jpg'
import photo5 from '../../assets/img/photos/photo-5.jpg'
import photo6 from '../../assets/img/photos/photo-6.jpg'
import "./slider.css";

function NextArrow(props) {
  const { className, onClick } = props;
  return (
    <img
      src={require('../../assets/img/icons/next_icon.png')}
      className={`${className} next-icon`}
      //   style={{ ...style, display: "block", background: "red" }}
      onClick={onClick}
      alt="next_icon"
    />
  );
}
function PrevArrow(props) {
  const { className, style, onClick } = props;
  return (
    <img
      src={require('../../assets/img/icons/pre_icon.png')}
      className={`${className} prev-icon`}
      style={{ ...style, display: "block", marginRight: "10px" }}
      onClick={onClick}
      alt="prev_icon"
    />
  );
}
const imgs = [
  {
  src:photo1,
  alt:"photo1"
},
  {
  src:photo2,
  alt:"photo2"
},
  {
  src:photo3,
  alt:"photo3"
},
  {
  src:photo4,
  alt:"photo4"
},
  {
  src:photo5,
  alt:"photo5"
},
]
  const CategorySlider = () => {

  var settings = {
    dots: false,
    infinite: false,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          infinite: false,
          dots: false,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
    ],
  };
 
  return (
    <div className="container-fluid mx-0 px-0" data-aos="fade-left" data-aos-delay="100">
    <div
      className={"row justify-content-end px-0 mx-0 "}
    style={{height:'170px'}}
    >
      <div className="col-12 col-md-10 col-lg-10 px-0 mx-0 slider-col">
        {/* <div > */}
          <Slider {...settings}>
            {imgs.map((image, index) => (
             <div className="slider-container">
                <img src={image.src} className="ml-3" width='100%' height="100%" />
                </div>
             
            ))}
          </Slider>
        {/* </div> */}
      </div>
    </div>
    </div>
  );
};

export default CategorySlider;
