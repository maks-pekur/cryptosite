import React from "react";
import bit from "../assets/crypto.png";
import phone from "../assets/crypto-2.png";
import bg from "../assets/bg.jpeg";
import { Button } from "../components/ui";
import { motion } from "framer-motion";

const Home = () => {
  return (
    <div style={{ backgroundImage: `url(${bg})` }}>
      <div
        id="home"
        className="max-w-7xl m-auto px-4 h-[100vh] pt-20 overflow-hidden lg:pt-10"
      >
        <div className="flex flex-col lg:flex-row lg:items-center">
          <motion.div
            initial={{ x: -500 }}
            animate={{ x: 0 }}
            transition={{ duration: 0.8 }}
            className="space-y-4 mb-10 flex flex-col items-center lg:items-start lg:space-y-10 lg:mb-0"
          >
            <h1 className="text-4xl lg:text-6xl font-bold pt-10">
              The Best Trading Cryptocurrency Resource
            </h1>
            <p className="text-xl text-gray-500">
              Cryptography, encryption process of transforming information
              referred to as plaintext using done.
            </p>
            <motion.div
              initial={{ x: -700 }}
              animate={{ x: 0 }}
              transition={{ duration: 1.5 }}
            >
              <Button text={"Get Started Now"} />
            </motion.div>
          </motion.div>

          <div className="h-full w-full flex pt-20 space-x-6">
            <motion.div
              initial={{ y: -700 }}
              animate={{ y: 0 }}
              transition={{ duration: 1.5 }}
              className=""
            >
              <motion.img
                animate={{ rotate: 360 }}
                transition={{ duration: 4, repeat: Infinity }}
                src={bit}
                alt="bit"
                className="w-[120px] object-contain"
              />
            </motion.div>
            <motion.div
              initial={{ y: 700 }}
              animate={{ y: 0 }}
              transition={{ duration: 0.8 }}
              className="w-full flex justify-end lg:pt-10"
            >
              <img src={phone} alt="phone" className="object-contain scale-125 lg:scale-110" />
            </motion.div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
