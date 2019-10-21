import React from "react";
import PropTypes from "prop-types";
import "react-bulma-components/dist/react-bulma-components.min.css";
import { useLocation, NavLink, Link } from "react-router-dom";
import { Navbar } from "react-bulma-components";

const DropItem = props => {
  return (
    <NavLink className='navbar-item' activeClassName='is-active' to={props.to}>
      {props.name}
    </NavLink>
  );
};

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
      <DropItem name='Cour de la reine' to='/palais/cours' />
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
      <DropItem name='Prophète Skitrar' to='/nyalotha/skitra' />
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

const NavigationBar = props => {
  let location = useLocation();
  let params = location.pathname.split("/").filter(elt => elt !== "");

  let boss = "";
  let raid = "";

  if (params.length === 2) {
    raid = params[0];
    boss = params[1];
  } else if (params.length === 1) raid = params[0];

  return (
    <div>
      <Navbar color='primary'>
        <Navbar.Brand>
          <Link to='/' className='navbar-item'>
            <img
              src='https://cdn1.iconfinder.com/data/icons/video-games-7/24/video_game_play_wow_world_of_warcraft-128.png'
              alt='wow'
            />
            <span style={{ paddingLeft: "15px" }}>Secret des Anciens</span>
          </Link>
        </Navbar.Brand>
        <Navbar.Burger />
        <Navbar.Item dropdown hoverable>
          <Navbar.Link>
            <b>Raids</b>
          </Navbar.Link>
          <Navbar.Dropdown>
            <DropItem name="Ny'alotha" to='/nyalotha' />
            <DropItem name='Palais Eternel' to='/palais' />
          </Navbar.Dropdown>
        </Navbar.Item>
        {raid && raid === "palais" && bossesEP}
        {raid && raid === "nyalotha" && bossesNA}
      </Navbar>
    </div>
  );
};

NavigationBar.propTypes = {
  raid: PropTypes.string.isRequired,
  boss: PropTypes.string.isRequired,
};

export default NavigationBar;
