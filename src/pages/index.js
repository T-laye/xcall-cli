import Layout from "@/layout";
import Image from "next/image";
import validate from "public/validation-removebg.png";
import logo from "public/xcall.svg";
import logo2 from "public/web3partners.png";
import Spinner from "@/components/Spinner";
import { useState } from "react";

export default function Home() {
  const [loading, setLoading] = useState(false);

  function handleSubmit() {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
    }, 2000);
  }

  return (
    <Layout>
      <section className="container mx-auto pt-14 lg:pt-24 h-[100vh] lg:h-[100vh] 2xl:h-[100vh] flex items-center lg:items-start lg:justify-center justify-start flex-col lg:flex-row ">
        <div className="lg:w-1/2 pt-20 md:pt-24 flex 2xl:pt-40 flex-col mb-0 lg:mb-0">
          <div className="flex flex-col items-center lg:items-start ">
            <h1 className="md:text-7xl text-5xl font-bold text-primary  ">
              Validator
            </h1>
            <div className="lg:w-2/3 flex mt-2 justify-center">
              <p className="text-center lg:text-start">
                {" "}
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Perferendis, quia.{" "}
              </p>
            </div>

            <div className="lg:w-3/4 w-full  mt-5">
              <input type="text" />
            </div>
          </div>

          {/* <span className="text-green-500 font-medium">
            Validation Successful ✔
          </span>
          <span className="text-red-500 font-medium">Invalid Contract ❌ </span> */}

          <div className="mt-4 text-center lg:text-start">
            <button
              onClick={handleSubmit}
              className="btn  bg-primary text-white text-xl font-semibold"
            >
              {!loading ? "Check" : <Spinner />}
            </button>
          </div>

          <div className="h-8 flex justify-center items-center lg:justify-start space-x-3 mt-6">
            <span className="text-gray-600 font-semibold">powered by</span>
            <div className="flex items-center space-x-3 mt-1">
              <div className="h-6 w-6">
                <Image
                  src={logo2}
                  alt="xcall"
                  width={50}
                  height={50}
                  className="h-full"
                />
              </div>

              <div className=" h-10 w-14">
                <Image
                  src={logo}
                  alt="xcall"
                  width={100}
                  height={100}
                  className="h-full"
                />
              </div>
            </div>
          </div>
        </div>
        <div className="lg:w-1/2 bg-green-30 h-full flex relative items-center justify-center overflow-hiden object-contain ">
          <Image
            // src="https://cdn.dribbble.com/users/1373613/screenshots/5510801/media/adf3f3a5acf468eb1a2e23849ddbe4ec.gif"
            src={validate}
            alt="validation"
            height={1000}
            width={1000}
            className="object-contain w-full h-full lg:mb-20 opacity-85 lg:opacity-100"
          />

          {/* <div className="absolute top-0 left-0 right-0 bottom-0 bg-primary mix-blend-darken ">
            
          </div> */}
        </div>
      </section>
    </Layout>
  );
}
