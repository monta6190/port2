import React from "react";
import ReactTooltip from "react-tooltip";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const Portfolio = () => {
  var settings = {
    dots: false,
    arrow: true,
    infinite: true,
    speed: 800,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: false,
    draggable: false,
    responsive: [
      {
        breakpoint: 575,
        settings: {
          slidesToShow: 1,
          arrow: false,
          autoplay: false,
          draggable: true,
          speed: 300,
          dots: true,
        },
      },
    ],
  };

  return (
    <div className="portfolio_inner my_carousel gallery_zoom">
      <ul data-aos="fade-right" data-aos-duration="1200">
        <Slider {...settings}>
          <li>
            <div className="list_inner">
              <div className="image">
                <a
                  href="https://www.linkedin.com/feed/update/urn:li:activity:7116834578375303168/"
                  target="_blank"
                  rel="noreferrer"
                  className="details"
                >
                  <img
                    src="img/portfolio/select1.jpeg"
                    data-tip
                    data-for="product"
                    alt="portfolio"
                  />
                  <ReactTooltip
                    id="product"
                    place="bottom"
                    type="light"
                    effect="float"
                    className="tooltip-wrapper"
                  >
                    
                  </ReactTooltip>
                </a>
              </div>
            </div>
          </li>
          {/* End li */}

          <li>
            <div className="list_inner">
              <div className="image">
                <a
                  href="https://www.linkedin.com/feed/update/urn:li:activity:7111076399737630721/"
                  target="_blank"
                  rel="noreferrer"
                  className="details"
                >
                  <img
                    src="img/portfolio/select2.jpeg"
                    data-tip
                    data-for="dribbble"
                    alt="portfolio"
                  />
                  <ReactTooltip
                    id="dribbble"
                    place="bottom"
                    type="light"
                    effect="float"
                    className="tooltip-wrapper"
                  >
                   
                  </ReactTooltip>
                </a>
              </div>
            </div>
          </li>
          {/* End li */}

         
          {/* End li */}

          

          <li>
            <div className="list_inner">
              <div className="image">
                <a
                  href="https://www.linkedin.com/feed/update/urn:li:activity:7116834578375303168/"
                  target="_blank"
                  rel="noreferrer"
                  className="details"
                >
                  <img
                    src="img/portfolio/select3.jpeg"
                    data-tip
                    data-for="web"
                    alt="portfolio"
                  />
                  <ReactTooltip
                    id="web"
                    place="bottom"
                    type="light"
                    effect="float"
                    className="tooltip-wrapper"
                  >
                   
                  </ReactTooltip>
                </a>
              </div>
            </div>
          </li>
          {/* End li */}
        </Slider>
      </ul>
    </div>
  );
};

export default Portfolio;
