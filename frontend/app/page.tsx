import Image from "next/image";
import Header from "./components/Header";
import Hero from "./components/Hero";

export default function Home() {
  return (
<<<<<<< HEAD
    <div className="relative min-h-screen ">
      {/* Background image */}
      <Image
        src="/baobao.jpg" // no need to include 'public' in path
        alt="Hero Image"
        fill
        className="object-cover object-center opacity-50 z-0"
        priority
      />

      {/* Content on top */}
      <div className="relative z-10">
        <Header />
      </div>
=======
    <div className="bg-amber-300 min-h-screen">
      <Header />
      <Hero />
>>>>>>> 71d1b221b3497cc35ac36d117c4d03d99ee77dc7
    </div>
  );
}
