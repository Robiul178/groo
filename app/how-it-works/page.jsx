import { Button } from "@/components/ui/button";
import { CircleDot } from "lucide-react";
import Image from "next/image";
import { inter } from "../fonts";
// import { inter } from "../layout";

export default function Component() {
  return (
    <div className={`min-h-screen bg-white ${inter.className}`}>
      {/* <header className="flex justify-between items-center p-4 border-b">
        <div className="text-2xl font-bold  text-blue-600">Opendoor</div>
        <nav className="hidden md:flex space-x-4">
          <a href="#" className="text-gray-600 hover:text-gray-900">
            Sell
          </a>
          <a href="#" className="text-gray-600 hover:text-gray-900">
            Buy
          </a>
          <a href="#" className="text-gray-600 hover:text-gray-900">
            How it works
          </a>
          <a href="#" className="text-gray-600 hover:text-gray-900">
            More
          </a>
        </nav>
        <Button variant="outline">Sign in</Button>
      </header> */}

      <main className=" mx-auto bg-gray-300  py-20">
        <h1 className="text-3xl md:text-4xl font-extrabold text-center mb-8">
          How Opendoor works
        </h1>
        <p className="text-center text-gray-600 mb-8 max-w-2xl mx-auto">
          Here's how Opendoor makes the experience of buying or selling a home
          simple, certain and fast. We've reimagined the entire process to give
          you the best possible experience. how Opendoor makes the experience of
          buying or selling a home simple, certain and fast.
        </p>
      </main>

      <div className="grid sm:grid-cols-2  ">
        <div className="ml-auto relative py-12 border-r-2 border-r-gray-300  pr-6">
          <h2 className="text-xl font-semibold">Tell us about your home</h2>
          <p className="text-gray-600 pt-5">
            Request an offer online, it only takes a few minutes <br /> and
            there's no obligation to accept
          </p>
          <CircleDot
            className=" absolute top-1/2 left-full -translate-x-[.60rem] z-10"
            size={20}
          />
        </div>
      </div>
      <div className="grid sm:grid-cols-2">
        <div></div>
        <Image
          src="/assets/three.avif"
          alt="Couple using laptop"
          width={200}
          height={200}
          className="-translate-x-16 object-cover w-[400px] rounded-none h-[300px]"
        />
      </div>

      <div className="grid sm:grid-cols-2">
        <Image
          src="/assets/two.avif"
          alt="Couple using laptop"
          width={200}
          height={200}
          className=" object-cover ml-auto mr-16 mt-28 w-[400px] rounded-none h-[300px]"
        />
        <div className="border-l-2 border-l-gray-300 pl-12 relative">
          <h2 className="text-xl font-semibold mt-28">Get an offer</h2>
          <p className="text-gray-600 max-w-sm pt-6">
            We'll calculate your offer based on market data and
            information.based on market data and information about your home
          </p>
          <CircleDot
            className="absolute left-0 -translate-x-[.65rem] -translate-y-28"
            size={20}
          />
        </div>
      </div>
    </div>
  );
}
