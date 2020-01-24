import React from "react";

export const name = "N'Zoth";
export const title = "le Corrupteur";

export const overview = {
  general: require("./nzoth-general.html"),
  dps: require("./nzoth-dps.html"),
  tank: require("./nzoth-tank.html"),
  heal: require("./nzoth-heal.html"),
};

export const video = (
  <div>
    <div className='embedresize'>
      <div>
        <iframe
          title='kirling nzoth'
          src='https://www.youtube.com/embed/mwr-t1GfOyA'
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

export const prev = "carapace";
export const displayPrev = "Carapace de N'Zoth";

export let details = require("./nzoth-details.html");
