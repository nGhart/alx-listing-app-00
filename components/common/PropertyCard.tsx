import { PropertyProps } from "@/interfaces";
import React from "react";

const PropertyCard = ({ property }: { property: PropertyProps }) => {
  return (
    <div className="rounded-xl shadow-md overflow-hidden border bg-white">
      <img
        src={property?.image}
        alt={property?.name}
        className="w-full h-52 object-cover"
      />

      <div className="p-4 space-y-2">
        <h3 className="font-semibold text-lg">{property?.name}</h3>

        <p className="text-gray-500 text-sm">
          {property?.address.state}, {property?.address.city},{" "}
          {property?.address.country}
        </p>

        <div className="flex justify-between items-center">
          <p className="text-gray-800 font-semibold">
            ${property?.price.toLocaleString()}
          </p>
          <span className="text-yellow-500 font-semibold">
            {property?.rating} ★
          </span>
        </div>

        <div className="flex gap-4 text-sm text-gray-600 pt-2 border-t">
          <span>{property?.offers.bed} Beds</span>
          <span>{property?.offers.shower} Baths</span>
          <span>{property?.offers.occupants} People</span>
        </div>
      </div>
    </div>
  );
};
export default PropertyCard;
