"use client";

import React, { useState } from "react";
import Calendar from "react-calendar";
import Image from "next/image";
import "./style.css";
import PopupPrice from "./components/page";

const CalendarPage = () => {
  const [page, setPage] = useState("calendar");
  console.log(page);
  const handleOnChange = (e: any) => {
    const value = e.target.value;
    setPage(value);
  };
  console.log(page);

  return (
    <div>
      <h1 className="text-3xl top-xl pt-4 mb-4 text-primary_dark">Mon suivi</h1>
      <div className="bg-primary_light rounded-xl flex p-1 justify-between max-w-max align-middle mx-auto mb-8">
        <button
          value={"calendar"}
          onClick={handleOnChange}
          className={
            "px-3 py-2 rounded-xl text-primary_dark" +
            (page == "calendar" ? " bg-primary " : "")
          }
        >
          Calendrier
        </button>
        <button
          value={"lock"}
          onClick={handleOnChange}
          className={
            "flex items-center px-3 py-2 rounded-xl text-primary_dark" +
            (page == "lock" ? " bg-primary " : "")
          }
        >
          Analyse
          <Image
            src={"/lock.svg"}
            alt={"Icon cadena"}
            width={20}
            height={20}
            className="ml-1"
          ></Image>
        </button>
      </div>
      {page == "calendar" && (
        <Calendar tileClassName="bg-primary" className="border-transparent" />
      )}
      {page == "lock" && <PopupPrice setPage={setPage} />}
    </div>
  );
};

export default CalendarPage;
