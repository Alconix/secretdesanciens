import React from "react";

import { Section, Tile, Heading, Box } from "react-bulma-components";

const tileStyle = {
  height: "13vh",
};

const heroStyle = {
  backgroundImage:
    "url(https://wow.zamimg.com/uploads/blog/images/17423-upcoming-nyalotha-raid-testing-on-8-3-ptr-wrathion-maut-prophet-skitra-ra-den.jpg)",
  backgroundSize: "cover",
  backgroundPosition: "right 50%",
  backgroundRepeat: "no-repeat",
  backgroundColor: "black",
  marginBottom: "20px",
};

export const name = "Ny'Alotha";

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
              <a className='tile is-parent' href='/strats/nyalotha/irion'>
                <Tile
                  renderAs='article'
                  kind='child'
                  notification
                  className='has-text-left is-danger'
                  style={tileStyle}
                >
                  <Heading>Irion</Heading>
                  <Heading subtitle>L'Empereur Noir</Heading>
                </Tile>
              </a>
              <a className='tile is-parent' href='/strats/nyalotha/maut'>
                <Tile
                  renderAs='article'
                  kind='child'
                  notification
                  className='has-text-left is-danger'
                  style={tileStyle}
                >
                  <Heading>Maut</Heading>
                </Tile>
              </a>
              <a className='tile is-parent' href='/strats/nyalotha/skitra'>
                <Tile
                  renderAs='article'
                  kind='child'
                  notification
                  className='has-text-left is-danger'
                  style={tileStyle}
                >
                  <Heading subtitle>Le prophète</Heading>
                  <Heading>Skitra</Heading>
                </Tile>
              </a>
            </Tile>
            <Tile kind='ancestor'>
              <a className='tile is-parent' href='/strats/nyalotha/xanesh'>
                <Tile
                  renderAs='article'
                  kind='child'
                  notification
                  className='has-text-left is-danger'
                  style={tileStyle}
                >
                  <Heading subtitle>Sombre Inquisitrice</Heading>
                  <Heading>Xanesh</Heading>
                </Tile>
              </a>
              <a className='tile is-parent' href='/strats/nyalotha/conscience'>
                <Tile
                  renderAs='article'
                  kind='child'
                  notification
                  className='has-text-left is-danger'
                  style={tileStyle}
                >
                  <Heading>Conscience</Heading>
                  <Heading subtitle>Collective</Heading>
                </Tile>
              </a>
              <a className='tile is-parent' href='/strats/nyalotha/shad-har'>
                <Tile
                  renderAs='article'
                  kind='child'
                  notification
                  className='has-text-left is-danger'
                  style={tileStyle}
                >
                  <Heading>Shad'har</Heading>
                  <Heading subtitle>L'insatiable</Heading>
                </Tile>
              </a>
            </Tile>
            <Tile kind='ancestor'>
              <a className='tile is-parent' href='/strats/nyalotha/drest-agath'>
                <Tile
                  renderAs='article'
                  kind='child'
                  notification
                  className='has-text-left is-danger'
                  style={tileStyle}
                >
                  <Heading>Drest'agath</Heading>
                </Tile>
              </a>
              <a className='tile is-parent' href='/strats/nyalotha/vexiona'>
                <Tile
                  renderAs='article'
                  kind='child'
                  notification
                  className='has-text-left is-danger'
                  style={tileStyle}
                >
                  <Heading>Vexiona</Heading>
                </Tile>
              </a>
              <a className='tile is-parent' href='/strats/nyalotha/ra-den'>
                <Tile
                  renderAs='article'
                  kind='child'
                  notification
                  className='has-text-left is-danger'
                  style={tileStyle}
                >
                  <Heading>Ra Den</Heading>
                  <Heading subtitle>Le Spolié</Heading>
                </Tile>
              </a>
            </Tile>
            <Tile kind='ancestor'>
              <a className='tile is-parent' href='/strats/nyalotha/il-gynoth'>
                <Tile
                  renderAs='article'
                  kind='child'
                  notification
                  className='has-text-left is-danger'
                  style={tileStyle}
                >
                  <Heading>Il'gynoth</Heading>
                  <Heading subtitle>Corruption réssucitée</Heading>
                </Tile>
              </a>
              <a className='tile is-parent' href='/strats/nyalotha/carapace'>
                <Tile
                  renderAs='article'
                  kind='child'
                  notification
                  className='has-text-left is-danger'
                  style={tileStyle}
                >
                  <Heading>Carapace</Heading>
                  <Heading subtitle>de N'Zoth</Heading>
                </Tile>
              </a>
              <a className='tile is-parent' href='/strats/nyalotha/nzoth'>
                <Tile
                  renderAs='article'
                  kind='child'
                  notification
                  className='has-text-left is-danger'
                  style={tileStyle}
                >
                  <Heading>N'Zoth</Heading>
                  <Heading subtitle>Le corrupteur</Heading>
                </Tile>
              </a>
            </Tile>
          </Section>
        </Box>
      </div>
    </div>
  );
};
