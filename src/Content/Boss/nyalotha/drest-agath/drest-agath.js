import React from "react";

export const name = "Drest'agath";
export const title = "";

export const overview = {
  general: require("./drest-agath-general.html"),
  dps: require("./drest-agath-dps.html"),
  tank: require("./drest-agath-tank.html"),
  heal: require("./drest-agath-heal.html"),
};

export const video = (
  <div>
    <div className='embedresize'>
      <div>
        <iframe
          title='kirling drest'
          src='https://www.youtube.com/embed/oMHMarTZou4'
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

export const prev = "shad-har";
export const displayPrev = "Shad'har";

export const next = "vexiona";
export const displayNext = "Vexiona";

export let details = require("./drest-agath-details.html");
