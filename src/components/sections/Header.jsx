import Image from "next/image";
import vlogo from "public/vedi_logo.svg";
import React, { useEffect, useState } from "react";
import { FiMenu } from "react-icons/fi";
import Link from "next/link";
import { useRouter } from "next/router";
import { IoCloseCircleOutline } from "react-icons/io5";
import { FaGithub } from "react-icons/fa6";

export default function Header() {
  const [openNav, setOpenNav] = useState(false);
  const [prevScrollPos, setPrevScrollPos] = useState(0);
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollPos = window.pageYOffset;
      setVisible(prevScrollPos > currentScrollPos || currentScrollPos < 10);
      setPrevScrollPos(currentScrollPos);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [prevScrollPos]);

  const { asPath } = useRouter();
  const handleNav = () => {
    setOpenNav(!openNav);
  };

  return (
    <header
      className={`bg-primar bg-green-00 px-4 z-10  h-[8vh] lg:h-[10vh] border-b border-b-[#FFFFFF20] shadow-sm backdrop-blur  fixed w-full transition-transform ${
        visible
          ? "top-0 transform translate-y-0 scrolling-header lg:overflow-hidden"
          : "-top-full transform -translate-y-full "
      } `}
      //   className="bg-primar z-10  h-[8vh] lg:h-[10vh] border-b border-b-[#FFFFFF20] shadow-sm backdrop-blur "
    >
      <div className="container mx-auto bgblue-200  flex justify-between h-full items-center">
        <div className="">
          <div className="h-14 w-14">
            <Image
              src={vlogo}
              alt="xcall"
              width={100}
              height={100}
              className="h-full"
            />
          </div>
        </div>
        <div>
          {/* Navbar */}
          <nav
            // data-aos="flip-down"
            // data-aos-delay="100"
            className="hidden lg:block mr-10"
          >
            <ul className="flex space-x-10 items-center text-base 2xl:text-xl">
              <li className="link ">
                <Link href="https://github.com/The-True-Hooha/xCall-cli">
                  {" "}
                  <button className="flex items-center space-x-2 bg-primary py-2 px-4 text-white btn">
                    <span>Documentation</span>
                    <span>
                      <FaGithub size={24} />
                    </span>
                  </button>
                </Link>
              </li>
            </ul>
          </nav>
        </div>
        <div onClick={handleNav} className="-mr-20 cursor-pointer lg:hidden">
          <FiMenu size={24} className="" />
        </div>

        {/* Mobile Navbar */}
        <nav className="lg:hidden ">
          <div className=" lg:hidden ">
            <div
              onClick={handleNav}
              className={`${
                openNav
                  ? "h-screen duration-500 fixed "
                  : "duration-500 h-0 absolute"
              } bg-[#ffffff85] backdrop-blur   z-[100] left-0 top-0 bottom-0 right-0`}
            >
              <div
                className={`${
                  openNav
                    ? "translate-y-0 duration-500 opacity-100"
                    : "duration-300 -translate-y-full opacity-0"
                } flex flex-col  bg-[#ffffff] backdrop-blur  h-[55vh]   px-10 pt-10`}
              >
                <div
                  onClick={handleNav}
                  className=" w-[28px] place-self-end mx-4 cursor-pointer"
                >
                  <IoCloseCircleOutline size={32} className="text-gray-600" />
                </div>
                <ul className="flex flex-col space-y-2.5 text-[18px] font-medium mt-14 bggray-800 justify-center place-self-center  w-full items-start ">
                  <li className="link ">
                    <Link href="https://github.com/The-True-Hooha/xCall-cli">
                      {" "}
                      <button className="flex items-center space-x-2   text-primary ">
                        <span className="font-semibold">Documentation</span>
                        <span>
                          <FaGithub size={24} />
                        </span>
                      </button>
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </nav>
      </div>
    </header>
  );
}
