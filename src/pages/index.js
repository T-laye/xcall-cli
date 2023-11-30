import Layout from "@/layout";
import Image from "next/image";

export default function Home() {
  return (
    <Layout>
      <section className="container mx-auto pt-14 lg:pt-24 h-[100vh] lg:h-[100vh] 2xl:h-[100vh] flex items-center lg:items-start lg:justify-center justify-start flex-col lg:flex-row ">
        <div className="lg:w-1/2 pt-20 md:pt-24 flex justify-cente flex-col mb-0 lg:mb-0">
          <div className="flex flex-col items-center lg:items-start ">
            <h1 className="md:text-7xl text-5xl font-bold text-primary  ">Validator</h1>
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

          <div className="mt-4 text-center lg:text-start">
            <button className="btn bg-primary text-white text-xl font-semibold">
              Check
            </button>
          </div>
        </div>
        <div className="lg:w-1/2 bg-green-30 h-full flex relative items-center justify-center overflow-hiden object-cover ">
          <Image
            src="https://cdn.dribbble.com/users/1373613/screenshots/5510801/media/adf3f3a5acf468eb1a2e23849ddbe4ec.gif"
            alt="validation"
            height={1000}
            width={1000}
            className="object-cover w-full h-full lg:mb-20 opacity-75 lg:opacity-100"
          />
          <div className="absolute top-0 left-0 right-0 bottom-0 bg-primary mix-blend-darken ">
            {" "}
          </div>
        </div>
      </section>
    </Layout>
  );
}
