import { ArrowOutwardIcon } from "@/assets/svg";
import React from "react";

const Footer = () => {
  return (
    <footer className="bg-yellow pt-[104px] pb-8 mt-14">
      <div className="container">
        <span className="text-white text-xl block text-center font-bold">Let’s connect</span>

        <h2 className="text-[27px] leading-9 md:text-4xl text-black text-center mt-16 font-bold tracking-[-2px] lg:racking-[-3px]">We will be stronger if we unite.</h2>

        <address className="font-instrument-serif text-4xl xs:text-[48px] lg:text-[52px] leading-[54px] text-center not-italic tracking-[-3px]">
          <a href="mailto:hey@sajadimanian.com">hey@sajadimanian.com</a>
        </address>

        <ul className="flex items-center justify-center gap-7 mt-10">
          <li className="uppercase font-extrabold tracking-[-1px]">
            <a href="#">Linkedin</a>
          </li>
          <li className="uppercase font-extrabold tracking-[-1px]">
            <a href="#">Instagram</a>
          </li>
          <li className="uppercase font-extrabold tracking-[-1px]">
            <button>X</button>
          </li>
        </ul>

        <div className="flex flex-col lg:flex-row items-center justify-between mt-28 lg:mt-[200px] gap-3">
          <span className="font-extrabold text-grey text-xs xs:text-sm">All rights reserved ©2025</span>
          <p className="font-extrabold text-grey text-xs xs:text-sm flex items-center">
            Design & Development by
            <a className="underline underline-offset-4 ml-1" href="#" target="_blank">
              Omid Kaveh Rad
            </a>
            <ArrowOutwardIcon className="w-3 h-3 fill-blue ml-2" />
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
