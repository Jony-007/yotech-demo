import React from "react";

import { useParams } from "react-router-dom";
const Career = () => {
  const { pikaid } = useParams();
  // const { creative } = useParams();
  // const { investlearning } = useParams();
  // const { learn } = useParams();
  return <div>The params is {pikaid}</div>;
};

export default Career;
