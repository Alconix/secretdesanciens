import React from 'react';

export const name = "Xy'mox";
export const title = 'Artificier';

export const inverted = true;

export const overview = {
  general: require('./xymox-general.html'),
  dps: require('./xymox-dps.html'),
  tank: require('./xymox-tank.html'),
  heal: require('./xymox-heal.html'),
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
        <source src='//i.imgur.com/q0TYy8O.mp4' type='video/mp4'></source>
      </video>
      <i>Phase 1</i>
    </div>
    <div style={{ marginBottom: 50 }}>
      <video controls preload='auto' loop='loop'>
        <source src='//i.imgur.com/r5TV9a0.mp4' type='video/mp4'></source>
      </video>
      <i>Phase 2</i>
    </div>
    <div style={{ marginBottom: 50 }}>
      <video controls preload='auto' loop='loop'>
        <source src='//i.imgur.com/fllHbpV.mp4' type='video/mp4'></source>
      </video>
      <i>Phase 3</i>
    </div>
  </div>
);

export const prev = 'destructeur';
export const displayPrev = 'Destructeur';

export const next = 'kaelthas';
export const displayNext = "Kael'Thas";

export let details = require('./xymox-details.html');
