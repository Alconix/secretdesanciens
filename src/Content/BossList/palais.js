import React from "react";

import { Section, Tile, Heading, Box } from "react-bulma-components";

const tileStyle = {
  height: "13vh",
};

const heroStyle = {
  backgroundImage:
    "url(https://momentus.wtf/images/progress/30-07-19-10-bfa-the-eternal-palace-banner.jpg)",
  backgroundSize: "contain no-repeat",
  backgroundPosition: "right 50% bottom 100%",
  backgroundRepeat: "no-repeat",
  backgroundColor: "black",
  marginBottom: "20px",
};

export const name = "Palais Eternel";

export const BossList = () => {
  return (
    <div className='columns is-centered'>
      <div className='column is-6'>
        <Box style={{ minHeight: "92vh" }}>
          <Section>
            <section className='hero' style={heroStyle}>
              <div className='hero-body'>
                <div className='container has-text-left'>
                  <h1 className='title is-1 has-text-light'>Boss</h1>
                  <h3 className='subtitle is-3 has-text-light'>
                    Palais Eternel
                  </h3>
                </div>
              </div>
            </section>
            <Tile kind='ancestor'>
              <a className='tile is-parent' href='/strats/palais/sivara'>
                <Tile
                  renderAs='article'
                  kind='child'
                  notification
                  color='success'
                  className='has-text-left'
                  style={tileStyle}
                >
                  <Heading subtitle>Commandant abyssal</Heading>
                  <Heading>Sivara</Heading>
                </Tile>
              </a>
              <a className='tile is-parent' href='/strats/palais/behemoth'>
                <Tile
                  renderAs='article'
                  kind='child'
                  notification
                  color='success'
                  className='has-text-left'
                  style={tileStyle}
                >
                  <Heading>Béhémoth</Heading>
                  <Heading subtitle>Des flots noirs</Heading>
                </Tile>
              </a>
              <a className='tile is-parent' href='/strats/palais/radiance'>
                <Tile
                  renderAs='article'
                  kind='child'
                  notification
                  color='success'
                  className='has-text-left'
                  style={tileStyle}
                >
                  <Heading>Radiance</Heading>
                  <Heading subtitle>d'Azshara</Heading>
                </Tile>
              </a>
            </Tile>
            <Tile kind='ancestor'>
              <a className='tile is-parent' href='/strats/palais/corsandre'>
                <Tile
                  renderAs='article'
                  kind='child'
                  notification
                  color='success'
                  className='has-text-left'
                  style={tileStyle}
                >
                  <Heading subtitle>Dame</Heading>
                  <Heading>Corsandre</Heading>
                </Tile>
              </a>
              <a className='tile is-parent' href='/strats/palais/orgozoa'>
                <Tile
                  renderAs='article'
                  kind='child'
                  notification
                  color='success'
                  className='has-text-left'
                  style={tileStyle}
                >
                  <Heading>Orgozoa</Heading>
                </Tile>
              </a>
              <a className='tile is-parent' href='/strats/palais/cour'>
                <Tile
                  renderAs='article'
                  kind='child'
                  notification
                  color='success'
                  className='has-text-left'
                  style={tileStyle}
                >
                  <Heading>Cour</Heading>
                  <Heading subtitle>de la reine</Heading>
                </Tile>
              </a>
            </Tile>
            <Tile kind='ancestor'>
              <a className='tile is-parent' href='/strats/palais/zaqul'>
                <Tile
                  renderAs='article'
                  kind='child'
                  notification
                  color='success'
                  className='has-text-left'
                  style={tileStyle}
                >
                  <Heading>Za'qul</Heading>
                  <Heading subtitle>héraut de Ny'alotha</Heading>
                </Tile>
              </a>
              <a className='tile is-parent' href='/strats/palais/azshara'>
                <Tile
                  renderAs='article'
                  kind='child'
                  notification
                  color='success'
                  className='has-text-left'
                  style={tileStyle}
                >
                  <Heading subtitle>Reine</Heading>
                  <Heading>Azshara</Heading>
                </Tile>
              </a>
              <div className='tile is-parent' />
            </Tile>
          </Section>
        </Box>
      </div>
    </div>
  );
};
