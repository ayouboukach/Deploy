import React from "react";

// components

import ListDossiersClot from "components/Cards/List_Dossiers_Clot.js";

export default function DosClotMois() {
  return (
    <>
      <div className="mb-1 border-0 w-full pl-4 flex-1 pb-3">
        <h3 className="font-semibold text-lg">
          Les dossiers clôturés par mois
        </h3>
      </div>
      <div className="relative flex min-w-0 break-words w-full rounded-lg border-0">
        <div className="rounded-t">
          <div className="flex-auto">
            <div className="flex flex-wrap">
              <div className="w-full lg:w-4/20 px-4">
                <div className="relative w-full mb-1">
                  <select
                    name="cars"
                    id="cars"
                    className="border px-3 rounded text-sm shadow w-full"
                  >
                    <option value="volvo">Volvo</option>
                    <option value="saab">Saab</option>
                    <option value="mercedes">Mercedes</option>
                    <option value="audi">Audi</option>
                  </select>
                </div>
              </div>
              <div className="w-full lg:w-4/20 px-4">
                <div className="relative w-full mb-1">
                  <input
                    type="text"
                    className="border px-3 rounded text-sm shadow w-full"
                    defaultValue="United States"
                  />
                </div>
              </div>
              <div className="w-full lg:w-4/20 px-4">
                <div className="relative w-full mb-1">
                  <input
                    type="text"
                    className="border px-3 rounded text-sm shadow w-full"
                    defaultValue="Postal Code"
                  />
                </div>
              </div>
              <div className="w-full lg:w-4/20 px-4">
                <div className="relative w-full mb-1">
                  <input
                    type="text"
                    className="border px-3 rounded text-sm shadow w-full"
                    defaultValue="Config"
                  />
                </div>
              </div>
              <div className="w-full lg:w-4/20 px-4">
                <div className="relative w-full mb-1 lex flex-wrap items-center md:justify-between justify-center">
                  <input
                    type="text"
                    className="border px-3 rounded text-sm shadow w-full"
                    defaultValue="Filtre"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
        {/*<div className="w-full lg:w-auto px-1">
          <div className="relative  mb-3">
            <button
              className="btn-login bg-blueGray-800 text-white active:bg-blueGray-600 lg:w-auto text-sm  px-7 py-2 rounded  "
              type="button"
            >
              Actualiser
            </button>
          </div>
        </div>*/}
        <form className="md:flex justify-end lg:ml-auto mr-4">
          <button
            className="btn-login bg-blueGray-800 text-white active:bg-blueGray-600 w-full lg:w-auto text-sm  px-7 py-2 rounded  "
            type="button"
          >
            Actualiser
          </button>
        </form>
      </div>
      <div className="flex flex-wrap mt-4">
        <div className="w-full mb-12 px-4">
          <ListDossiersClot />
        </div>
      </div>
    </>
  );
}