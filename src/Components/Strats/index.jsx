import React, { useEffect } from 'react';

import { Tile, Section, Heading, Box } from 'react-bulma-components';
import { Link } from 'react-router-dom';

const styleCastle = {
  backgroundImage: 'url(https://wow.zamimg.com/uploads/guide/header/10380.jpg?1591192284)',
  backgroundSize: 'cover',
  backgroundPosition: 'right 50% bottom 20%',
  height: '30vh',
};

const stylePalais = {
  backgroundImage: 'url(https://render-eu.worldofwarcraft.com/zones/the-eternal-palace-small.jpg)',
  backgroundSize: 'cover',
  height: '30vh',
};

const styleNyalotha = {
  backgroundImage:
    'url(https://www.mamytwink.com/upload/news/2019/octobre/15/tests-nyalotha-ptr-patch-wow.jpg)',
  backgroundSize: 'cover',
  height: '30vh',
};

const styleBfa = {
  backgroundImage:
    'url(https://i.pinimg.com/originals/b1/72/91/b17291a0263dc9e998d62e5d8e88f5ed.png)',
  backgroundSize: 'contain no-repeat',
  backgroundPosition: 'right 50% bottom 20%',
  backgroundRepeat: 'no-repeat',
  backgroundColor: 'black',
  marginBottom: '20px',
};

const styleSL = {
  backgroundImage:
    'url(https://images.blz-contentstack.com/v3/assets/blt3452e3b114fab0cd/blt7e63e962dfb8236b/5dbb292e5b809038b2505c21/Bastion_Postcard.jpg)',
  backgroundSize: 'contain no-repeat',
  backgroundPosition: 'right 55% bottom 75%',
  backgroundRepeat: 'no-repeat',
  backgroundColor: 'black',
  marginBottom: '20px',
};

const Strats = () => {
  useEffect(() => {
    document.title = `Stratégies - Secret des Anciens`;
  }, []);

  return (
    <div className='columns is-centered'>
      <div className='column is-6'>
        <Box style={{ minHeight: '92vh' }}>
          <Section>
            <section className='hero' style={styleSL}>
              <div className='hero-body'>
                <div className='container has-text-left'>
                  <h1 className='title is-1 has-text-light'>Raids</h1>
                  <h3 className='subtitle is-3 has-text-light'>Ombreterre</h3>
                </div>
              </div>
            </section>
            <Tile kind='ancestor'>
              <Link className='tile is-parent' to='/strats/nathria'>
                <Tile
                  renderAs='article'
                  kind='child'
                  notification
                  color='primary'
                  className='has-text-left'
                  style={styleCastle}
                >
                  <Heading size={2}>Chateau Nathria</Heading>
                  <Heading subtitle>9.0</Heading>
                </Tile>
              </Link>
            </Tile>
          </Section>
          <Section>
            <section className='hero' style={styleBfa}>
              <div className='hero-body'>
                <div className='container has-text-left'>
                  <h3 className='subtitle is-3 has-text-light'>Battle for Azeroth</h3>
                </div>
              </div>
            </section>
            <Tile kind='ancestor'>
              <Link className='tile is-parent' to='/strats/palais'>
                <Tile
                  renderAs='article'
                  kind='child'
                  notification
                  color='primary'
                  className='has-text-left'
                  style={stylePalais}
                >
                  <Heading size={2}>Palais Eternel</Heading>
                  <Heading subtitle>8.2</Heading>
                </Tile>
              </Link>
              <Link className='tile is-parent' to='/strats/nyalotha'>
                <Tile
                  renderAs='article'
                  kind='child'
                  notification
                  color='success'
                  className='has-text-left'
                  style={styleNyalotha}
                >
                  <Heading size={2}>Ny'alotha</Heading>
                  <Heading subtitle>8.3</Heading>
                </Tile>
              </Link>
            </Tile>
          </Section>
        </Box>
      </div>
    </div>
  );
};

export default Strats;
