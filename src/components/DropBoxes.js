import React from "react";
import logo from "public/xcall.svg";
import Image from "next/image";

export default function DropBoxes() {
  return (
    <div className="area">
      <ul className="circles">
        <li>
          <Image src={logo} alt="xcall" width={1000} height={1000} />
        </li>
        <li>
          <Image src={logo} alt="xcall" width={1000} height={1000} />
        </li>
        <li>
          <Image src={logo} alt="xcall" width={1000} height={1000} />
        </li>
        <li>
          <Image src={logo} alt="xcall" width={1000} height={1000} />
        </li>
        <li>
          <Image src={logo} alt="xcall" width={1000} height={1000} />
        </li>
        <li>
          <Image src={logo} alt="xcall" width={1000} height={1000} />
        </li>
        <li>
          <Image src={logo} alt="xcall" width={1000} height={1000} />
        </li>
        <li>
          <Image src={logo} alt="xcall" width={1000} height={1000} />
        </li>
        <li>
          <Image src={logo} alt="xcall" width={1000} height={1000} />
        </li>
        {/* <li></li>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
        <li></li> */}
      </ul>
    </div>
  );
}
