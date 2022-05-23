import React from "react";
import { Outlet } from "react-router-dom";
import Navbar from "../../components/Navbar";
import Values from "../../components/Values";

const Mission = () => {
  return (
    <div>
      {/* <h1 className="text-2xl">Mission</h1>
      <Outlet /> */}

      <Navbar type="mission" />

      <Outlet />
      <Values type="mission" />
    </div>
  );
};

export default Mission;
