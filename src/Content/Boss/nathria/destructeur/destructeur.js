import React from 'react';

export const name = 'Destructeur affamé';
export const title = '';

export const overview = {
  general: require('./destructeur-general.html'),
  dps: require('./destructeur-dps.html'),
  tank: require('./destructeur-tank.html'),
  heal: require('./destructeur-heal.html'),
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
        <source src='//i.imgur.com/Zwy5Ih1.mp4' type='video/mp4'></source>
      </video>
      <i>Phase 1</i>
    </div>
    <div style={{ marginBottom: 50 }}>
      <video controls preload='auto' loop='loop'>
        <source src='//i.imgur.com/tikNyby.mp4' type='video/mp4'></source>
      </video>
      <i>Phase 2</i>
    </div>
  </div>
);

export const prev = 'altimor';
export const displayPrev = 'Altimor';

export const next = 'xymox';
export const displayNext = "Xy'mox";

export let details = require('./destructeur-details.html');
