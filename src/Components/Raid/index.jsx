import React, { useEffect } from "react";
import { useParams } from "react-router-dom";

const Raid = props => {
  const { raid } = useParams();
  const { BossList, name } = require(`../../Content/BossList/${raid}`);

  useEffect(() => {
    document.title = `${name} - Secret des Anciens`;
  }, [name]);

  return <BossList />;
};

export default Raid;
