import React from "react";
import { Outlet } from "react-router-dom";

export default function Auth() {
  return (
    <>
      <main>
        <section className="relative w-full h-full py-40 min-h-screen">
          <div
            className="absolute top-0 w-full h-full bg-blueGray-950 bg-no-repeat bg-full"
          ></div>
          <Outlet/>
        </section>
      </main>
    </>
  );
}
