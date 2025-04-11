import { motion } from "framer-motion";

const VehicleLogosSlider = () => {
  const logos = [
    "images/logos/toyota.jpg",
    "images/logos/bmw.jpg",
    "images/logos/ford.jpg",
    "images/logos/mercedes.jpg",
    "images/logos/audi.jpg",
    "images/logos/honda.jpg",
    "images/logos/vw.jpg",
    "images/logos/volvo.jpg",
    "images/logos/nissan.jpg",
  ];

  return (
    <div className="relative w-full overflow-hidden bg-black py-6">
      <motion.div
        initial={{ x: 0 }}
        animate={{ x: "-50%" }}
        transition={{
          repeat: Infinity,
          duration: 30,
          ease: "linear",
        }}
        className="flex space-x-12 w-max"
      >
        {[...Array(2)].flatMap((_, i) =>
          logos.map((logo, index) => (
            <img
              key={`${i}-${index}`}
              src={logo}
              alt={`Logo ${index}`}
              className="h-12 sm:h-14 object-contain grayscale hover:grayscale-0 transition duration-300"
            />
          ))
        )}
      </motion.div>
    </div>
  );
};

export default VehicleLogosSlider;
