import React, { useState } from "react";
import { useLocation, NavLink, Link } from "react-router-dom";
import { Navbar, Modal, Section, Button } from "react-bulma-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faWrench } from "@fortawesome/free-solid-svg-icons";

const DropItem = props => {
  return (
    <NavLink
      className='navbar-item'
      activeClassName='is-active'
      to={props.to}
      onClick={props.onClick}
    >
      {props.name}
    </NavLink>
  );
};

// #region bosses
const bossesEP = (
  <Navbar.Item dropdown hoverable href='#'>
    <Navbar.Link>
      <b>Boss</b>
    </Navbar.Link>
    <Navbar.Dropdown>
      <DropItem name='Commandant Abyssal Sivara' to='/palais/sivara' />
      <DropItem name='Béhémoth des flots noirs' to='/palais/behemoth' />
      <DropItem name="Radiance d'Azshara" to='/palais/radiance' />
      <DropItem name='Dame Corsandre' to='/palais/corsandre' />
      <DropItem name='Orgozoa' to='/palais/orgozoa' />
      <DropItem name='Cour de la reine' to='/palais/cour' />
      <DropItem name="Za'qul, héraut de Ny'alotha" to='/palais/zaqul' />
      <DropItem name='Reine Azshara' to='/palais/azshara' />
    </Navbar.Dropdown>
  </Navbar.Item>
);

const bossesNA = (
  <Navbar.Item dropdown hoverable href='#'>
    <Navbar.Link>
      <b>Boss</b>
    </Navbar.Link>
    <Navbar.Dropdown>
      <DropItem name="Irion, l'empereur noir" to='/nyalotha/irion' />
      <DropItem name='Maut' to='/nyalotha/maut' />
      <DropItem name='Prophète Skitra' to='/nyalotha/skitra' />
      <DropItem name='Sombre inquisitrice Xanesh' to='/nyalotha/xanesh' />
      <DropItem name='La conscience collective' to='/nyalotha/conscience' />
      <DropItem name="Shad'har l'insatiable" to='/nyalotha/shad-har' />
      <DropItem name="Drest'agath" to='/nyalotha/drest-agath' />
      <DropItem name='Vexiona' to='/nyalotha/vexiona' />
      <DropItem name='Ra-den le dépouillé' to='/nyalotha/ra-den' />
      <DropItem
        name="Il'gynoth, la corruption ressucitée"
        to='/nyalotha/il-gynoth'
      />
      <DropItem name="Carapace de N'Zoth" to='/nyalotha/carapace' />
      <DropItem name="N'Zoth, le corrupteur" to='/nyalotha/nzoth' />
    </Navbar.Dropdown>
  </Navbar.Item>
);
// #endregion

// #region config modal
const ConfigModal = props => {
  const handleClickTank = () => {
    props.changeConfig("tank", !props.config.tank);
  };

  const handleClickDps = () => {
    props.changeConfig("dps", !props.config.dps);
  };

  const handleClickHeal = () => {
    props.changeConfig("heal", !props.config.heal);
  };

  return (
    <Modal show={props.open} onClose={() => props.setOpen(false)} closeOnBlur>
      <Modal.Content style={{ backgroundColor: "white" }}>
        <Section>
          <h1 className='subtitle'>Configuration</h1>
        </Section>
        <div
          className='columns is-vcentered is-centered'
          style={{ maxWidth: "640px" }}
        >
          <div className='column has-text-centered is-2'>
            <img
              className='is-rounded'
              src={props.config.tank ? "" : "/tank.png"}
              onClick={handleClickTank}
              alt='tank'
              style={{ cursor: "pointer" }}
            />
          </div>
          <div className='column has-text-centered is-2'>
            <img
              className='is-rounded'
              src={props.config.heal ? "" : "/heal.png"}
              onClick={handleClickHeal}
              alt='heal'
              style={{ cursor: "pointer" }}
            />
          </div>
          <div className='column has-text-centered is-2'>
            <img
              className='is-rounded'
              src={props.config.dps ? "" : "/dps.png"}
              onClick={handleClickDps}
              alt='dps'
              style={{ cursor: "pointer" }}
            />
          </div>
        </div>
        <br />
        <Button
          color='success'
          pull='right'
          style={{
            marginLeft: "20px",
            marginBottom: "20px",
            marginRight: "20px",
            textAlign: "right",
          }}
          onClick={() => props.setOpen(false)}
        >
          Valider
        </Button>
      </Modal.Content>
    </Modal>
  );
};
// #endregion

const NavigationBar = props => {
  const [open, setOpen] = useState(false);
  const [active, setActive] = useState(false);
  const [raidOpen, setRaidOpen] = useState(false);
  let location = useLocation();
  let params = location.pathname.split("/").filter(elt => elt !== "");

  let raid = "";

  if (params.length >= 1) {
    raid = params[0];
  }

  return (
    <div>
      <Navbar color='link' fixed='top' active={active}>
        <div className='navbar-brand'>
          <Link to='/' className='navbar-item'>
            <img src='/wow.png' alt='wow' />
            <h3
              className='title is-4'
              style={{ paddingLeft: "15px", paddingBottom: "5px" }}
            >
              Secret des Anciens
            </h3>
          </Link>
          <Navbar.Burger
            active={active.toString()}
            onClick={() => setActive(!active)}
          />
        </div>
        <Navbar.Divider />
        <Navbar.Menu>
          <Navbar.Item dropdown hoverable active={raidOpen}>
            <Navbar.Link onClick={() => setRaidOpen(!raidOpen)}>
              <b>Raids</b>
            </Navbar.Link>
            <Navbar.Dropdown onSelect={() => console.log("ok")}>
              <DropItem
                name="Ny'alotha"
                to='/nyalotha'
                onClick={() => setRaidOpen(false)}
              />
              <DropItem
                name='Palais Eternel'
                to='/palais'
                onClick={() => setRaidOpen(false)}
              />
            </Navbar.Dropdown>
          </Navbar.Item>
          {raid && raid === "palais" && bossesEP}
          {raid && raid === "nyalotha" && bossesNA}
          <Navbar.Container position='end'>
            <a
              className='navbar-item'
              href='http://secretdesanciens.guildi.com/fr/'
              target='_blank'
              rel='noopener noreferrer'
            >
              <b>Site / Forum</b>
            </a>
            <Navbar.Item onClick={() => setOpen(true)}>
              <FontAwesomeIcon icon={faWrench} size='lg' />
            </Navbar.Item>
          </Navbar.Container>
        </Navbar.Menu>
      </Navbar>
      <ConfigModal
        open={open}
        setOpen={setOpen}
        config={props.config}
        changeConfig={props.changeConfig}
      />
    </div>
  );
};

export default NavigationBar;
