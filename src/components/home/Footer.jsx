"use client";
import { Facebook, Instagram, Linkedin, Send, Twitter } from "lucide-react";
import { Inter, Poppins } from "next/font/google";
import React, { useState } from "react";
import { Toaster, toast } from "sonner";
import qr_code from "../../assets/qr_code.png";
import Image from "next/image";

const inter = Inter({
  weight: "800",
  subsets: ["latin"],
});

const poppins = Poppins({
  weight: ["400", "500"],
  subsets: ["latin"],
});

const EMAIL_REGEX =
  /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[A-Za-z]{2,})+$/;

const SOCIAL_LINKS = [
  { Icon: Facebook, url: "https://www.facebook.com/", label: "Facebook" },
  { Icon: Twitter, url: "https://x.com/", label: "Twitter" },
  { Icon: Instagram, url: "https://www.instagram.com/", label: "Instagram" },
  { Icon: Linkedin, url: "https://www.linkedin.com/", label: "LinkedIn" },
];

const ACCOUNT_LINKS = [
  "My Account",
  "Login / Register",
  "Cart",
  "Wishlist",
  "Shop",
];

const QUICK_LINKS = ["Privacy Policy", "Terms Of Use", "FAQ", "Contact"];

const Footer = () => {
  const [email, setEmail] = useState("");

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handleSubmit = () => {
    if (EMAIL_REGEX.test(email)) {
      toast.success(`Thank you for joining us! Your email is ${email}`);
      setEmail("");
    } else {
      toast.error("Please provide a valid email address");
    }
  };

  const handleKeyPress = (e) => {
    if (e.key === "Enter") {
      handleSubmit();
    }
  };

  return (
    <footer className="bg-black text-white">
      <div className="container mx-auto px-4">
        <div className="py-12 md:py-16 lg:py-20 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-[87px] lg:gap-12">
          <div className="sm:col-span-2 lg:col-span-1">
            <div className="flex flex-col gap-4 md:gap-6">
              <h1 className={`${inter.className} text-2xl tracking-wide`}>
                Exclusive
              </h1>
              <p className={`${poppins.className} text-xl`}>Subscribe</p>
              <p className="text-base text-gray-200">
                Get 10% off your first order
              </p>
            </div>

            <div className="mt-4">
              <div className="flex items-center border border-white px-3 rounded bg-transparent min-w-[240px]">
                <input
                  onChange={handleEmailChange}
                  onKeyPress={handleKeyPress}
                  value={email}
                  className="flex-1 bg-transparent outline-none py-2 text-white placeholder:text-gray-400"
                  type="email"
                  placeholder="Enter your email"
                  aria-label="Email subscription"
                />
                <button
                  onClick={handleSubmit}
                  className="px-3 py-2 hover:opacity-80 transition-opacity"
                  aria-label="Submit email"
                >
                  <Send size={20} strokeWidth={1.25} />
                </button>
              </div>
            </div>
            <Toaster richColors position="top-center" />
          </div>

          <div>
            <h4 className={`${poppins.className} text-xl mb-4 md:mb-6`}>
              Support
            </h4>
            <ul className="space-y-3">
              <FooterLink text="111 Bijoy sarani, Dhaka, DH 1515, Bangladesh." />
              <FooterLink text="exclusive@gmail.com" />
              <FooterLink text="+88015-88888-9999" />
            </ul>
          </div>

          <div>
            <h4 className={`${poppins.className} text-xl mb-4 md:mb-6`}>
              Account
            </h4>
            <ul className="space-y-3">
              {ACCOUNT_LINKS.map((link, index) => (
                <FooterLink key={index} text={link} />
              ))}
            </ul>
          </div>

          <div>
            <h4 className={`${poppins.className} text-xl mb-4 md:mb-6`}>
              Quick Link
            </h4>
            <ul className="space-y-3">
              {QUICK_LINKS.map((link, index) => (
                <FooterLink key={index} text={link} />
              ))}
            </ul>
          </div>

          <div className="sm:col-span-2 lg:col-span-1">
            <h4 className={`${poppins.className} text-xl mb-4 md:mb-6`}>
              Download App
            </h4>
            <p className={`${poppins.className} text-xs text-gray-200 mb-2`}>
              Save $3 with App New User Only
            </p>
            <div className="mb-6">
              <Image src={qr_code} alt="QR Code for app download" />
            </div>
            <div className="flex items-center gap-6">
              {SOCIAL_LINKS.map(({ Icon, url, label }) => (
                <a
                  key={label}
                  href={url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:opacity-70 transition-opacity"
                  aria-label={label}
                >
                  <Icon size={24} strokeWidth={0.75} />
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>

      <div className="border-t border-gray-800">
        <div className="container mx-auto px-4 py-4 text-center text-sm text-gray-400">
          <p>
            &copy; {new Date().getFullYear()} Exclusive. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

const FooterLink = ({ text }) => {
  return (
    <li className="text-base text-gray-200 hover:text-white transition-colors cursor-pointer">
      {text}
    </li>
  );
};

export default Footer;
