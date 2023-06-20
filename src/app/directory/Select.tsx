"use client";
import { useRouter } from "next/navigation";
import React, { useState } from "react";
const options = [
  { value: "all", label: "Tous" },
  { value: "Gynécologue obstétricien", label: "Gynécologue" },
  { value: "Médecin généraliste", label: "Médecin généraliste" },
  { value: "Sage-femme", label: "Sage-femme" },
];

const Select = ({ slug }: any) => {
  const [profession, setProfession] = useState(decodeURIComponent(slug));

  const router = useRouter();
  const handleOnChange = (e: any) => {
    const value = e.target.value;
    setProfession(value);
    router.push(`/directory/${value}`);
  };

  return (
    <section className="shrink-0 space-8">
      {options.map((option) => (
        <button
          className={
            "p-1 rounded text-secondary text-opacity-70" +
            (profession == option.value ? " bg-primary text-opacity-100" : "")
          }
          key={option.value}
          value={option.value}
          onClick={handleOnChange}
        >
          {option.label}
        </button>
      ))}
    </section>
  );
};

export default Select;
