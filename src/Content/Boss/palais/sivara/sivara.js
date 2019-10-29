import React from "react";

export const name = "Sivara";
export const title = "Commandant Abyssal";

export const inverted = true;

export const overview = {
  general: require("./sivara-general.html"),
  dps: require("./sivara-dps.html"),
  tank: require("./sivara-tank.html"),
  heal: require("./sivara-heal.html"),
};

export const info = (
  <div>
    <table className='table is-bordered is-stripped is-fullwidth is-hoverable'>
      <thead>
        <tr>
          <th>Pourcentage</th>
          <th>Type</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>35%</td>
          <td>Physique (25% auto-attack)</td>
        </tr>
        <tr>
          <td>45%</td>
          <td>Givre / Nature (Selon debuff)</td>
        </tr>
        <tr>
          <td>20%</td>
          <td>Nature (Mixture Instable)</td>
        </tr>
      </tbody>
    </table>
  </div>
);
export const schema = (
  <div>
    <img src='/ep/sivara/sivara-dessin.png' alt='dessin' />
    <i>Dessin de Sir</i>
  </div>
);
export const video = (
  <div>
    <div className='embedresize'>
      <div>
        <iframe
          title='kirling sivara'
          src='https://www.youtube.com/embed/pbiIE-SEodI'
          frameborder='0'
          allow='accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture; fullscreen'
          allowfullscreen
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
export let details = require("./sivara-details.html");
