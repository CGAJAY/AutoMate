import Image from "next/image";
import Header from "./components/Header";

export default function Home() {
  return (
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
    </div>
  );
}
