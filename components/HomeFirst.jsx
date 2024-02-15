"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { useState } from "react";
import HomeText from "./HomeText";

const home1 = {
  id: 1,
  name: "Spicy & Tasty",
  head: "Best Warung Mangan",
  desc: "lorem ipsum dolor sit amet",
  img: "/img/bg-ayam-geprek.png",
};
const home2 = {
  id: 2,
  name: "Fresh & Delicious",
  head: "Welcome To EengSF",
  desc: "lorem ipsum dolor sit quae",
  img: "/img/bg-mie-goreng-original.png",
};

const HomeFirst = () => {
  const [left, setLeft] = useState(true);
  const [right, setRight] = useState(false);

  function handleLeft() {
    setLeft(true);
    setRight(false);
  }
  function handleRight() {
    setLeft(false);
    setRight(true);
  }

  return (
    <>
      <div
        id="home"
        className="flex h-screen m-auto lg:max-w-4xl md:max-w-3xl w-screen relative overflow-x-hidden overflow-y-hidden px-5">
        {left ? <HomeText slide={home1} /> : <HomeText slide={home2} />}

        <div className="absolute  bottom-3 left-1/2 -translate-x-1/2 z-10">
          <button onClick={handleLeft}>
            <div
              className={`w-5 h-5 mx-1 rounded-full relative cursor-pointer ${
                left ? "bg-my-white-green" : "bg-my-dark-green"
              }`}>
              <div
                className={`w-[6px] h-[6px] rounded-full absolute top-1/2 -translate-y-1/2 left-1/2 -translate-x-1/2 ${
                  left ? "bg-my-dark-green" : "bg-my-white-green"
                }`}></div>
            </div>
          </button>
          <button onClick={handleRight}>
            <div
              className={`w-5 h-5 mx-1 rounded-full relative ${
                right ? "bg-my-white-green" : "bg-my-dark-green"
              }`}>
              <div
                className={`w-[6px] h-[6px] rounded-full absolute top-1/2 -translate-y-1/2 left-1/2 -translate-x-1/2 ${
                  right ? "bg-my-dark-green" : "bg-my-white-green"
                }`}></div>
            </div>
          </button>
        </div>
        <motion.div
          initial={{ scale: 0, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          exit={{ scale: 0, opacity: 0 }}
          transition={{ duration: 1, delay: 0 }}
          className="w-5/12 m-auto sm:block z-10 hidden relative">
          <Image
            src={left ? home1.img : home2.img}
            alt="bg"
            width={400}
            height={400}
            priority={false}
          />
        </motion.div>
        <motion.div
          initial={{ scale: 0, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          exit={{ scale: 0, opacity: 0 }}
          transition={{ duration: 1, delay: 0 }}
          className="sm:hidden w-5/6 z-10 absolute top-1/2 -right-1/2 transform -translate-y-1/2">
          <Image
            src={right ? home2.img : home1.img}
            alt="bg"
            width={400}
            height={400}
            priority={false}
          />
        </motion.div>
      </div>
    </>
  );
};

export default HomeFirst;
