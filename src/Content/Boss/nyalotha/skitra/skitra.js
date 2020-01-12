import React from "react";

export const name = "Skitra";
export const title = "Le prophète";

export const inverted = true;

export const overview = {
  general: require("./skitra-general.html"),
  dps: require("./skitra-dps.html"),
  tank: require("./skitra-tank.html"),
  heal: require("./skitra-heal.html"),
};

export const video = (
  <div>
    <div className='embedresize'>
      <div>
        <iframe
          title='kirling skitra'
          src='https://www.youtube.com/embed/lEb7Qbzoh0g'
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

export const prev = "maut";
export const displayPrev = "Maut";

export const next = "xanesh";
export const displayNext = "Xanesh";

export let details = require("./skitra-details.html");
