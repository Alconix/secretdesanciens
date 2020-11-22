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
    <div className='embedresize'>
      <div>
        <iframe
          title='kirling denathrius'
          src='https://www.youtube.com/embed/lEb7Qbzoh0g'
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

export const prev = 'generaux';
export const displayPrev = 'Généraux';

export let details = require('./denathrius-details.html');
