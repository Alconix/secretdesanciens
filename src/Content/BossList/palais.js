import React from "react";

import { Section, Tile, Heading, Box } from "react-bulma-components";
import { Link } from "react-router-dom";

const tileStyle = {
  height: "13vh",
};

const heroStyle = {
  backgroundImage: "url(/ep-banner.jpg)",
  backgroundSize: "contain no-repeat",
  backgroundPosition: "right 50% bottom 100%",
  backgroundRepeat: "no-repeat",
  backgroundColor: "black",
  marginBottom: "20px",
};

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
              <Link className='tile is-parent' to='/palais/sivara'>
                <Tile
                  renderAs='article'
                  kind='child'
                  notification
                  color='success'
                  className='has-text-left'
                  style={tileStyle}
                >
                  <Heading>Sivara</Heading>
                  <Heading subtitle>Commandant abyssal</Heading>
                </Tile>
              </Link>
              <Link className='tile is-parent' to='/palais/behemoth'>
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
              </Link>
              <Link className='tile is-parent' to='/palais/radiance'>
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
              </Link>
            </Tile>
            <Tile kind='ancestor'>
              <Link className='tile is-parent' to='/palais/corsandre'>
                <Tile
                  renderAs='article'
                  kind='child'
                  notification
                  color='success'
                  className='has-text-left'
                  style={tileStyle}
                >
                  <Heading>Corsandre</Heading>
                  <Heading subtitle>Dame</Heading>
                </Tile>
              </Link>
              <Link className='tile is-parent' to='/palais/orgozoa'>
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
              </Link>
              <Link className='tile is-parent' to='/palais/cour'>
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
              </Link>
            </Tile>
            <Tile kind='ancestor'>
              <Link className='tile is-parent' to='/palais/zaqul'>
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
              </Link>
              <Link className='tile is-parent' to='/palais/azshara'>
                <Tile
                  renderAs='article'
                  kind='child'
                  notification
                  color='success'
                  className='has-text-left'
                  style={tileStyle}
                >
                  <Heading>Azshara</Heading>
                  <Heading subtitle>Reine</Heading>
                </Tile>
              </Link>
              <div className='tile is-parent' />
            </Tile>
          </Section>
        </Box>
      </div>
    </div>
  );
};
