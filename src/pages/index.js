import Layout from "@/layout";
import Image from "next/image";

export default function Home() {
  return (
    <Layout>
      <section className="container mx-auto pt-10 h-[92vh] lg:h-[87vh] 2xl:h-[90vh] flex itemscenter justify-center">
        <div className="w-1/2 pt-24 flex justify-cente flex-col">
          <div className="flex flex-col">
            <h1 className="text-7xl font-bold text-primary  ">Validator</h1>
            <div className="w-2/3 flex mt-2 justify-center">
              <p className="">
                {" "}
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Perferendis, quia.{" "}
              </p>
            </div>

            <div className="w-3/4 mt-5">
              <input type="text" />
            </div>
          </div>

          <div className="mt-4">
            <button className="btn bg-primary text-white text-xl font-semibold">
              Check
            </button>
          </div>
        </div>
        <div className="w-1/2 flex relative items-center justify-center overflow-hidden object-cover ">
          <Image
            src="https://cdn.dribbble.com/users/1373613/screenshots/5510801/media/adf3f3a5acf468eb1a2e23849ddbe4ec.gif"
            alt="validation"
            height={1000}
            width={1000}
            className="object-cover h-full mb-20"
          />
          <div className="absolute top-0 left-0 right-0 bottom-0 bg-primary mix-blend-darken "> </div>
        </div>
      </section>
    </Layout>
  );
}
