import React from "react";

export const name = "Maut";

export const overview = {
  general: require("./maut-general.html"),
  dps: require("./maut-dps.html"),
  tank: require("./maut-tank.html"),
  heal: require("./maut-heal.html"),
};

export const video = (
  <div>
    <div className='embedresize'>
      <div>
        <iframe
          title='kirling sivara'
          src='https://www.youtube.com/embed/o3NfZ03VWuY'
          frameBorder='0'
          allow='accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture; fullscreen'
        ></iframe>
      </div>
    </div>
    <i>
      <br />
      Vidéo explicative du PTR par&nbsp;
      <a href='https://www.youtube.com/channel/UCX53iuepLC-tW6W-ONU97IQ'>
        Kirling
      </a>
    </i>
  </div>
);

export let details = require("./maut-details.html");
