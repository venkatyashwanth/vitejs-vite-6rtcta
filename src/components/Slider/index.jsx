import { Swiper, SwiperSlide } from 'swiper/react';
// Import required modules
import { Controller } from 'swiper/modules';

// Import required Swiper modules
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper/modules';
import 'swiper/css';
import './index.css';
import { useRef } from 'react';

const Slider = () => {
  const creditCardTopRef = useRef(null);
  const creditCardBottomRef = useRef(null);

  return (
    <>
      <div className="cards-wrapper">
        <Swiper
          grabCursor={true}
          slidesPerView={3}
          direction={'vertical'}
          initialSlide={8}
          speed={200}
          loop={true}
          modules={[Controller]}
          onSwiper={(swiper) => {
            creditCardTopRef.current = swiper;
            if (creditCardBottomRef.current) {
              swiper.controller.control = creditCardBottomRef.current;
            }
          }}
          className="mySwiper"
        >
          <SwiperSlide>
            <div className="credit-card eight">
              <div className="cardElement">card eight</div>
              <div className="cardContent">
                <h3>AU Small Finance Bank Credit Card</h3>
                <ul>
                  <li>
                    Flat 10% Cashback on all Swiggy orders (Food ordering,
                    Instamart, Dineout & Genie)
                  </li>
                  <li>5% Cashback on 1000+ online shopping apps</li>
                </ul>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="credit-card seven">
              <div className="cardElement">card Seven</div>
              <div className="cardContent">
                <h3>AU Small Finance Bank Credit Card</h3>
                <ul>
                  <li>
                    Flat 10% Cashback on all Swiggy orders (Food ordering,
                    Instamart, Dineout & Genie)
                  </li>
                  <li>5% Cashback on 1000+ online shopping apps</li>
                </ul>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="credit-card six">
              <div className="cardElement">card Six</div>
              <div className="cardContent">
                <h3>AU Small Finance Bank Credit Card</h3>
                <ul>
                  <li>
                    Flat 10% Cashback on all Swiggy orders (Food ordering,
                    Instamart, Dineout & Genie)
                  </li>
                  <li>5% Cashback on 1000+ online shopping apps</li>
                </ul>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="credit-card five">
              <div className="cardElement">card five</div>
              <div className="cardContent">
                <h3>AU Small Finance Bank Credit Card</h3>
                <ul>
                  <li>
                    Flat 10% Cashback on all Swiggy orders (Food ordering,
                    Instamart, Dineout & Genie)
                  </li>
                  <li>5% Cashback on 1000+ online shopping apps</li>
                </ul>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="credit-card four">
              <div className="cardElement">card four</div>
              <div className="cardContent">
                <h3>AU Small Finance Bank Credit Card</h3>
                <ul>
                  <li>
                    Flat 10% Cashback on all Swiggy orders (Food ordering,
                    Instamart, Dineout & Genie)
                  </li>
                  <li>5% Cashback on 1000+ online shopping apps</li>
                </ul>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="credit-card three">
              <div className="cardElement">card three</div>
              <div className="cardContent">
                <h3>AU Small Finance Bank Credit Card</h3>
                <ul>
                  <li>
                    Flat 10% Cashback on all Swiggy orders (Food ordering,
                    Instamart, Dineout & Genie)
                  </li>
                  <li>5% Cashback on 1000+ online shopping apps</li>
                </ul>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="credit-card two">
              <div className="cardElement">card two</div>
              <div className="cardContent">
                <h3>AU Small Finance Bank Credit Card</h3>
                <ul>
                  <li>
                    Flat 10% Cashback on all Swiggy orders (Food ordering,
                    Instamart, Dineout & Genie)
                  </li>
                  <li>5% Cashback on 1000+ online shopping apps</li>
                </ul>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="credit-card one">
              <div className="cardElement">card one</div>
              <div className="cardContent">
                <h3>AU Small Finance Bank Credit Card</h3>
                <ul>
                  <li>
                    Flat 10% Cashback on all Swiggy orders (Food ordering,
                    Instamart, Dineout & Genie)
                  </li>
                  <li>5% Cashback on 1000+ online shopping apps</li>
                </ul>
              </div>
            </div>
          </SwiperSlide>
        </Swiper>
      </div>
      {/* <div className="wrapper-text-content">
        <Swiper
          spaceBetween={30}
          initialSlide={8}
          centeredSlides={true}
          modules={[Controller]}
          onSwiper={(swiper) => {
            creditCardBottomRef.current = swiper;
            if (creditCardTopRef.current) {
              swiper.controller.control = creditCardTopRef.current;
            }
          }}
          className="mySwiper2"
        >
          <SwiperSlide>
            <div className="slide-content">slide 8</div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="slide-content">slide 7</div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="slide-content">slide 6</div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="slide-content">slide 5</div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="slide-content">slide 4</div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="slide-content">slide 3</div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="slide-content">slide 2</div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="slide-content">slide 1</div>
          </SwiperSlide>
        </Swiper>
      </div> */}
    </>
  );
};

export default Slider;
