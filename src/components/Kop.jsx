import React from "react";
import { useParams } from "react-router-dom";

const Kop = () => {
  const { pikaid } = useParams();
  return (
    <div className="pt-28 pb-10 flex justify-center item-center text-4xl">
      {pikaid}
    </div>
  );
};

export default Kop;
