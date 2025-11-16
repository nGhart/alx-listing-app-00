import Image from "next/image";
import { Geist, Geist_Mono } from "next/font/google";
import { IMAGES, PROPERTYLISTINGSAMPLE } from "@/constants";
import FilterSection from "@/components/common/FilterSection";
import PropertyCard from "@/components/common/PropertyCard";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export default function Home() {
  return (
    <div className="">
      <div
        className="h-[60vh] bg-cover bg-center bg-no-repeat flex flex-col justify-center items-center text-white text-center px-4"
        style={{ backgroundImage: `url(${IMAGES.HERO.src})` }}
      >
        <p className="text-3xl font-bold mb-2">
          Find your favorite place here!
        </p>
        <p className="text-lg max-w-xl">
          The best prices for over 2 million properties worldwide.
        </p>
      </div>
      <FilterSection />
      <div className="px-6 py-8">
        <h2 className="text-2xl font-bold mb-6">Explore Properties</h2>

        <div className="grid gap-6 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
          {PROPERTYLISTINGSAMPLE.map((property, index) => (
            <PropertyCard key={index} property={property} />
          ))}
        </div>
      </div>
    </div>
  );
}
