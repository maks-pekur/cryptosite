import React from "react";
import map from "../assets/users.png";
import bit from "../assets/bit.png";
import { Button } from "../components/ui";
import { motion } from "framer-motion";

const Users = () => {
  return (
    <div id="users" className="max-w-7xl m-auto py-10 px-4 lg:h-screen">
      <div className="text-[#6c5ce7] text-xl uppercase">USERS</div>
      <div className="grid lg:grid-cols-2 gap-6">
        <div className="my-10 lg:mt-20 img-anim-updown">
          <img src={map} alt="" />
        </div>
        <motion.div
          whileInView={{ x: 0 }}
          animate={{ x: "100%" }}
          transition={{ duration: 1.2 }}
          className="space-y-8"
        >
          <h3 className="text-5xl">
            Our best users all over the World Coverages
          </h3>
          <p className="text-gray-500">
            Credibly streamline premium innovation and client-focused the.
            Intrinsicly integrate end-to-end synergy whereas low-risk highs
            sources phosfluorescently.
          </p>
          <div className="grid grid-cols-2 gap-6 place-items-center">
            <div className="flex space-x-2 items-center">
              <img src={bit} alt="bit" />
              <span>Binance Smart Chain</span>
            </div>
            <div className="flex space-x-2 items-center">
              <img src={bit} alt="bit" />
              <span>Exchange Money</span>
            </div>
            <div className="flex space-x-2 items-center">
              <img src={bit} alt="bit" />
              <span>Coin Entherium</span>
            </div>
            <div className="flex space-x-2 items-center">
              <img src={bit} alt="bit" />
              <span>OKEX Block Chain</span>
            </div>
          </div>
          <div className="flex justify-center">
            <Button text={"Learn more"} />
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default Users;
