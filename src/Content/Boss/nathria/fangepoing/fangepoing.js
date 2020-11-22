import React from 'react';

export const name = 'Fangepoing';
export const title = '';

export const overview = {
  general: require('./fangepoing-general.html'),
  dps: require('./fangepoing-dps.html'),
  tank: require('./fangepoing-tank.html'),
  heal: require('./fangepoing-heal.html'),
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
        <source src='//i.imgur.com/z9TpedT.mp4' type='video/mp4'></source>
      </video>
      <i>Phase 1</i>
    </div>
    <div style={{ marginBottom: 50 }}>
      <video controls preload='auto' loop='loop'>
        <source src='//i.imgur.com/rAwofEP.mp4' type='video/mp4'></source>
      </video>
      <i>Phase 2</i>
    </div>
  </div>
);

export const prev = 'conseil';
export const displayPrev = 'Conseil du Sang';

export const next = 'generaux';
export const displayNext = 'Généraux';

export let details = require('./fangepoing-details.html');
