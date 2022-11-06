import React from "react";
import { market } from "../constants";
import arrowUp from "../assets/arrow-up.png";
import arrowDown from "../assets/arrow-down.png";
import { motion } from "framer-motion";

const Market = () => {
  return (
    <div id="market" className="max-w-7xl m-auto py-10">
      <div className="px-4">
        <div>
          <div className="text-[#6c5ce7] text-xl uppercase mb-4">MARKET</div>
          <motion.h3
            whileInView={{ x: 0 }}
            animate={{ x: "100%" }}
            transition={{ duration: 1.2 }}
            className="text-5xl text-center mb-10 lg:mb-20"
          >
            Curent Market
          </motion.h3>
        </div>
        <motion.div
          whileInView={{ x: 0 }}
          animate={{ x: "-100%" }}
          transition={{ duration: 1.2 }}
          className="grid grid-cols-3 md:grid-cols-4 lg:grid-cols-6 text-xl p-6"
        >
          <div className="col-span-2 ml-20">Curency</div>
          <div className="hidden sm:block">24H Change</div>
          <div className="text-center hidden md:block">Market Cap</div>
          <div className="text-center hidden lg:block">T Supply</div>
          <div className="text-center hidden lg:block">24H Volume</div>
        </motion.div>
        <div className="space-y-5">
          {market.map(
            ({ id, icon, title, price, change, cap, supply, volume }) => (
              <motion.div
                whileInView={{ opacity: 1, scale: 1 }}
                animate={{ opacity: 0, scale: 0.6 }}
                transition={{ duration: 1 }}
                key={id}
                className="grid sm:grid-cols-3 md:grid-cols-4 items-center gap-2 bg-[#171122] px-8 py-5 rounded-xl lg:grid-cols-6 "
              >
                <div className="flex items-center sm:col-span-2">
                  <img src={icon} alt="icon" className="mr-4" />
                  <div className="flex flex-col">
                    <div className="text-xl mb-2">{title}</div>
                    <div>
                      PRICE = <span className="text-gray-500">{price}</span>
                    </div>
                  </div>
                </div>

                <div
                  className={`text-center sm:flex items-center hidden ${
                    change < 4 ? "text-red-500" : "text-green-500"
                  }`}
                >
                  <img
                    src={change < 4 ? arrowDown : arrowUp}
                    alt="arrow"
                    className="mr-2 hidden sm:block"
                  />
                  {change} %
                </div>
                <div className="text-center hidden md:block">{cap}</div>
                <div className="text-center hidden lg:block">{supply}</div>
                <div className="text-center hidden lg:block">{volume}</div>
              </motion.div>
            )
          )}
        </div>
      </div>
    </div>
  );
};

export default Market;
