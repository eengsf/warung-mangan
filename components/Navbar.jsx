"use client";

import { useState, useEffect } from "react";
import NavbarList from "./NavbarList";
import { Cookie } from "next/font/google";
// import Header from "./Header";
const cookie = Cookie({ subsets: ["latin"], weight: "400" });

const Nabvar = () => {
  const [showLayer, setShowLayer] = useState(false);

  function handleChange() {
    setShowLayer(!showLayer);
  }

  const [scroll, setScroll] = useState();
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 90) {
        setScroll(true);
      } else {
        setScroll(false);
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <>
      <div
        className={`${
          scroll
            ? "fixed top-0 w-screen bg-black opacity-90 text-white z-30"
            : ""
        } `}>
        <div
          className={`lg:max-w-4xl md:max-w-3xl w-screen flex justify-between items-center px-10 py-5 m-auto z-30`}>
          <div className="lg:w-full">
            <div className="lg:hidden cursor-pointer ">
              <h1 className={`${cookie.className} font-bold text-4xl`}>
                EengSF
              </h1>
            </div>
            <div className="hidden lg:block">
              <ul className="flex justify-center gap-10 text-center text-[16px]">
                <NavbarList eengsf={false} showLayer={showLayer} />
              </ul>
            </div>
            <div className="lg:hidden block">
              <ul
                className={`${
                  showLayer
                    ? "translate-x-0 transition-all duration-500"
                    : "translate-x-full transition-all duration-500"
                } flex flex-col justify-evenly gap-10 text-[16px] z-20 fixed right-0 top-0 ps-10 pt-20 w-[50%] h-screen bg-black`}>
                <NavbarList eengsf={true} showLayer={showLayer} />
              </ul>
            </div>
          </div>

          <label htmlFor="burger" className={`z-30 lg:hidden cursor-pointer`}>
            <input
              type="checkbox"
              checked={showLayer}
              onChange={handleChange}
              id="burger"
              className="hidden"
            />
            <span
              className={`${
                scroll || showLayer ? "bg-white" : "bg-black"
              }  w-6 h-[3px] block mb-[4px] rounded-sm ${
                showLayer
                  ? "transform origin-top-left rotate-45 transition duration-1000 translate-x-px -translate-y-[2px]"
                  : "transform origin-top-left transition duration-1000"
              }`}></span>
            <span
              className={`${
                scroll || showLayer ? "bg-white" : "bg-black"
              } w-6 h-[3px] block mb-[4px] rounded-sm ${
                showLayer
                  ? "transform scale-0 opacity-0 transition duration-1000"
                  : "transform scale-100 opacity-100 transition duration-1000"
              }`}></span>
            <span
              className={`${
                scroll || showLayer ? "bg-white" : "bg-black"
              } w-6 h-[3px] block mb-[4px] rounded-sm ${
                showLayer
                  ? "transform origin-top-left -rotate-45 transition duration-1000 -translate-x-px translate-y-px"
                  : "transform origin-top-left transition duration-1000"
              }`}></span>
          </label>
        </div>
      </div>
    </>
  );
};

export default Nabvar;
