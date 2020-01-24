import React from "react";

export const name = "Carapace de N'Zoth";
export const title = "";

export const overview = {
  general: require("./carapace-general.html"),
  dps: require("./carapace-dps.html"),
  tank: require("./carapace-tank.html"),
  heal: require("./carapace-heal.html"),
};

export const video = (
  <div>
    <div className='embedresize'>
      <div>
        <iframe
          title='kirling carapace'
          src='https://www.youtube.com/embed/B9VP_n5ekhM'
          frameBorder='0'
          allow='accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture; fullscreen'
        ></iframe>
      </div>
    </div>
    <i>
      <br />
      Aperçu du combat par&nbsp;
      <a href='https://www.youtube.com/channel/UCX53iuepLC-tW6W-ONU97IQ'>
        Kirling
      </a>
    </i>
  </div>
);

export const prev = "il-gynoth";
export const displayPrev = "Il'gynoth";

export const next = "nzoth";
export const displayNext = "N'zoth";

export let details = require("./carapace-details.html");
