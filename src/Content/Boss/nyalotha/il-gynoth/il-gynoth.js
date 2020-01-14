import React from "react";

export const name = "Il'gynoth";
export const title = "La corruption ressuscitée";

export const overview = {
  general: require("./il-gynoth-general.html"),
  dps: require("./il-gynoth-dps.html"),
  tank: require("./il-gynoth-tank.html"),
  heal: require("./il-gynoth-heal.html"),
};

export const video = (
  <div>
    <div className='embedresize'>
      <div>
        <iframe
          title='kirling ilgynoth'
          src='https://www.youtube.com/embed/zdAeyUIyKTE'
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

export const prev = "ra-den";
export const displayPrev = "Ra Den";

export const next = "carapace";
export const displayNext = "Carapace de N'Zoth";

export let details = require("./il-gynoth-details.html");
