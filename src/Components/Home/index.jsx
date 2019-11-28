import React, { useState } from "react";
import { Section, Box } from "react-bulma-components";

const Home = () => {
  const [section, setSection] = useState("description");

  const ButtonList = () => {
    return (
      <Box>
        <div className='columns'>
          <div className='column'>
            <button
              className='button is-link is-fullwidth'
              onClick={() => {
                setSection("description");
              }}
            >
              Description
            </button>
          </div>
          <div className='column'>
            <button
              className='button is-link is-fullwidth'
              onClick={() => {
                setSection("recrutement");
              }}
            >
              Recrutement
            </button>
          </div>
          <div className='column'>
            <button
              className='button is-link is-fullwidth'
              onClick={() => {
                setSection("charte");
              }}
            >
              Charte
            </button>
          </div>
          <div className='column'>
            <button
              className='button is-link is-fullwidth'
              onClick={() => {
                setSection("screenshots");
              }}
            >
              Screenshots
            </button>
          </div>
        </div>
      </Box>
    );
  };

  const Description = () => {
    return (
      <>
        <h1 className='title is-2'>Description</h1>
        <Box>Description de la guilde.</Box>
      </>
    );
  };

  const Recrutement = () => {
    return (
      <>
        <h1 className='title is-2'>Recrutement</h1>
        <Box>Recrutement de la guilde.</Box>
      </>
    );
  };

  const Screenshots = () => {
    return (
      <>
        <h1 className='title is-2'>Screenshots</h1>
        <Box>Screenshots de la guilde.</Box>
      </>
    );
  };

  const Charte = () => {
    return (
      <>
        <h1 className='title is-2'>Charte</h1>
        <Box>Charte de la guilde.</Box>
      </>
    );
  };

  return (
    <div className='columns is-centered'>
      <div className='column is-6'>
        <Section className='has-text-left'>
          <h1 className='title is-1'>
            <b>Secret des Anciens</b>
          </h1>

          <ButtonList />

          {section === "description" && <Description />}
          {section === "recrutement" && <Recrutement />}
          {section === "charte" && <Charte />}
          {section === "screenshots" && <Screenshots />}
        </Section>
      </div>
    </div>
  );
};

export default Home;
