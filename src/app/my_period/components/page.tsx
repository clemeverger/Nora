"use client";
import Image from "next/image";
import React from "react";

const PopupPrice = ({ setPage }: any) => {
  return (
    <div
      id="popup-modal"
      className={
        "fixed top-0 left-0 right-0 z-50 p-4 overflow-x-hidden overflow-y-auto md:inset-0 h-[calc(100%-1rem)] max-h-full"
      }
    >
      <div className="relative w-full max-w-md max-h-full">
        <div className="relative bg-white rounded-lg shadow ">
          <button
            type="button"
            className="absolute top-3 right-2.5 ml-auto"
            data-modal-hide="popup-modal"
            onClick={() => setPage("calendar")}
          >
            <Image
              src={"/close.svg"}
              alt={"Icon close"}
              width={40}
              height={40}
              className="fill-primary_dark"
            ></Image>
          </button>
          <div className="p-4 text-center">
            <h3 className="mb-4 mt-14 text-2xl font-normal text-primary_dark">
              Abonne toi à Nora + pour accéder à cette fonctionnalité !
            </h3>
            <p className="text-primary_dark font-light mb-6">
              Nora + : Libérez-vous des troubles menstruels, prenez soin de
              votre santé féminine et rejoignez notre communauté bien-être.
            </p>
            <div className="flex flex-col space-y-2 mb-8">
              <div className="bg-primary_light flex rounded-2xl p-2.5 space-x-3">
                <div className="bg-primary rounded-2xl px-2 py-4  flex flex-col">
                  <p className="text-primary_dark text-2xl">3,33€</p>
                  <p className="text-primary_dark text-xs">mensuel</p>
                </div>
                <div className="flex flex-col text-start">
                  <p className="bg-white rounded-lg py-1.5  px-2 text-sm text-center max-w-max mb-2">
                    7 jours d’essai gratuit
                  </p>
                  <p className="text-primary_dark text-sm mb-1">
                    Formule annuelle
                  </p>
                  <p className="text-primary_dark text-sm font-light">
                    Facturation : 39,99 € à 12 mois
                  </p>
                </div>
              </div>
              <div className="bg-white flex rounded-2xl p-2.5 space-x-3 border">
                <div className="bg-secondary_grey rounded-2xl px-2 py-4  flex flex-col">
                  <p className="text-primary_dark text-2xl">9,99€</p>
                  <p className="text-primary_dark text-xs">mensuel</p>
                </div>
                <div className="flex flex-col space-y-1 text-start">
                  <p className="text-primary_dark text-sm">Formule mensuelle</p>
                  <p className="text-primary_dark text-sm font-light">
                    Facturation mensuelle, pas d’essai gratuit
                  </p>
                </div>
              </div>
            </div>
            <button
              data-modal-hide="popup-modal"
              type="button"
              className="text-primary bg-primary_dark focus:ring-4 focus:outline-none w-full font-medium rounded-2xl text-sm py-4 text-center"
            >
              Je m’abonne à Nora+
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PopupPrice;
