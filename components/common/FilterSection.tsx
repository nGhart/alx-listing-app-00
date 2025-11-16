import React, { useState } from "react";
import Pill from "./Pill";

const FILTERS = [
  "Top Villa",
  "Self Checkin",
  "Instant Book",
  "Beachfront",
  "Luxury",
];

const FilterSection = () => {
  const [activeFilter, setActiveFilter] = useState("");

  return (
    <div className="flex gap-3 overflow-x-auto py-3">
      {FILTERS.map((filter) => (
        <Pill
          key={filter}
          label={filter}
          active={activeFilter === filter}
          onClick={() => setActiveFilter(filter)}
        />
      ))}
    </div>
  );
};

export default FilterSection;
