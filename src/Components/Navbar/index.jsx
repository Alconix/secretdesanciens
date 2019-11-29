import React, { useState } from "react";
import { useLocation } from "react-router-dom";
import { Navbar, Modal, Section, Button } from "react-bulma-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faWrench } from "@fortawesome/free-solid-svg-icons";
import { Firebase } from "../../firebase";
import { useAuthState } from "react-firebase-hooks/auth";

const DropItem = props => {
  const location = useLocation();
  const paramsLocation = location.pathname.split("/").filter(elt => elt !== "");
  const paramsItem = props.to.split("/").filter(elt => elt !== "");

  let classActivity = "";

  if (paramsItem.length === 2 && paramsLocation[1] === paramsItem[1]) {
    classActivity = "navbar-item is-active";
  } else if (
    paramsItem.length >= 3 &&
    paramsLocation.length >= 3 &&
    paramsLocation[2] === paramsItem[2]
  ) {
    classActivity = "navbar-item is-active";
  } else {
    classActivity = "navbar-item";
  }

  return (
    <a className={classActivity} href={props.to} onClick={props.onClick}>
      {props.name}
    </a>
  );
};

// #region bosses
const bossesEP = (
  <Navbar.Item dropdown hoverable href='#'>
    <Navbar.Link>
      <b>Boss</b>
    </Navbar.Link>
    <Navbar.Dropdown>
      <DropItem name='Commandant Abyssal Sivara' to='/strats/palais/sivara' />
      <DropItem name='Béhémoth des flots noirs' to='/strats/palais/behemoth' />
      <DropItem name="Radiance d'Azshara" to='/strats/palais/radiance' />
      <DropItem name='Dame Corsandre' to='/strats/palais/corsandre' />
      <DropItem name='Orgozoa' to='/strats/palais/orgozoa' />
      <DropItem name='Cour de la reine' to='/strats/palais/cour' />
      <DropItem name="Za'qul, héraut de Ny'alotha" to='/strats/palais/zaqul' />
      <DropItem name='Reine Azshara' to='/strats/palais/azshara' />
    </Navbar.Dropdown>
  </Navbar.Item>
);

const bossesNA = (
  <Navbar.Item dropdown hoverable href='#'>
    <Navbar.Link>
      <b>Boss</b>
    </Navbar.Link>
    <Navbar.Dropdown>
      <DropItem name="Irion, l'empereur noir" to='/strats/nyalotha/irion' />
      <DropItem name='Maut' to='/strats/nyalotha/maut' />
      <DropItem name='Prophète Skitra' to='/strats/nyalotha/skitra' />
      <DropItem
        name='Sombre inquisitrice Xanesh'
        to='/strats/nyalotha/xanesh'
      />
      <DropItem
        name='La conscience collective'
        to='/strats/nyalotha/conscience'
      />
      <DropItem name="Shad'har l'insatiable" to='/strats/nyalotha/shad-har' />
      <DropItem name="Drest'agath" to='/strats/nyalotha/drest-agath' />
      <DropItem name='Vexiona' to='/strats/nyalotha/vexiona' />
      <DropItem name='Ra-den le dépouillé' to='/strats/nyalotha/ra-den' />
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
              src={
                props.config.tank
                  ? "https://puu.sh/EyPQR/f264ef6a6c.png"
                  : "https://puu.sh/EyPQT/e46ac777be.png"
              }
              onClick={handleClickTank}
              alt='tank'
              style={{ cursor: "pointer" }}
            />
          </div>
          <div className='column has-text-centered is-2'>
            <img
              className='is-rounded'
              src={
                props.config.heal
                  ? "https://puu.sh/EyPR5/5cc97e33c9.png"
                  : "https://puu.sh/EyPR3/6a4316f42f.png"
              }
              onClick={handleClickHeal}
              alt='heal'
              style={{ cursor: "pointer" }}
            />
          </div>
          <div className='column has-text-centered is-2'>
            <img
              className='is-rounded'
              src={
                props.config.dps
                  ? "https://puu.sh/EyPQY/7c4771a50f.png"
                  : "https://puu.sh/EyPQU/d93df5421c.png"
              }
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
  const [auth, init] = useAuthState(Firebase.auth());
  const [open, setOpen] = useState(false);
  const [active, setActive] = useState(false);

  let location = useLocation();
  let params = location.pathname.split("/").filter(elt => elt !== "");

  let raid = "";

  if (params.length >= 2) {
    raid = params[1];
  }

  if (!init) {
    return (
      <div>
        <Navbar color='link' fixed='top' active={active}>
          <div className='navbar-brand'>
            <a href='/' className='navbar-item'>
              <img src='https://puu.sh/EyPRK/a0ff96251c.png' alt='wow' />
              <h3
                className='title is-4'
                style={{ paddingLeft: "10px", paddingBottom: "2px" }}
              >
                <b>Secret des Anciens</b>
              </h3>
            </a>
            <Navbar.Burger
              active={active.toString()}
              onClick={() => setActive(!active)}
            />
          </div>
          <Navbar.Divider />
          <Navbar.Menu>
            <Navbar.Item dropdown hoverable>
              <Navbar.Link>
                <b>Raids</b>
              </Navbar.Link>
              <Navbar.Dropdown>
                <DropItem name="Ny'alotha" to='/strats/nyalotha' />
                <DropItem name='Palais Eternel' to='/strats/palais' />
              </Navbar.Dropdown>
            </Navbar.Item>
            {raid && raid === "palais" && bossesEP}
            {raid && raid === "nyalotha" && bossesNA}
            <Navbar.Container position='end'>
              {auth && (
                <a className='navbar-item' href='/candidatures'>
                  <b>Candidatures</b>
                </a>
              )}
              {auth && (
                <Navbar.Item dropdown hoverable>
                  <Navbar.Link>
                    <b>{auth.displayName}</b>
                  </Navbar.Link>
                  <Navbar.Dropdown>
                    <Navbar.Item href={`/users/${auth.uid}`}>
                      Mon profil
                    </Navbar.Item>
                    <Navbar.Item
                      href='/'
                      onClick={() => {
                        Firebase.auth().signOut();
                      }}
                    >
                      Se déconnecter
                    </Navbar.Item>
                  </Navbar.Dropdown>
                </Navbar.Item>
              )}
              {!auth && (
                <a className='navbar-item' href='/login'>
                  <b>Login</b>
                </a>
              )}
              <a className='navbar-item' href='/progress'>
                <b>Progress</b>
              </a>
              <a
                className='navbar-item'
                href='http://secretdesanciens.guildi.com/fr/'
                target='_blank'
                rel='noopener noreferrer'
              >
                <b>Discord</b>
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
  } else {
    return <Navbar color='link' fixed='top' active={active} />;
  }
};

export default NavigationBar;
