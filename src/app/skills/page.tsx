import Image from "next/image";
import { logos } from "../helps/constants";

export default function Skills() {
  return (
    <section className="h-full w-full flex flex-col  justify-start">
      <h1 className="text-4xl text-center mb-20">Skills</h1>
      {Object.keys(logos).map((key, index: number) => {
        const group = logos[key as keyof typeof logos];
        return (
          <div key={key + index} className="mb-10">
            <div className="relative mb-10">
              <p className=" border-[0.5px] border-[rgba(225,225,225,0.2)] w-full"></p>
              <span className="text-[#E1E1E1] absolute top-[-15px] bg-black px-4 left-5 z-10 text-xl font-bold">
                {group.title}
              </span>
            </div>
            <div className="flex flex-wrap">
              {group.data.map((item, i) => (
                <div
                  key={item.title + i}
                  className="hover:backdrop-blur-md hover:border-[1px] group cursor-pointer  hover:border-[rgba(225,225,225,0.6)]  transition-all duration-500 ease-in w-[300px] m-4 p-4 h-[70px]  flex justify-between items-center border-[0.5px] border-[rgba(225,225,225,0.2)] overflow-hidden rounded-full"
                >
                  <p className="text-[#E1E1E1]">{item.title}</p>
                  <Image
                    src={item.imageUrl}
                    alt={item.title}
                    width={50}
                    height={50}
                    className="rounded-md group-hover:animate-ping transition-all duration-700 ease-in-out"
                  />
                </div>
              ))}
            </div>
          </div>
        );
      })}
    </section>
  );
}
