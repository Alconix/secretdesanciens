import React from 'react';

export const name = 'Hurlaile';
export const title = '';

export const overview = {
  general: require('./hurlaile-general.html'),
  dps: require('./hurlaile-dps.html'),
  tank: require('./hurlaile-tank.html'),
  heal: require('./hurlaile-heal.html'),
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
        <source src='//i.imgur.com/5XIOGlm.mp4' type='video/mp4'></source>
      </video>
      <i>Phase 1</i>
    </div>
    <div style={{ marginBottom: 50 }}>
      <video controls preload='auto' loop='loop'>
        <source src='//i.imgur.com/If1uqkU.mp4' type='video/mp4'></source>
      </video>
      <i>Phase 2</i>
    </div>
  </div>
);

export const next = 'altimor';
export const displayNext = 'Altimor';

export let details = require('./hurlaile-details.html');
