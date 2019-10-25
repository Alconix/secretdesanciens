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
  <video width='1280' height='720 ' controls>
    <source src='/video.mp4' type='video/mp4' />
    Your browser does not support the video tag.
  </video>
);
export let details = require("./sivara-details.html");
