import React from 'react';

export const name = 'Altimor';
export const title = 'le Veneur';

export const overview = {
  general: require('./altimor-general.html'),
  dps: require('./altimor-dps.html'),
  tank: require('./altimor-tank.html'),
  heal: require('./altimor-heal.html'),
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
        <source src='//i.imgur.com/1WDhgm1.mp4' type='video/mp4'></source>
      </video>
      <i>Phase 1</i>
    </div>
    <div style={{ marginBottom: 50 }}>
      <video controls preload='auto' loop='loop'>
        <source src='//i.imgur.com/rvOx4vv.mp4' type='video/mp4'></source>
      </video>
      <i>Phase 2</i>
    </div>
    <div style={{ marginBottom: 50 }}>
      <video controls preload='auto' loop='loop'>
        <source src='//i.imgur.com/KFVMMyq.mp4' type='video/mp4'></source>
      </video>
      <i>Phase 3</i>
    </div>
  </div>
);

export const prev = 'hurlaile';
export const displayPrev = 'Hurlaile';

export const next = 'destructeur';
export const displayNext = 'Destructeur';

export let details = require('./altimor-details.html');
