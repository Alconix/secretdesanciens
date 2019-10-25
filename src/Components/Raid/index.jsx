import React from "react";
import { useParams } from "react-router-dom";

const Raid = props => {
  const { raid } = useParams();
  const { BossList } = require(`../../Content/BossList/${raid}`);
  console.log(BossList);

  return <BossList />;
};

export default Raid;
