import Link from "next/link";
import garage from "@/public/garage.jpg"; // Ensure this exists in /public

const Hero = () => {
  return (
    <section
      className="relative h-screen w-full flex items-center justify-center bg-cover bg-center text-[var(--foreground)]"
      style={{ backgroundImage: `url(${garage.src})` }}
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-[var(--savannah-dusk)] opacity-50 z-0"></div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 py-16 text-center">
        <h1 className="text-4xl md:text-6xl font-bold text-[var(--savannah-sand)] leading-tight mb-6">
          Your Vehicle, Our Priority
        </h1>
        <p className="text-lg md:text-xl text-[var(--savannah-sand)] mb-8 max-w-2xl mx-auto">
          Manage your vehicle effortlessly with AutoFixPro. Book services, track
          repairs, and stay updated—all in one place.
        </p>
        <Link href="/signin">
          <button className="btn-primary">Get Started</button>
        </Link>
      </div>
    </section>
  );
};

export default Hero;
