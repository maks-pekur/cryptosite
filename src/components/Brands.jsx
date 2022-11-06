import React from "react";
import brandsBg from "../assets/brands-bg.png";
import { brands } from "../constants";
import { motion } from "framer-motion";

const Brands = () => {
  return (
    <div className="px-4">
      <div
        style={{ backgroundImage: `url(${brandsBg})` }}
        className="max-w-6xl bg-no-repeat m-auto rounded-xl grid grid-cols-2 gap-10 p-8"
      >
        {brands.map(({ id, img }) => (
          <motion.div
            whileInView={{ opacity: [0, 1] }}
            transition={{ duration: 1.5 }}
            key={id}
            className="flex items-center justify-center"
          >
            <img src={img} alt="brand" className="" />
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default Brands;
