import React from 'react';

import { Section, Tile, Heading, Box } from 'react-bulma-components';

const tileStyle = {
  height: '13vh',
};

const heroStyle = {
  backgroundImage: 'url(https://wow.zamimg.com/uploads/guide/header/10380.jpg?1591192284)',
  backgroundSize: 'cover',
  backgroundPosition: 'right 50% bottom 0',
  backgroundRepeat: 'no-repeat',
  backgroundColor: 'black',
  marginBottom: '20px',
};

export const name = "Ny'Alotha";

export const BossList = () => {
  return (
    <div className='columns is-centered'>
      <div className='column is-6'>
        <Box style={{ minHeight: '92vh' }}>
          <Section>
            <section className='hero' style={heroStyle}>
              <div className='hero-body'>
                <div className='container has-text-left'>
                  <h1 className='title is-1 has-text-light'>Boss</h1>
                  <h3 className='subtitle is-3 has-text-light'>Ny'Alotha</h3>
                </div>
              </div>
            </section>
            <Tile kind='ancestor'>
              <a className='tile is-parent' href='/strats/nathria/hurlaile'>
                <Tile
                  renderAs='article'
                  kind='child'
                  notification
                  className='has-text-left is-danger'
                  style={tileStyle}
                >
                  <Heading>Hurlaile</Heading>
                </Tile>
              </a>
              <a className='tile is-parent' href='/strats/nathria/altimor'>
                <Tile
                  renderAs='article'
                  kind='child'
                  notification
                  className='has-text-left is-danger'
                  style={tileStyle}
                >
                  <Heading>Altimor</Heading>
                  <Heading subtitle>le Veneur</Heading>
                </Tile>
              </a>
              <a className='tile is-parent' href='/strats/nathria/destructeur'>
                <Tile
                  renderAs='article'
                  kind='child'
                  notification
                  className='has-text-left is-danger'
                  style={tileStyle}
                >
                  <Heading>Destructeur</Heading>
                  <Heading subtitle>affamé</Heading>
                </Tile>
              </a>
            </Tile>
            <Tile kind='ancestor'>
              <a className='tile is-parent' href='/strats/nathria/xymox'>
                <Tile
                  renderAs='article'
                  kind='child'
                  notification
                  className='has-text-left is-danger'
                  style={tileStyle}
                >
                  <Heading subtitle>Artificier</Heading>
                  <Heading>Xy'mox</Heading>
                </Tile>
              </a>
              <a className='tile is-parent' href='/strats/nathria/kaelthas'>
                <Tile
                  renderAs='article'
                  kind='child'
                  notification
                  className='has-text-left is-danger'
                  style={tileStyle}
                >
                  <Heading>Kael'thas</Heading>
                  <Heading subtitle>Salut du roi-soleil</Heading>
                </Tile>
              </a>
              <a className='tile is-parent' href='/strats/nathria/sombreveine'>
                <Tile
                  renderAs='article'
                  kind='child'
                  notification
                  className='has-text-left is-danger'
                  style={tileStyle}
                >
                  <Heading>Dame Inerva</Heading>
                  <Heading subtitle>Sombreveine</Heading>
                </Tile>
              </a>
            </Tile>
            <Tile kind='ancestor'>
              <a className='tile is-parent' href='/strats/nathria/conseil'>
                <Tile
                  renderAs='article'
                  kind='child'
                  notification
                  className='has-text-left is-danger'
                  style={tileStyle}
                >
                  <Heading>Le conseil</Heading>
                  <Heading subtitle>du sang</Heading>
                </Tile>
              </a>
              <a className='tile is-parent' href='/strats/nathria/fangepoing'>
                <Tile
                  renderAs='article'
                  kind='child'
                  notification
                  className='has-text-left is-danger'
                  style={tileStyle}
                >
                  <Heading>Fangepoing</Heading>
                </Tile>
              </a>
              <a className='tile is-parent' href='/strats/nathria/generaux'>
                <Tile
                  renderAs='article'
                  kind='child'
                  notification
                  className='has-text-left is-danger'
                  style={tileStyle}
                >
                  <Heading>Généraux</Heading>
                  <Heading subtitle>de la Légion de pierre</Heading>
                </Tile>
              </a>
            </Tile>
            <Tile kind='ancestor'>
              <a className='tile is-parent' href='/strats/nathria/denathrius'>
                <Tile
                  renderAs='article'
                  kind='child'
                  notification
                  className='has-text-left is-danger'
                  style={tileStyle}
                >
                  <Heading subtitle>Sire</Heading>
                  <Heading>Denathrius</Heading>
                </Tile>
              </a>
              <div className='tile is-parent' />
              <div className='tile is-parent' />
            </Tile>
          </Section>
        </Box>
      </div>
    </div>
  );
};
