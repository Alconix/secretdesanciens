import React from 'react';

export const name = 'Généraux';
export const title = 'de la Légion de pierre';

export const overview = {
  general: require('./generaux-general.html'),
  dps: require('./generaux-dps.html'),
  tank: require('./generaux-tank.html'),
  heal: require('./generaux-heal.html'),
};

export const video = (
  <div>
    <div className='embedresize'>
      <div>
        <iframe
          title='kirling generaux'
          src='https://www.youtube.com/embed/-NR2ONHNeqc'
          frameBorder='0'
          allow='accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture; fullscreen'
        ></iframe>
      </div>
    </div>
    <i>
      <br />
      Vidéo explicative du combat par&nbsp;
      <a href='https://www.youtube.com/channel/UCX53iuepLC-tW6W-ONU97IQ'>Kirling</a>
    </i>
  </div>
);

export const prev = 'fangepoing';
export const displayPrev = 'Fangepoing';

export const next = 'denathrius';
export const displayNext = 'Denathrius';

export let details = require('./generaux-details.html');
