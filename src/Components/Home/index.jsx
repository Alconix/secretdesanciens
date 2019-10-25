import React from "react";

import { Tile, Section, Heading, Box } from "react-bulma-components";
import { Link } from "react-router-dom";

const stylePalais = {
  backgroundImage: "url(/ep-raid.jpg)",
  backgroundSize: "cover",
  height: "30vh",
};

const styleNyalotha = {
  backgroundImage: "url(/na-raid.jpg)",
  backgroundSize: "cover",
  height: "30vh",
};

const heroStyle = {
  backgroundImage:
    "url(https://i.pinimg.com/originals/b1/72/91/b17291a0263dc9e998d62e5d8e88f5ed.png)",
  backgroundSize: "contain no-repeat",
  backgroundPosition: "right 50% bottom 20%",
  backgroundRepeat: "no-repeat",
  backgroundColor: "black",
  marginBottom: "20px",
};

const Home = props => {
  return (
    <div className='columns is-centered'>
      <div className='column is-6'>
        <Box style={{ minHeight: "92vh" }}>
          <Section>
            <section className='hero' style={heroStyle}>
              <div className='hero-body'>
                <div className='container has-text-left'>
                  <h1 className='title is-1 has-text-light'>Raids</h1>
                  <h3 className='subtitle is-3 has-text-light'>
                    Battle for Azeroth
                  </h3>
                </div>
              </div>
            </section>
            <Tile kind='ancestor'>
              <Link className='tile is-parent' to='/palais'>
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
              <Link className='tile is-parent' to='/nyalotha'>
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

export default Home;
