import React from "react";

export const name = "Xanesh";
export const title = "Sombre inquisitrice";

export const inverted = true;

export const overview = {
  general: require("./xanesh-general.html"),
  dps: require("./xanesh-dps.html"),
  tank: require("./xanesh-tank.html"),
  heal: require("./xanesh-heal.html"),
};

export const video = (
  <div>
    <div className='embedresize'>
      <div>
        <iframe
          title='kirling xanesh'
          src='https://www.youtube.com/embed/_ggRk3NoAo8'
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

export const prev = "skitra";
export const displayPrev = "Skitra";

export const next = "conscience";
export const displayNext = "Conscience";

export let details = require("./xanesh-details.html");
