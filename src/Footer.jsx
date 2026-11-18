import React from "react";
import logo from './assets/logo-light.svg'
const Footer = () => {
    return (
        <footer className="bg-[#2D314D] py-12">
      <div className="max-w-6xl mx-auto px-6 grid grid-cols-3 gap-10 items-center">
        <div className="flex flex-col items-start gap-9">
            <img src={logo} alt="Digitalbank logo" className="w-40"/>
            <div className="flex gap-4">
                <a href="#facebook" className="text-white no-underline hover:text-green-300">
                    Facebook
                    </a>
                    <a href="#youtube" className="text-white no-underline hover:text-green-400">
                        YouTube
                        </a>
                        <a href="#twitter" className="text-white no-underline hover:text-green-400">
                            Twitter
                            </a>
            </div>
        </div>
        <div className="grid grid-cols-2 gap-4">
          {[
            ['About Us', '#about'],
            ['Contact', '#contact'],
            ['Blog', '#articles'],
            ['Careers', '#careers'],
            ['Support', '#support'],
            ['Privacy Policy', '#privacy']
          ].map(([name, link]) => (
            <a
              key={name}
                href={link}
                  className="text-white text-sm no-underline hover:text-green-300">
                      {name}
                      </a>
          ))}
        </div>
        <div className="flex flex-col items-end gap-8">
          <button className="text-white px-7 py-4 border-none rounded-full text-sm font-semibold cursor-pointer bg-linear-to-r from-[#31d35c] to-[#2bb7da] hover:opacity-80 transition">
            Request Invite
          </button>

         <p className="text-[#999] text-xs text-center"> &copy; Digitalbank. All Rights Reserved</p>
        </div>
      </div>
    </footer>
    );
}

export default Footer;
