import React from 'react';

export const name = 'Denathrius';
export const title = 'Sire';

export const inverted = true;

export const overview = {
  general: require('./denathrius-general.html'),
  dps: require('./denathrius-dps.html'),
  tank: require('./denathrius-tank.html'),
  heal: require('./denathrius-heal.html'),
};

export const video = (
  <div>
    <p>
      Schéma de déroulement des phases par <a href='http://www.twitch.tv/schlimmy'>Schlimmy</a>.
    </p>
    <p>
      <b style={{ color: 'red' }}>
        Ils représentent le combat en mode mythique, certaines capacités peuvent différer ou ne pas
        être gérées de la même façon !
      </b>
    </p>
    <div style={{ marginBottom: 50, marginTop: 50 }}>
      <video controls preload='auto' loop='loop'>
        <source src='//i.imgur.com/Cv3LiJb.mp4' type='video/mp4'></source>
      </video>
      <i>Phase 1</i>
    </div>
  </div>
);

export const prev = 'generaux';
export const displayPrev = 'Généraux';

export let details = require('./denathrius-details.html');
