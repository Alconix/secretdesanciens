import React from "react";

import { Section, Tile, Heading, Box } from "react-bulma-components";
import { Link } from "react-router-dom";

const tileStyle = {
  height: "13vh",
};

const heroStyle = {
  backgroundImage: "url(/ep-banner.jpg)",
  backgroundSize: "contain no-repeat",
  backgroundPosition: "right 50% bottom 80%",
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
                  <h3 className='subtitle is-3 has-text-light'>Ny'Alotha</h3>
                </div>
              </div>
            </section>
            <Tile kind='ancestor'>
              <Link className='tile is-parent' to='/nyalotha/irion'>
                <Tile
                  renderAs='article'
                  kind='child'
                  notification
                  color='danger'
                  className='has-text-left'
                  style={tileStyle}
                >
                  <Heading>Irion</Heading>
                  <Heading subtitle>L'Empereur Noir</Heading>
                </Tile>
              </Link>
              <Link className='tile is-parent' to='/nyalotha/maut'>
                <Tile
                  renderAs='article'
                  kind='child'
                  notification
                  color='danger'
                  className='has-text-left'
                  style={tileStyle}
                >
                  <Heading>Maut</Heading>
                </Tile>
              </Link>
              <Link className='tile is-parent' to='/nyalotha/skitra'>
                <Tile
                  renderAs='article'
                  kind='child'
                  notification
                  color='danger'
                  className='has-text-left'
                  style={tileStyle}
                >
                  <Heading>Skitra</Heading>
                  <Heading subtitle>Le prophète</Heading>
                </Tile>
              </Link>
            </Tile>
            <Tile kind='ancestor'>
              <Link className='tile is-parent' to='/nyalotha/xanesh'>
                <Tile
                  renderAs='article'
                  kind='child'
                  notification
                  color='danger'
                  className='has-text-left'
                  style={tileStyle}
                >
                  <Heading>Xanesh</Heading>
                  <Heading subtitle>Sombre Inquisitrice</Heading>
                </Tile>
              </Link>
              <Link className='tile is-parent' to='/nyalotha/conscience'>
                <Tile
                  renderAs='article'
                  kind='child'
                  notification
                  color='danger'
                  className='has-text-left'
                  style={tileStyle}
                >
                  <Heading>Conscience</Heading>
                  <Heading subtitle>Collective</Heading>
                </Tile>
              </Link>
              <Link className='tile is-parent' to='/nyalotha/shad-har'>
                <Tile
                  renderAs='article'
                  kind='child'
                  notification
                  color='danger'
                  className='has-text-left'
                  style={tileStyle}
                >
                  <Heading>Shad'har</Heading>
                  <Heading subtitle>L'insatiable</Heading>
                </Tile>
              </Link>
            </Tile>
            <Tile kind='ancestor'>
              <Link className='tile is-parent' to='/nyalotha/drest-agath'>
                <Tile
                  renderAs='article'
                  kind='child'
                  notification
                  color='danger'
                  className='has-text-left'
                  style={tileStyle}
                >
                  <Heading>Drest'agath</Heading>
                </Tile>
              </Link>
              <Link className='tile is-parent' to='/nyalotha/vexiona'>
                <Tile
                  renderAs='article'
                  kind='child'
                  notification
                  color='danger'
                  className='has-text-left'
                  style={tileStyle}
                >
                  <Heading>Vexiona</Heading>
                </Tile>
              </Link>
              <Link className='tile is-parent' to='/nyalotha/ra-den'>
                <Tile
                  renderAs='article'
                  kind='child'
                  notification
                  color='danger'
                  className='has-text-left'
                  style={tileStyle}
                >
                  <Heading>Ra'den</Heading>
                  <Heading subtitle>Le dépouillé</Heading>
                </Tile>
              </Link>
            </Tile>
            <Tile kind='ancestor'>
              <Link className='tile is-parent' to='/nyalotha/il-gynoth'>
                <Tile
                  renderAs='article'
                  kind='child'
                  notification
                  color='danger'
                  className='has-text-left'
                  style={tileStyle}
                >
                  <Heading>Il'gynoth</Heading>
                  <Heading subtitle>Corruption réssucitée</Heading>
                </Tile>
              </Link>
              <Link className='tile is-parent' to='/nyalotha/carapace'>
                <Tile
                  renderAs='article'
                  kind='child'
                  notification
                  color='danger'
                  className='has-text-left'
                  style={tileStyle}
                >
                  <Heading>Carapace</Heading>
                  <Heading subtitle>de N'Zoth</Heading>
                </Tile>
              </Link>
              <Link className='tile is-parent' to='/nyalotha/nzoth'>
                <Tile
                  renderAs='article'
                  kind='child'
                  notification
                  color='danger'
                  className='has-text-left'
                  style={tileStyle}
                >
                  <Heading>N'Zoth</Heading>
                  <Heading subtitle>Le corrupteur</Heading>
                </Tile>
              </Link>
            </Tile>
          </Section>
        </Box>
      </div>
    </div>
  );
};
