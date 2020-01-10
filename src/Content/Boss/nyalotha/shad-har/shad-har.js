import React from "react";

export const name = "Shad'har";
export const title = "l'Insatiable";

export const overview = {
  general: require("./shad-har-general.html"),
  dps: require("./shad-har-dps.html"),
  tank: require("./shad-har-tank.html"),
  heal: require("./shad-har-heal.html"),
};

export const video = (
  <div>
    <div className='embedresize'>
      <div>
        <iframe
          title='kirling shadhar'
          src='https://www.youtube.com/embed/mJgznjolx0M'
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

export let details = require("./shad-har-details.html");
