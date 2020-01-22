import React from "react";

export const name = "Maut";

export const overview = {
  general: require("./maut-general.html"),
  dps: require("./maut-dps.html"),
  tank: require("./maut-tank.html"),
  heal: require("./maut-heal.html"),
};

export const info = (
  <section className='section'>
    <div>
      <div className='is-size-3 has-text-left'>Tank Boss</div>
      <table className='table is-bordered is-stripped is-fullwidth is-hoverable'>
        <thead>
          <tr>
            <th>Pourcentage</th>
            <th>Type</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>
              <span>50%</span>
            </td>
            <td>
              <span>Physique (10% Griffes d'ombre)</span>
            </td>
          </tr>
          <tr>
            <td>
              <span style={{ color: "rgb(204, 153, 255)" }}>40%</span>
            </td>
            <td>
              <span style={{ color: "rgb(204, 153, 255)" }}>
                Ombre (25% Blessures d'ombre)
              </span>
            </td>
          </tr>
          <tr>
            <td>
              <span style={{ color: "rgb(51, 102, 255)" }}>10%</span>
            </td>
            <td>
              <span style={{ color: "rgb(51, 102, 255)" }}>Arcane</span>
            </td>
          </tr>
        </tbody>
      </table>
      <div className='is-size-3 has-text-left'>Tank Add</div>
      <table className='table is-bordered is-stripped is-fullwidth is-hoverable'>
        <thead>
          <tr>
            <th>Pourcentage</th>
            <th>Type</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>
              <span>65%</span>
            </td>
            <td>
              <span>Physique</span>
            </td>
          </tr>
          <tr>
            <td>
              <span style={{ color: "rgb(204, 153, 255)" }}>35%</span>
            </td>
            <td>
              <span style={{ color: "rgb(204, 153, 255)" }}>
                Arcane / Ombre
              </span>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  </section>
);

export const video = (
  <div>
    <div className='embedresize'>
      <div>
        <iframe
          title='kirling sivara'
          src='https://www.youtube.com/embed/o3NfZ03VWuY'
          frameBorder='0'
          allow='accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture; fullscreen'
        ></iframe>
      </div>
    </div>
    <i>
      <br />
      Vidéo explicative du PTR par&nbsp;
      <a href='https://www.youtube.com/channel/UCX53iuepLC-tW6W-ONU97IQ'>
        Kirling
      </a>
    </i>
  </div>
);

export const prev = "irion";
export const displayPrev = "Irion";

export const next = "skitra";
export const displayNext = "Skitra";

export let details = require("./maut-details.html");
