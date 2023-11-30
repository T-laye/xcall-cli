import Image from "next/image";
import logo from "../../../public/xcall.svg";
import Link from "next/link";

export default function Header() {
  return (
    <header className="bg-primar z-10  h-[8vh] lg:h-[10vh] border-b border-b-[#FFFFFF20] shadow-sm backdrop-blur ">
      <div className="container mx-auto bg-slate500 flex justify-between h-full items-center">
        <div className="text-primary font-bold text-2xl">W3 Partners</div>
        <div>
          {/* Navbar */}
          <nav
            data-aos="flip-down"
            data-aos-delay="100"
            className="hidden lg:block mr-10"
          >
            <ul className="flex space-x-10 text-base">
              <li className="link ">
                <Link  href="/#overview">Overview</Link>
              </li>
              <li className="link ">
                <Link href="/#how">How to Buy</Link>
              </li>
              <li className="link ">
                <Link href="/#tokenomics">Tokenomics</Link>
              </li>
              <li className="link ">
                <Link href="/#roadMap">Road Map</Link>
              </li>
              <li className="link ">
                <Link
                  target="_blank"
                  href="https://dexscreener.com/goerli/0x196483e5de44074951b10cf802331d40b2346db5"
                >
                  Chart
                </Link>
              </li>
            </ul>
          </nav>
        </div>
        {/* <div>cta</div> */}
      </div>
    </header>
  );
}
