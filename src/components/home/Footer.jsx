"use client";
import { Send } from "lucide-react";
import { Inter, Poppins } from "next/font/google";
import React, { useState } from "react";
import { Toaster, toast } from "sonner";

const inter = Inter({
  weight: "800",
});
const popins = Poppins({
  weight: "500",
});

const Footer = () => {
  const validEmail =
    /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[A-Za-z]{2,})+$/;
  const [email, setEmail] = useState("");
  const handleEmail = (e) => {
    setEmail(e.target.value);
  };
  const customToast = () => {
    if (validEmail.test(email)) {
      toast.success(`Thank you for join us. Your Email is ${email}`);
      setEmail("");
    } else {
      toast.error("Please provide us a valid email");
    }
  };
  return (
    <footer className="bg-[black]">
      <div className="container">
        <div className="py-20">
          <div className="">
            <div className="flex flex-col gap-[24px]">
              <h1
                className={`text-[24px] text-white leading-[24px] tracking-[3%] ${inter.className}`}
              >
                Exclusive
              </h1>
              <p
                className={`text-white text-[20px] leading-[28px] ${popins.className}`}
              >
                Subscribe
              </p>
              <p className="text-base leading-[24px] text-[#fafafa]">
                Get 10% off your first order
              </p>
            </div>
            <div className="w-[220px] border border-white rounded-[4px] mt-4 py-2 px-3 flex gap-8">
              <input
                onChange={handleEmail}
                className="min-w-[130px] outline-none focus:outline-0 text-white"
                type="text"
                placeholder="Enter your email"
              />
              <button className="cursor-pointer" onClick={customToast}>
                <Send color="#ffffff" strokeWidth={1.25} />
              </button>
              <Toaster richColors />
            </div>
          </div>
          <ul></ul>
          <ul></ul>
          <ul></ul>
          <div></div>
        </div>
      </div>
      <div></div>
    </footer>
  );
};

export default Footer;
