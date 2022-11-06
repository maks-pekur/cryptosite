import React from "react";
import bg from "../assets/features.jpeg";
import { features } from "../constants";
import { motion } from "framer-motion";

const Features = () => {
  return (
    <div style={{ backgroundImage: `url(${bg})` }}>
      <div className="max-w-7xl m-auto px-4 lg:h-screen w-full overflow-hidden py-10">
        <div className="text-[#6c5ce7] text-xl uppercase text-center mb-6">
          FEAUTERS
        </div>
        <motion.h3
          whileInView={{ x: 0 }}
          animate={{ x: 700 }}
          transition={{ duration: 1.2 }}
          className="text-5xl text-center mb-10 lg:mb-20"
        >
          We Take Care Quality
        </motion.h3>
        <div className="grid gap-10 lg:grid-cols-3">
          {features.map(({ id, title, description, icon }) => (
            <motion.div
              whileInView={{ x: 0 }}
              animate={{ x: -500 }}
              transition={{ duration: 1 }}
              key={id}
              className="flex flex-col items-center rounded-lg p-10 relative"
            >
              <div className="w-[80px] h-[80px] rounded-full bg-slate-900 mb-6 flex items-center justify-center">
                <img src={icon} alt="icon" className="" />
              </div>
              <h4 className="text-xl font-bold mb-4">{title}</h4>
              <p className="text-center text-gray-400">{description}</p>
              <div className="absolute top-0 left-0 bottom-0 right-0 bg-slate-600 opacity-10 rounded-xl"></div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Features;
