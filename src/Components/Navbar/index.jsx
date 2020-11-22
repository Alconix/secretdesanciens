import React, { useState } from 'react';
import { useLocation } from 'react-router-dom';
import { Navbar } from 'react-bulma-components';
import { Firebase } from '../../firebase';
import { useAuthState } from 'react-firebase-hooks/auth';
import { invitationUrl } from '../../discord';

const DropItem = (props) => {
  const location = useLocation();
  const paramsLocation = location.pathname.split('/').filter((elt) => elt !== '');
  const paramsItem = props.to.split('/').filter((elt) => elt !== '');

  let classActivity = '';

  if (paramsItem.length === 2 && paramsLocation[1] === paramsItem[1]) {
    classActivity = 'navbar-item is-active';
  } else if (
    paramsItem.length >= 3 &&
    paramsLocation.length >= 3 &&
    paramsLocation[2] === paramsItem[2]
  ) {
    classActivity = 'navbar-item is-active';
  } else {
    classActivity = 'navbar-item';
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
      <DropItem name='Sombre inquisitrice Xanesh' to='/strats/nyalotha/xanesh' />
      <DropItem name='La conscience collective' to='/strats/nyalotha/conscience' />
      <DropItem name="Shad'har l'insatiable" to='/strats/nyalotha/shad-har' />
      <DropItem name="Drest'agath" to='/strats/nyalotha/drest-agath' />
      <DropItem name='Vexiona' to='/strats/nyalotha/vexiona' />
      <DropItem name='Ra-den le dépouillé' to='/strats/nyalotha/ra-den' />
      <DropItem name="Il'gynoth, la corruption ressuscitée" to='/strats/nyalotha/il-gynoth' />
      <DropItem name="Carapace de N'Zoth" to='/strats/nyalotha/carapace' />
      <DropItem name="N'Zoth, le corrupteur" to='/strats/nyalotha/nzoth' />
    </Navbar.Dropdown>
  </Navbar.Item>
);

const bossesCA = (
  <Navbar.Item dropdown hoverable href='#'>
    <Navbar.Link>
      <b>Boss</b>
    </Navbar.Link>
    <Navbar.Dropdown>
      <DropItem name='Hurlaile' to='/strats/nathria/hurlaile' />
      <DropItem name='Altimor le Veneur' to='/strats/nathria/altimor' />
      <DropItem name='Destructeur affamé' to='/strats/nathria/destructeur' />
      <DropItem name="Artificier Xy'mox" to='/strats/nathria/xymox' />
      <DropItem name='Salut du roi-soleil' to='/strats/nathria/kaelthas' />
      <DropItem name='Dame Inerva Sombreveine' to='/strats/nathria/sombreveine' />
      <DropItem name='Le conseil du sang' to='/strats/nathria/conseil' />
      <DropItem name='Fangepoing' to='/strats/nathria/fangepoing' />
      <DropItem name='Généraux de la Légion de pierre' to='/strats/nathria/generaux' />
      <DropItem name='Sire Denathrius' to='/strats/nathria/denathrius' />
    </Navbar.Dropdown>
  </Navbar.Item>
);
// #endregion

const NavigationBar = (props) => {
  let auth = null;
  const [user, init] = useAuthState(Firebase.auth());
  if (init) auth = JSON.parse(localStorage.getItem('authUser'));
  else auth = user;
  const [active, setActive] = useState(false);

  let location = useLocation();
  let params = location.pathname.split('/').filter((elt) => elt !== '');

  let raid = '';

  if (params.length >= 2) {
    raid = params[1];
  }

  return (
    <>
      <Navbar color='link' fixed='top' active={active}>
        <div className='navbar-brand'>
          <a href='/' className='navbar-item'>
            <img src='https://puu.sh/EyPRK/a0ff96251c.png' alt='wow' />
            <h3 className='title is-4' style={{ paddingLeft: '10px', paddingBottom: '2px' }}>
              <b>Secret des Anciens</b>
            </h3>
          </a>
          <Navbar.Burger active={active.toString()} onClick={() => setActive(!active)} />
        </div>
        <Navbar.Divider />
        <Navbar.Menu>
          <Navbar.Item dropdown hoverable>
            <Navbar.Link
              onClick={() => {
                window.location.assign('/strats');
              }}
            >
              <b>Raids</b>
            </Navbar.Link>
            <Navbar.Dropdown>
              <DropItem name='Chateau Nathria' to='/strats/nathria' />
              <hr class='navbar-divider' />
              <DropItem name="Ny'alotha" to='/strats/nyalotha' />
              <DropItem name='Palais Eternel' to='/strats/palais' />
            </Navbar.Dropdown>
          </Navbar.Item>
          {raid && raid === 'palais' && bossesEP}
          {raid && raid === 'nyalotha' && bossesNA}
          {raid && raid === 'nathria' && bossesCA}
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
                  <Navbar.Item href={`/users/${auth.uid}`}>Mon profil</Navbar.Item>
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
              href={invitationUrl}
              target='_blank'
              rel='noopener noreferrer'
            >
              <b>Discord</b>
            </a>
          </Navbar.Container>
        </Navbar.Menu>
      </Navbar>
    </>
  );
};

export default NavigationBar;
