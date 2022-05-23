import React, { useEffect, useLayoutEffect, useRef, useState } from "react";
import Main from "../../components/Main";
import Navbar from "../../components/Navbar";
import Values from "../../components/Values";
import consumerBg from "../../img/consumer__bg.png";
import mbBg from "../../img/mbl--bg2.png";
import ourTeam from "../../img/our-team.png";
import officeLocations from "../../img/birds-eye-view.jpg";
import Footer from "../../components/Footer";

const Home = () => {
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

  const [checkWidth, setCheckWidth] = useState(false);

  // const cw = useRef(false);

  // console.log(cw.current);

  const handleResize = () => {
    setWindowWidth((prev) => (prev = window.innerWidth));
  };

  useEffect(() => {
    window.addEventListener("resize", handleResize);
    // console.log(windowWidth);
    if (windowWidth <= 575) {
      setCheckWidth(true);
      // console.log(checkWidth);

      // cw.current = true;
    } else {
      setCheckWidth(false);
      // cw.current = false;
      // console.log(checkWidth);
    }

    // return window.removeEventListener("resize", handleResize);
  }, [windowWidth]);

  return (
    <div>
      <Navbar />
      <Main />

      <div className="customersContainer  bg-[#FFFFFF] pt-10  pb-10">
        <div className="customersHeader flex justify-center items-center pt-10 pb-10">
          <div className="ch  w-full flex flex-col justify-center items-center max-w-[1024px] px-7">
            <h1 className="md:text-3xl text-2xl text-center max-w-[25ch] md:max-w-none mb-6 font-bold">
              Connecting Consumers And Businesses At Scale
            </h1>
            <p className=" text-[1rem] text-center text-[#676767] max-w-[50ch]">
              We build catagory leading e-commerce, retail, payment, POS and
              distribution tech for everyone, everywhere.
            </p>
          </div>
        </div>

        <div className="customerImg r">
          {/* {checkWidth ? (
            <img
              src={mbBg}
              alt="consumerBg"
              className="w-full h-auto max-h-[50rem] block"
            />
          ) : (
            <img src={consumerBg} alt="consumerBg" />
          )} */}

          <img
            src={checkWidth ? mbBg : consumerBg}
            alt="consumerBg"
            className="w-full h-auto max-h-[50rem] block"
          />
        </div>
      </div>

      <Values />

      <div className="ourPeople pt-14 pb-10">
        <img src={ourTeam} alt="Our Team" className="mb-5 w-full h-auto" />
        <p className="text-[#676767] text-center md:w-[60ch] mx-auto md:text-[18px]">
          We are very proud of our diverse, talented and growing team. Watch the
          guys throw some shapes on the about us page.
        </p>
      </div>

      <div className="bg-white pb-16">
        <div className="slogan w-full flex flex-col  items-center pt-10">
          <div className="sloganContainer w-full p-7 max-w-[1320px] flex flex-col md:flex-row   gap-7">
            <div className="sloganLeft md:w-[65%] h-[390px] overflow-hidden ">
              <img
                src={officeLocations}
                alt="officeLocations"
                className="w-full h-full object-cover"
              />
            </div>

            <div className="sloganRight md:ml-5">
              <h2 className="text-3xl font-medium mb-5"># HeretostayBD </h2>
              <p className="md:w-[30ch] font-light text-[#676767] md:text-base text-[15px]">
                We believe Sylhet will become the Tech Hub of Bangladesh and our
                ambition is to become one of the best SAS companies in the
                Country. We are European company but the beating heart of our
                operations will remain in Bangladesh. We believe in honesty,
                creativity, investing in people and mistake lead learning. We
                only hire the best. If that is you, please contact us.
              </p>
            </div>
          </div>
        </div>
      </div>
      {/* End of slogan */}

      {/* Footer starting */}

      <Footer />
    </div>
  );
};

export default Home;
