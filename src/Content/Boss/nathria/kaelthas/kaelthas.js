import React from 'react';

export const name = "Kael'thas";
export const title = 'Salut du roi-soleil';

export const overview = {
  general: require('./kaelthas-general.html'),
  dps: require('./kaelthas-dps.html'),
  tank: require('./kaelthas-tank.html'),
  heal: require('./kaelthas-heal.html'),
};

export const video = (
  <div>
    <div className='embedresize'>
      <div>
        <iframe
          title='kirling kaelthas'
          src='https://www.youtube.com/embed/LxXi6_9_O8o'
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

export const prev = 'xymox';
export const displayPrev = "Xy'mox";

export const next = 'sombreveine';
export const displayNext = 'Sombreveine';

export let details = require('./kaelthas-details.html');
