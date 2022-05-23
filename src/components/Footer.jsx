import React, { useEffect, useState } from "react";
import pika from "../img/location.png";
import { FaFacebook, FaLinkedin, FaYoutube } from "react-icons/fa";
import { Link } from "react-router-dom";
const Footer = () => {
  const [mbWidth, setMbWidth] = useState(false);
  const [dsWidth, setDSWidth] = useState(false);

  const [windowWidth, setWindowWidth] = useState(window.innerWidth);
  const changeWidth = () => {
    setWindowWidth(window.innerWidth);
  };

  useEffect(() => {
    window.addEventListener("resize", changeWidth);
  }, [windowWidth]);
  const [loc, setLoc] = useState([
    {
      img: { pika },
      place: (
        <p>
          <span className="block">Bangladesh Office</span>
          <span className="block">9/A-2 8th floor,</span>
          <span className="block">Ananda Tower Shopping</span>
          <span className="block">Complex,</span>
          <span className="block">Dhupadighir Uttor Par, Sylhet</span>
        </p>
      ),
    },

    {
      img: { pika },
      place: (
        <p>
          <span className="block">United Kingdom Office</span>
          <span className="block">Fairbourne Drive,</span>
          <span className="block"> Atterbury,</span>
          <span className="block"> Milton Keynes,</span>
          <span className="block"> MK10 9RG</span>
        </p>
      ),
    },
  ]);
  return (
    <div className="footer w-full bg-[#271932] flex flex-col justify-center items-center pt-14 pb-10">
      <div className="footerContainer w-full max-w-[1320px] flex flex-col lg:flex-row justify-center lg:justify-between items-center lg:items-start px-7  text-white">
        <div className="location">
          <h3 className="mb-6 lg:text-[1.2rem] text-[1rem] text-[#f2f2f2] capitalize lg:text-left text-center">
            Get in touch with us
          </h3>

          <div className="flex sm:flex-row lg:flex-col justify-center items-start w-full">
            {Array.from({ length: 2 }, (item, i) => {
              return (
                <div
                  key={i}
                  className=" pl flex items-start mb-8 gap-3 lg:gap-5 "
                >
                  <div className="imgLocation w-[36px] h-[36px] leading-[56px] text-center rounded-[50%] bg-[#70707038] flex justify-center items-center ">
                    <img
                      src={pika}
                      alt="location"
                      className="w-5 h-5 lg:w-7 lg:h-7 object-contain brightness-50"
                    />
                  </div>
                  <div className="text-[#ffffff80]">{loc[i].place}</div>
                </div>
              );
            })}
          </div>
        </div>

        {windowWidth >= 1024 ? (
          <>
            <div className="social flex flex-col gap-5">
              <div className="socialHeader">
                <h3 className="text-[#f2f2f2] lg:text-[1.2rem] text-[1rem]">
                  Find us on
                </h3>
              </div>
              <ul className="flex justify-center items-center gap-5">
                <li className=" w-[3.2rem] h-[3.3rem]  rounded-[50%] bg-[#70707038] flex justify-center items-center">
                  <a href="www.facebook.com" className="text-[#72697A] ">
                    <FaFacebook className="text-3xl" />
                  </a>
                </li>
                {/* <li></li>
            <li></li> */}

                <li className=" w-[3.2rem] h-[3.3rem]  rounded-[50%] bg-[#70707038] flex justify-center items-center">
                  <a href="www.facebook.com" className="text-[#72697A] ">
                    <FaYoutube className="text-3xl" />
                  </a>
                </li>

                <li className=" w-[3.2rem] h-[3.3rem]  rounded-[50%] bg-[#70707038] flex justify-center items-center">
                  <a href="www.facebook.com" className="text-[#72697A] ">
                    <FaLinkedin className="text-3xl" />
                  </a>
                </li>
              </ul>
            </div>
            <div className="quickLinks flex flex-col justify-center items-start gap-5">
              <div className="quickHeader">
                <h3 className="text-[#f2f2f2] lg:text-[1.2rem] text-[1rem]">
                  Quick Links
                </h3>
              </div>

              <ul className="flex flex-col gap-2 text-[#72697A] ">
                <Link
                  to="/about"
                  className="cursor- hover:text-white transition-all"
                >
                  About
                </Link>

                <Link
                  to="/career"
                  className=" cursor- hover:text-white transition-all"
                >
                  Privacy
                </Link>

                <Link
                  to="/mission"
                  className="cursor- hover:text-white transition-all"
                >
                  Disclaimer
                </Link>

                <Link
                  to="/people"
                  className=" cursor- hover:text-white transition-all"
                >
                  Contact
                </Link>
              </ul>
            </div>
          </>
        ) : (
          <div className="calss w-full flex justify-evenly items-start  mt-11">
            <div className="social flex flex-col gap-5">
              <div className="socialHeader">
                <h3 className="text-[#f2f2f2] lg:text-[1.2rem] text-[1rem]">
                  Find us on
                </h3>
              </div>
              <ul className="flex justify-center items-center gap-5">
                <li className=" w-[2.2rem] h-[2.3rem]  rounded-[50%] bg-[#70707038] flex justify-center items-center">
                  <a href="www.facebook.com" className="text-[#72697A] ">
                    <FaFacebook className="text-xl" />
                  </a>
                </li>
                {/* <li></li>
            <li></li> */}

                <li className=" w-[2.2rem] h-[2.3rem]  rounded-[50%] bg-[#70707038] flex justify-center items-center">
                  <a href="www.facebook.com" className="text-[#72697A] ">
                    <FaYoutube className="text-xl" />
                  </a>
                </li>

                <li className=" w-[2.2rem] h-[2.3rem]  rounded-[50%] bg-[#70707038] flex justify-center items-center">
                  <a href="www.facebook.com" className="text-[#72697A] ">
                    <FaLinkedin className="text-xl" />
                  </a>
                </li>
              </ul>
            </div>
            <div className="quickLinks flex flex-col justify-center items-start gap-5">
              <div className="quickHeader">
                <h3 className="text-[#f2f2f2] lg:text-[1.2rem] text-[1rem]">
                  Quick Links
                </h3>
              </div>

              <ul className="flex flex-col gap-2 text-[#72697A] ">
                <Link
                  to="/about"
                  className="cursor- hover:text-white transition-all"
                >
                  About
                </Link>

                <Link
                  to="/career"
                  className=" cursor- hover:text-white transition-all"
                >
                  Privacy
                </Link>

                <Link
                  to="/mission"
                  className="cursor- hover:text-white transition-all"
                >
                  Disclaimer
                </Link>

                <Link
                  to="/people"
                  className=" cursor- hover:text-white transition-all"
                >
                  Contact
                </Link>
              </ul>
            </div>
          </div>
        )}
      </div>
      <div className="coprightContainer w-full flex flex-col justify-center items-center">
        <div className="copright w-full max-w-[1320px] px-7 border-t-[1px] mt-10 flex flex-col justify-center items-center border-[#ffffff3d]">
          <p className="text-[#ffffff3d] flex flex-col justify-center items-center mt-9">
            Copyright © YoTech™ All rights reserved.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Footer;
