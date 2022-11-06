import React from "react";
import logo from "../assets/logo.png";
import { SocialMedia } from "./ui";
import { TbBrandTelegram } from "react-icons/tb";

const Footer = () => {
  return (
    <footer className="max-w-7xl m-auto py-10 border-t-[1px] border-gray-800">
      <div className="grid px-4 gap-10 lg:py-10 border-b-[1px] border-gray-800 justify-items-center lg:grid-cols-4">
        <div className="space-y-6">
          <div>
            <img src={logo} alt="logo" />
          </div>
          <div>
            Cryptocurrencies are used prim outside existing banking govern
            institutions hanged
          </div>
          <div>
            <SocialMedia />
          </div>
        </div>
        <div>
          <h5 className="mb-6 font-bold text-xl">Catagories</h5>
          <ul className="space-y-3 cursor-pointer">
            <li className="hover:text-violet-700 transition">What is ICO</li>
            <li className="hover:text-violet-700 transition">Tokens</li>
            <li className="hover:text-violet-700 transition">Road Map</li>
            <li className="hover:text-violet-700 transition">Advisor</li>
          </ul>
        </div>
        <div>
          <h5 className="mb-6 font-bold text-xl">Useful Links</h5>
          <ul className="space-y-3 cursor-pointer">
            <li className="hover:text-violet-700 transition">Payment & TAX</li>
            <li className="hover:text-violet-700 transition">
              Terms of Services
            </li>
            <li className="hover:text-violet-700 transition">My Account</li>
            <li className="hover:text-violet-700 transition">Return Policy</li>
          </ul>
        </div>

        <div className="flex flex-col">
          <h5 className="mb-6 font-bold text-xl">Newsletter</h5>
          <p className="mb-6">
            Get now free 20% discount for all products on your first order
          </p>
          <div className="flex justify-between p-2 rounded-full bg-gray-900 ">
            <input
              type="text"
              placeholder="Enter E-mail"
              className="outline-none p-3 rounded-full text-white bg-gray-900"
            />
            <button className="bg-violet-700 rounded-full p-3">
              <TbBrandTelegram size={28} />
            </button>
          </div>
        </div>
      </div>
      <div className="flex justify-around py-3">
        <div>
          © Cryptobit all Rights Reserved. By{" "}
          <span className="text-violet-700 font-bold">Pekur Maks</span>
        </div>
        <button className="hover:text-violet-700 transition">
          Privacy Policy
        </button>
        <button className="hover:text-violet-700 transition">
          Terms & Condition
        </button>
      </div>
    </footer>
  );
};

export default Footer;
