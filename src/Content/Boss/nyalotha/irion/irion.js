import React from "react";

export const name = "Irion";
export const title = "L'Empereur noir";

export const overview = {
  general: require("./irion-general.html"),
  dps: require("./irion-dps.html"),
  tank: require("./irion-tank.html"),
  heal: require("./irion-heal.html"),
};

export const video = (
  <div>
    <div className='embedresize'>
      <div>
        <iframe
          title='kirling sivara'
          src='https://www.youtube.com/embed/hrqx2JmerPE'
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

export const next = "maut";
export const displayNext = "Maut";

export let details = require("./irion-details.html");
