import React from 'react';
import Link from 'next/link';

const Why = () => {
  return (   
    <section id="why-us" className="why-us section-bg">
    <div className="flex container" data-aos="fade-up">

      <div className="contents row gy-4">

          <div className="flex-1 why-box">
            <h3>Why Choose Makufoods?</h3>
            <p>
              Every home,  family, individuals health is the most expensive currency to live long and see dreams come true. We are here to ensure you have this in addition to your busy schedules. We guarantee your healthy sauces and condiments for fast cooking, your convenience and taste and preferences-African!
            </p>
            <div className="text-center">
              <a href="#" className="more-btn">Learn More <i className="bx bx-chevron-right"></i></a>
            </div>
          </div>

        <div className="contents col-lg-8 d-flex align-items-center">

            <div className="flex-1 col-xl-4" data-aos="fade-up" data-aos-delay="200">
              <div className="icon-box d-flex flex-column justify-content-center align-items-center">
                <i className="bi bi-clipboard-data"></i>
                <h4>Corporis voluptates officia eiusmod</h4>
                <p>Consequuntur sunt aut quasi enim aliquam quae harum pariatur laboris nisi ut aliquip</p>
              </div>
            </div>

            <div className="flex-1 col-xl-4" data-aos="fade-up" data-aos-delay="300">
              <div className="icon-box d-flex flex-column justify-content-center align-items-center">
                <i className="bi bi-gem"></i>
                <h4>Ullamco laboris ladore pan</h4>
                <p>Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt</p>
              </div>
            </div>

            <div className="flex-1 col-xl-4" data-aos="fade-up" data-aos-delay="400">
              <div className="icon-box d-flex flex-column justify-content-center align-items-center">
                <i className="bi bi-inboxes"></i>
                <h4>Labore consequatur incidid dolore</h4>
                <p>Aut suscipit aut cum nemo deleniti aut omnis. Doloribus ut maiores omnis facere</p>
              </div>
            </div>

          </div>
        </div>

      </div>
  </section> 
  )
}

export default Why