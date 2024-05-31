import Image from "next/image";
import { skills } from "../../helps/constants";

export default function Skills() {
  return (
    <section className="flex h-full w-full flex-col  justify-start ">
      <h1 className="mb-20 text-center text-6xl">Skills</h1>
      {Object.keys(skills).map((key, index: number) => {
        const group = skills[key as keyof typeof skills];
        return (
          <div key={key + index} className="mb-10">
            <div className="relative mb-10">
              <p className=" w-full border-[0.5px] border-[rgba(225,225,225,0.2)]"></p>
              <span className="absolute left-5 top-[-15px] z-10 bg-black px-4 text-xl font-bold text-[#E1E1E1]">
                {group.title}
              </span>
            </div>
            <div className="grid  grid-cols-1 gap-4 sm:grid-cols-2  md:grid-cols-3">
              {group.data.map((item, i) => (
                <div
                  key={item.title + i}
                  className="group flex h-[70px] w-full  cursor-pointer items-center justify-between overflow-hidden rounded-full border-[0.5px] border-[rgba(225,225,225,0.2)] p-4  transition-all duration-500 ease-in hover:border-[1px] hover:border-[rgba(225,225,225,0.6)] hover:backdrop-blur-md"
                >
                  <p className="text-[#E1E1E1]">{item.title}</p>
                  <Image
                    src={item.imageUrl}
                    alt={item.title}
                    width={50}
                    height={50}
                    className="rounded-md transition-all duration-700 ease-in-out group-hover:animate-ping"
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
