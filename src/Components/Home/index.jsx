import React, { useState } from "react";
import { Section, Box } from "react-bulma-components";
import Carousel from "nuka-carousel";

const Home = () => {
  const [section, setSection] = useState("description");
  const [index, setIndex] = useState(0);

  const footerStyle = {
    marginLeft: "5%",
    marginTop: "20%",
    marginBottom: "5%",
  };

  const nyalothaStyle = {
    maxHeight: "50vh",
    width: 1000,
    backgroundImage:
      "url(https://wow.zamimg.com/uploads/blog/images/17423-upcoming-nyalotha-raid-testing-on-8-3-ptr-wrathion-maut-prophet-skitra-ra-den.jpg)",
    backgroundSize: "cover",
    display: "table",
    margin: "0 auto",
  };

  const epStyle = {
    maxHeight: "50vh",
    height: "40vh",
    width: 1000,
    backgroundImage:
      "url(https://warcraft-secrets.com/wp-content/uploads/The-Eternal-Palace-Raid.jpg)",
    backgroundSize: "cover",
    display: "table",
    margin: "0 auto",
  };

  const cosStyle = {
    maxHeight: "50vh",
    height: "40vh",
    width: 1000,
    backgroundImage:
      "url(https://wow.zamimg.com/uploads/screenshots/normal/843656-creuset-des-tempetes-les-reliques-de-l-ombre.jpg)",
    backgroundSize: "cover",
    backgroundPosition: "center",
    display: "table",
    margin: "0 auto",
  };

  const bodStyle = {
    maxHeight: "50vh",
    height: "40vh",
    width: 1000,
    backgroundImage:
      "url(https://www.mamytwink.com/upload/news/2018/octobre/09/trone-1.jpg)",
    backgroundSize: "cover",
    backgroundPosition: "center",
    display: "table",
    margin: "0 auto",
  };

  const uldirStyle = {
    maxHeight: "50vh",
    height: "40vh",
    width: 1000,
    backgroundImage:
      "url(https://wow.zamimg.com/uploads/blog/images/14592-guides-strategiques-pour-tous-les-boss-du-raid-duldir-par-fatbosstv-maintenant-d.jpg)",
    backgroundSize: "cover",
    backgroundPosition: "center",
    display: "table",
    margin: "0 auto",
  };

  const HomeCarousel = () => {
    return (
      <Carousel
        heightMode='first'
        style={{ marginBottom: "30px" }}
        pauseOnHover
        wrapAround
        autoplay
        slideIndex={index}
        afterSlide={slideIndex => setIndex(slideIndex)}
        width='100%'
      >
        <section
          className='hero'
          style={nyalothaStyle}
          onClick={() => {
            window.location.assign("/strats/nyalotha");
          }}
        >
          <div className='hero-body'></div>
          <div className='hero-footer' style={footerStyle}>
            <div className='container'>
              <h1 className='title is-1'>
                <b>Ny'Alotha</b>
              </h1>
              <h2 className='subtitle is-3'>Nouveau raid du path 8.3</h2>
            </div>
          </div>
        </section>
        <section
          className='hero'
          style={epStyle}
          onClick={() => {
            window.location.assign("/strats/palais");
          }}
        >
          <div className='hero-body'></div>
          <div className='hero-footer' style={footerStyle}>
            <div className='container'>
              <h1 className='title is-1'>
                <b>Palais Eternel</b>
              </h1>
              <h2 className='subtitle is-3'>Raid du path 8.2</h2>
            </div>
          </div>
        </section>
        <section className='hero' style={cosStyle}>
          <div className='hero-body'></div>
          <div className='hero-footer' style={footerStyle}>
            <div className='container'>
              <h1 className='title is-1'>
                <b>Creuset des Tempêtes</b>
              </h1>
              <h2 className='subtitle is-3'>Raid du path 8.1.5</h2>
            </div>
          </div>
        </section>
        <section className='hero' style={bodStyle}>
          <div className='hero-body'></div>
          <div className='hero-footer' style={footerStyle}>
            <div className='container'>
              <h1 className='title is-1'>
                <b>Bataille de Dazar'Alor</b>
              </h1>
              <h2 className='subtitle is-3'>Raid du path 8.1</h2>
            </div>
          </div>
        </section>
        <section className='hero' style={uldirStyle}>
          <div className='hero-body'></div>
          <div className='hero-footer' style={footerStyle}>
            <div className='container'>
              <h1 className='title is-1'>
                <b>Uldir</b>
              </h1>
              <h2 className='subtitle is-3'>Raid du path 8.0</h2>
            </div>
          </div>
        </section>
      </Carousel>
    );
  };

  const ButtonList = () => {
    return (
      <Box>
        <div className='columns'>
          <div className='column'>
            <button
              className={
                "button is-link is-fullwidth" +
                (section === "description" ? " is-active" : "")
              }
              onClick={() => {
                setSection("description");
              }}
            >
              Description
            </button>
          </div>
          <div className='column'>
            <button
              className={
                "button is-link is-fullwidth" +
                (section === "recrutement" ? " is-active" : "")
              }
              onClick={() => {
                setSection("recrutement");
              }}
            >
              Recrutement
            </button>
          </div>
          <div className='column'>
            <button
              className={
                "button is-link is-fullwidth" +
                (section === "charte" ? " is-active" : "")
              }
              onClick={() => {
                setSection("charte");
              }}
            >
              Charte
            </button>
          </div>
          <div className='column'>
            <button
              className={
                "button is-link is-fullwidth" +
                (section === "screenshots" ? " is-active" : "")
              }
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

          <HomeCarousel />

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
