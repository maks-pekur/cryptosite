import React from "react";
import { team } from "../constants";
import { motion } from "framer-motion";

const Team = () => {
  return (
    <div id="team" className="max-w-7xl m-auto py-10">
      <motion.h3
        whileInView={{ x: 0 }}
        animate={{ x: "100%" }}
        transition={{ duration: 1.2 }}
        className="text-5xl text-center mb-10 lg:mb-20"
      >
        Team
      </motion.h3>
      <div className="grid grid-cols-2 md:grid-cols-3 gap-y-16 lg:grid-cols-4">
        {team.map((item, index) => (
          <motion.div
            whileInView={{ opacity: 1, scale: 1 }}
            animate={{ opacity: 0, scale: 0.3 }}
            transition={{ duration: 1 }}
            key={item + index}
            className="flex flex-col items-center"
          >
            <div
              style={{ backgroundImage: `url(${item.photo})` }}
              className="h-[170px] w-[170px] bg-no-repeat rounded-full bg-center bg-cover mb-4 lg:scale-110 lg:w-[200px] lg:h-[200px]"
            >
              <div className="bg-violet-700 w-full h-full rounded-full opacity-0 hover:opacity-50 transition duration-500 flex items-center justify-center">
                <div className="text-white"></div>
              </div>
            </div>
            <h5 className="text-xl">{item.name}</h5>
            <h6 className="text-xl text-violet-600">{item.position}</h6>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default Team;
