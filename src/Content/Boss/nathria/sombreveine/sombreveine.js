import React from 'react';

export const name = 'Dame Inerva';
export const title = 'Sombreveine';

export const overview = {
  general: require('./sombreveine-general.html'),
  dps: require('./sombreveine-dps.html'),
  tank: require('./sombreveine-tank.html'),
  heal: require('./sombreveine-heal.html'),
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
        <source src='//i.imgur.com/vpUZ3TT.mp4' type='video/mp4'></source>
      </video>
      <i>
        <a href='https://fr.wowhead.com/spell=325379'>Dévoiler les désirs</a>
      </i>
    </div>
    <div style={{ marginBottom: 50 }}>
      <video controls preload='auto' loop='loop'>
        <source src='//i.imgur.com/Jkvxllh.mp4' type='video/mp4'></source>
      </video>
      <i>
        <a href='https://fr.wowhead.com/spell=325769'>Anima en bouteille</a>
      </i>
    </div>
    <div style={{ marginBottom: 50 }}>
      <video controls preload='auto' loop='loop'>
        <source src='//i.imgur.com/YqblCoO.mp4' type='video/mp4'></source>
      </video>
      <i>
        <a href='https://fr.wowhead.com/spell=342288'>Vices et souffrance</a>
      </i>
    </div>
    <div style={{ marginBottom: 50 }}>
      <video controls preload='auto' loop='loop'>
        <source src='//i.imgur.com/EKd9w3l.mp4' type='video/mp4'></source>
      </video>
      <i>
        <a href='https://fr.wowhead.com/spell=342321'>Anima concentré</a>
      </i>
    </div>
  </div>
);

export const prev = 'kaelthas';
export const displayPrev = "Kael'Thas";

export const next = 'conseil';
export const displayNext = 'Conseil du sang';

export let details = require('./sombreveine-details.html');
