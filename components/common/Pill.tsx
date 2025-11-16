import { PillProps } from "@/interfaces";
import React from "react";

const Pill: React.FC<PillProps> = ({ label, active, onClick }) => {
  return (
    <button
      onClick={onClick}
      className={`px-4 py-2 rounded-full border text-sm transition 
        ${active ? "bg-black text-white" : "bg-white text-black"}
      `}
    >
      {label}
    </button>
  );
};

export default Pill;
