import React from "react";

export const name = "Vexiona";
export const title = "";

export const overview = {
  general: require("./vexiona-general.html"),
  dps: require("./vexiona-dps.html"),
  tank: require("./vexiona-tank.html"),
  heal: require("./vexiona-heal.html"),
};

export const video = (
  <div>
    <div className='embedresize'>
      <div>
        <iframe
          title='kirling sivara'
          src='https://www.youtube.com/embed/4dO3mbiGYIQ'
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

export const prev = "drest-agath";
export const displayPrev = "Drest'agath";

export const next = "ra-den";
export const displayNext = "Ra Den";

export let details = require("./vexiona-details.html");
