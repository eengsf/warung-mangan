import { Cookie } from "next/font/google";
import { motion } from "framer-motion";

const cookie = Cookie({ subsets: ["latin"], weight: "400" });

const HomeText = ({ slide }) => {
  return (
    <>
      <div className="sm:w-7/12 w-full flex flex-col justify-center sm:items-start items-center gap-5 z-10">
        <>
          <motion.h1
            key={slide.name}
            initial={{ y: -40, opacity: 0 }}
            animate={{ y: [-40, 0], opacity: [0, 1] }}
            transition={{ duration: 1, delay: 0 }}
            className={`${cookie.className} md:text-5xl text-4xl  text-my-normal-green`}>
            {slide.name}
          </motion.h1>
          <motion.h1
            key={slide.head}
            initial={{ y: 70, opacity: 0 }}
            animate={{ y: [70, 0], opacity: [0, 1] }}
            transition={{ duration: 1, delay: 1 }}
            className="md:text-5xl text-3xl font-bold">
            {slide.head}
          </motion.h1>
          <motion.h1
            key={slide.desc}
            initial={{ x: 225, opacity: 0 }}
            animate={{ x: [225, 0], opacity: [0, 1] }}
            transition={{ duration: 0.5, delay: 2 }}
            className="lg:text-3xl md:text-2xl text-xl">
            {slide.desc}
          </motion.h1>
          <motion.div
            key={slide.id}
            initial={{ y: 100, opacity: 0 }}
            animate={{ y: [100, 0], opacity: [0, 1] }}
            transition={{ duration: 0.5, delay: 2.25 }}>
            <button className="bg-my-normal-green text-lg px-6 py-3 rounded-full text-center hover:bg-my-dark-green hover:text-my-light-green">
              Order Now
            </button>
          </motion.div>
        </>
      </div>
    </>
  );
};

export default HomeText;
