"use client";
import React, { useState } from "react";

const options = [
  { value: "all", label: "Tous" },
  { value: "Témoignages", label: "Témoignages" },
  { value: "Troubles digestifs", label: "Troubles digestifs" },
  { value: "Adénomyose", label: "Adénomyose" },
  { value: "SOPK", label: "SOPK" },
  { value: "Endométriose", label: "Endométriose" },
  { value: "Recherches", label: "Recherches" },
];

const Select = ({ article, onChange }: any) => {
  const handleOnChange = (e: any) => {
    const value = e.target.value;
    onChange(value);
  };

  return (
    <div className="flex overflow-x-scroll no-scrollbar">
      <section className="shrink-0 space-x-8">
        {options.map((option) => (
          <button
            className={
              "p-1 rounded" +
              (article == option.value
                ? " bg-primary_light text-opacity-100 text-primary_dark"
                : " text-primary_dark text-opacity-70")
            }
            key={option.value}
            value={option.value}
            onClick={handleOnChange}
          >
            {option.label}
          </button>
        ))}
      </section>
    </div>
  );
};

export default Select;
