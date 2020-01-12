import React from "react";

export const name = "ra-den";
export const title = "L'Empereur noir";

export const overview = {
  general: require("./ra-den-general.html"),
  dps: require("./ra-den-dps.html"),
  tank: require("./ra-den-tank.html"),
  heal: require("./ra-den-heal.html"),
};

export const video = (
  <div>
    <div className='embedresize'>
      <div>
        <iframe
          title='kirling raden'
          src='https://www.youtube.com/embed/EqCKgFoZLQE'
          frameBorder='0'
          allow='accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture; fullscreen'
        ></iframe>
      </div>
    </div>
    <i>
      <br />
      Vidéo explicative du combat par&nbsp;
      <a href='https://www.youtube.com/channel/UCX53iuepLC-tW6W-ONU97IQ'>
        Kirling
      </a>
    </i>
  </div>
);

export const prev = "vexiona";
export const displayPrev = "Vexiona";

export const next = "il-gynoth";
export const displayNext = "Il'gynoth";

export let details = require("./ra-den-details.html");
