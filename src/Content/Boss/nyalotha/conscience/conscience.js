import React from "react";

export const name = "Conscience Collective";
export const title = "";

export const overview = {
  general: require("./conscience-general.html"),
  dps: require("./conscience-dps.html"),
  tank: require("./conscience-tank.html"),
  heal: require("./conscience-heal.html"),
};

export const video = (
  <div>
    <div className='embedresize'>
      <div>
        <iframe
          title='kirling sivara'
          src='https://www.youtube.com/embed/_IpbELAh6C8'
          frameBorder='0'
          allow='accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture; fullscreen'
        ></iframe>
      </div>
    </div>
    <i>
      <br />
      Vidéo explicative par&nbsp;
      <a href='https://www.youtube.com/channel/UCX53iuepLC-tW6W-ONU97IQ'>
        Kirling
      </a>
    </i>
  </div>
);

export const prev = "xanesh";
export const displayPrev = "Xanesh";

export const next = "shad-har";
export const displayNext = "Shad'har";

export let details = require("./conscience-details.html");
