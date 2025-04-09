import Image from "next/image";
import Link from "next/link";
import garage from "@/public/garage3.jpg"; // Ensure this image is located in your /public folder

const Hero = () => {
  return (
    <section className="bg-yellow-50 text-gray-800">
      <div className="max-w-7xl mx-auto px-6 py-16">
        <div className="flex flex-col-reverse md:flex-row items-center gap-10">
          {/* Text Content */}
          <div className="flex-1 space-y-6 text-center md:text-left">
            <h1 className="text-3xl md:text-5xl font-bold text-yellow-900 leading-tight">
              Your Vehicle, Our Priority. Manage Everything in One Place
            </h1>
            <p className="text-base md:text-lg text-yellow-800">
              Welcome to your all-in-one automotive companion. Book service
              appointments, track your vehicle’s repair history, get real-time
              updates, and stay informed — all from the palm of your hand.
              Whether it’s routine maintenance or unexpected fixes, our garage
              app makes managing your vehicle smooth, smart, and stress-free.
            </p>
            <Link href="/get-started">
              <button className="bg-yellow-700 hover:bg-yellow-800 text-white font-semibold py-3 px-6 rounded-lg shadow-md transition">
                Discover More
              </button>
            </Link>
          </div>

          {/* Image */}
          <div className="flex-1 w-full">
            <Image
              src={garage}
              alt="Elegant garage set in the savannah"
              width={500}
              height={400}
              className="w-full h-auto rounded-xl shadow-lg"
              priority
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
