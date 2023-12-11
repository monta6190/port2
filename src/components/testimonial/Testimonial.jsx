import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

export default function Testimonial() {
  var settings = {
    dots: true,
    arrow: false,
    infinite: true,
    speed: 500,
    slidesToShow: 2,
    slidesToScroll: 1,
    autoplay: false,
    responsive: [
      {
        breakpoint: 575,
        settings: {
          arrow: false,
          slidesToShow: 1,
          speed: 300,
        },
      },
    ],
  };

  const testimonialContent = [
    {
      img: "1",
      desc: `Working with Oumayma was an absolute pleasure! She is an incredibly talented interior designer on Fiverr. Oumayma brought my vision to life with her keen eye for detail and innovative ideas. Her dedication to delivering high-quality work was evident throughout the entire process. I'm truly grateful for the beautiful transformation she achieved in my space. `,
      name: "Alvara johanes",
      designation: "Cliente",
      delayAnimation: "",
    },
    {
      img: "2",
      desc: ` Oumayma a dépassé mes attentes. Sa créativité et son professionnalisme ont transformé mon espace de manière incroyable. Je tiens à la remercier chaleureusement pour son travail remarquable`,
      name: "Camille Gigot",
      designation: "Cliente",
      delayAnimation: "100",
    },
    
  ];

  return (
    <Slider {...settings}>
      {testimonialContent.map((val, i) => (
        <li
          key={i}
          data-aos="fade-right"
          data-aos-duration="1200"
          data-aos-delay={val.delayAnimation}
        >
          <div className="list_inner">
            <div className="details">
              <div className="author">
                <div className="image">
                  <div
                    className="main"
                    style={{
                      backgroundImage: `url(${
                        process.env.PUBLIC_URL +
                        `img/testimonials/${val.img}.jpg`
                      })`,
                    }}
                  ></div>
                </div>
                {/* End image */}

                <div className="short">
                  <h3>{val.name}</h3>
                  <span>{val.designation}</span>
                </div>
                {/* End short description */}
              </div>
              {/* End author */}

              <div className="icon">
                <img className="svg" src="img/svg/quote.svg" alt="quote" />
              </div>
              {/* End right quote icon */}
            </div>

            <div className="text">
              <p>{val.desc}</p>
            </div>
            {/* End description */}
          </div>
        </li>
      ))}
    </Slider>
  );
}
