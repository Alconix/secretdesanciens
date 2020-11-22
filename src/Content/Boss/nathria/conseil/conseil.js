import React from 'react';

export const name = 'Le conseil';
export const title = 'du Sang';

export const overview = {
  general: require('./conseil-general.html'),
  dps: require('./conseil-dps.html'),
  tank: require('./conseil-tank.html'),
  heal: require('./conseil-heal.html'),
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
        <source src='//i.imgur.com/oC4XrbW.mp4' type='video/mp4'></source>
      </video>
      <i>Dance</i>
    </div>
    <div style={{ marginBottom: 50 }}>
      <video controls preload='auto' loop='loop'>
        <source src='//i.imgur.com/ivFyIAo.mp4' type='video/mp4'></source>
      </video>
      <i>Baronne Frieda</i>
    </div>
    <div style={{ marginBottom: 50 }}>
      <video controls preload='auto' loop='loop'>
        <source src='//i.imgur.com/AkOJ6cX.mp4' type='video/mp4'></source>
      </video>
      <i>Castellan Niklaus</i>
    </div>
    <div style={{ marginBottom: 50 }}>
      <video controls preload='auto' loop='loop'>
        <source src='//i.imgur.com/e7vKXup.mp4' type='video/mp4'></source>
      </video>
      <i>Seigneur Stavros</i>
    </div>
  </div>
);

export const prev = 'sombreveine';
export const displayPrev = 'Sombreveine';

export const next = 'fangepoing';
export const displayNext = 'Fangepoing';

export let details = require('./conseil-details.html');
