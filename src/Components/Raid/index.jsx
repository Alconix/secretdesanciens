import React from "react";

import { useParams } from "react-router-dom";

const Raid = props => {
  let { raid } = useParams();
  console.log(raid);

  return <p>RAID PAGE</p>;
};

export default Raid;
