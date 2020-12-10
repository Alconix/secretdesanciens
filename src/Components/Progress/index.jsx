import React, { useEffect } from 'react';
import { Box, Section } from 'react-bulma-components';

const heroStyle = {
  backgroundImage: 'url(https://puu.sh/EyPQx/1fe336010b.png)',
  marginBottom: '20px',
  backgroundSize: 'contain',
  backgroundPosition: 'right 0%',
  backgroundRepeat: 'no-repeat',
};

const Progress = () => {
  useEffect(() => {
    document.title = `Progress - Secret des Anciens`;
  }, []);

  return (
    <div className='columns is-centered'>
      <div className='column is-6'>
        <Box style={{ minHeight: '92vh' }}>
          <Section>
            <section className='hero' style={heroStyle}>
              <div className='hero-body'>
                <div className='container has-text-left'>
                  <h1 className='title is-1 has-text-light'>Progress</h1>
                  <h3 className='subtitle is-3 has-text-light'>Secret des Anciens</h3>
                </div>
              </div>
            </section>
            <div className='has-text-left'>
              <table className='table is-fullwidth is-hoverable'>
                <thead>
                  <tr>
                    <th>Palier</th>
                    <th>Raid</th>
                    <th>Normal</th>
                    <th>Heroic</th>
                    <th>Mythic</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td style={{ paddingLeft: '1.5em' }}>25</td>
                    <td>Chateau Nathria</td>
                    <td style={{ paddingLeft: '1.5em' }}>3/10</td>
                    <td style={{ paddingLeft: '1.5em' }}>0/10</td>
                    <td style={{ paddingLeft: '1.5em' }}>0/10</td>
                  </tr>
                  <tr>
                  <tr>
                    <td style={{ paddingLeft: '1.5em' }}>25</td>
                    <td>Ny'alotha</td>
                    <td style={{ paddingLeft: '1.5em' }}>12/12</td>
                    <td style={{ paddingLeft: '1.5em' }}>12/12</td>
                    <td style={{ paddingLeft: '1.5em' }}>0/12</td>
                  </tr>
                  <tr>
                    <td style={{ paddingLeft: '1.5em' }}>24</td>
                    <td>Palais Eternel</td>
                    <td style={{ paddingLeft: '1.7em' }}>8/8</td>
                    <td style={{ paddingLeft: '1.7em' }}>8/8</td>
                    <td style={{ paddingLeft: '1.7em' }}>3/8</td>
                  </tr>
                  <tr>
                    <td style={{ paddingLeft: '1.5em' }}>23</td>
                    <td>Creuset des tempêtes</td>
                    <td style={{ paddingLeft: '1.7em' }}>2/2</td>
                    <td style={{ paddingLeft: '1.7em' }}>2/2</td>
                    <td style={{ paddingLeft: '1.7em' }}>0/2</td>
                  </tr>
                  <tr>
                    <td style={{ paddingLeft: '1.5em' }}>23</td>
                    <td>Bataille de Dazar'Alor</td>
                    <td style={{ paddingLeft: '1.7em' }}>9/9</td>
                    <td style={{ paddingLeft: '1.7em' }}>9/9</td>
                    <td style={{ paddingLeft: '1.7em' }}>0/9</td>
                  </tr>
                  <tr>
                    <td style={{ paddingLeft: '1.5em' }}>22</td>
                    <td>Uldir</td>
                    <td style={{ paddingLeft: '1.7em' }}>8/8</td>
                    <td style={{ paddingLeft: '1.7em' }}>8/8</td>
                    <td style={{ paddingLeft: '1.7em' }}>1/8</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </Section>
        </Box>
      </div>
    </div>
  );
};

export default Progress;
