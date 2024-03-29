import React, { useState } from 'react';
import { Section, Box } from 'react-bulma-components';
import Carousel from 'nuka-carousel';

const HomeCarousel = () => {
  const [index, setIndex] = useState(0);

  const footerStyle = {
    marginLeft: '5%',
    marginTop: '20%',
    marginBottom: '5%',
  };

  const nathriaStyle = {
    height: '40vh',
    backgroundImage: 'url(https://pbs.twimg.com/media/EesIm8dU0AAhl4S?format=jpg&name=large)',
    backgroundSize: 'cover',
    margin: '0 auto',
  };

  const nyalothaStyle = {
    height: '40vh',
    backgroundImage:
      'url(https://wow.zamimg.com/uploads/blog/images/17423-upcoming-nyalotha-raid-testing-on-8-3-ptr-wrathion-maut-prophet-skitra-ra-den.jpg)',
    backgroundSize: 'cover',
    margin: '0 auto',
  };

  const epStyle = {
    height: '40vh',
    backgroundImage:
      'url(https://warcraft-secrets.com/wp-content/uploads/The-Eternal-Palace-Raid.jpg)',
    backgroundSize: 'cover',
    margin: '0 auto',
  };

  const Raid = (props) => (
    <section
      className='hero'
      style={props.style}
      onClick={() => {
        window.location.assign(props.target);
      }}
    >
      <div className='hero-body'></div>
      <div className='hero-footer' style={footerStyle}>
        <div className='container'>
          <h1 className='title is-1'>
            <b>{props.title}</b>
          </h1>
          <h2 className='subtitle is-3'>{props.description}</h2>
        </div>
      </div>
    </section>
  );

  return (
    <Carousel
      heightMode='first'
      style={{ marginBottom: '30px' }}
      pauseOnHover
      wrapAround
      slideIndex={index}
      afterSlide={(slideIndex) => setIndex(slideIndex)}
      width='100%'
      autoplayInterval={5000}
    >
      <Raid
        style={nathriaStyle}
        target='/strats/nathria'
        title='Chateau Natria'
        description='Premier raid de Shadowlands !'
      />
      <Raid
        style={nyalothaStyle}
        target='/strats/nyalotha'
        title="Ny'Alotha"
        description='Nouveau raid du patch 8.3'
      />
      <Raid
        style={epStyle}
        target='/strats/palais'
        title='Palais Eternel'
        description='Raid du patch 8.2'
      />
    </Carousel>
  );
};

const Screenshots = () => {
  return (
    <>
      <h1 className='title is-2'>
        <b>Screenshots</b>
      </h1>
      <Box>
        <figure className='image container' style={{ marginBottom: 30 }}>
          <h1 className='subtitle is-3'>
            <i>Denathrius Héroïque le 16/02/2021</i>
          </h1>
          <img src='https://puu.sh/HhPL2/c5fc1a2a20.jpg' alt='Dena HC' />
        </figure>
        <figure className='image container' style={{ marginBottom: 30 }}>
          <h1 className='subtitle is-3'>
            <i>N'zoth Héroïque le 08/03/2020</i>
          </h1>
          <img src='https://puu.sh/FkwZ1/5e9003543c.jpg' alt='Nzoth HC' />
        </figure>
        <figure className='image container'>
          <h1 className='subtitle is-3'>
            <i>Azshara Héroïque le 13/08/2019</i>
          </h1>
          <img
            src='http://www.guildpics.fr/upload/big/2019/08/14/5d53403097c9e.png'
            alt='Azshara HC'
          />
        </figure>
      </Box>
    </>
  );
};

const Description = () => {
  return (
    <>
      <h1 className='title is-2'>
        <b>Description</b>
      </h1>
      <Box>
        <p className='has-text-justified is-size-5' style={{ paddingLeft: 10, paddingRight: 10 }}>
          Nous sommes une guilde HL ayant pour objectif de clean chaque raid en HM.
          <br />
          Nous raidons 3 fois par semaine le mardi, jeudi et dimanche de 21h à 00h.
        </p>
      </Box>
    </>
  );
};

const Charte = () => {
  return (
    <>
      <h1 className='title is-2'>
        <b>Charte</b>
      </h1>
      <Box>
        <div className='has-text-justified is-size-5' style={{ paddingLeft: 10, paddingRight: 10 }}>
          <h1 className='subtitle is-2'>Règles Générales</h1>
          <div>
            <p>
              Entraide entre les joueurs et respect mutuel Maintenir une bonne ambiance au sein de
              la Guilde Respecter les décisions des Gradés Les membres doivent projeter une bonne
              image de la Guilde
            </p>
          </div>
          <br />
          <h1 className='subtitle is-2'>Comportement</h1>
          <div>
            <p>
              La politesse est très importante, " Bonjour" et " Au revoir " sont un minimum à
              respecter.
              <br /> Les membres s’engagent à respecter le règlement intérieur de la guilde.
              <br /> Les comportements dégradants pour l’image de la guilde ne sont pas tolérés.
              <br /> Le commerce entre membres de la guilde est très mal vu. En cas de problème
              entre un ou plusieurs membres, veuillez le régler en privé et non sur le canal de
              guilde. Les membres qui ont connaissance de problèmes de comportement de joueurs de la
              guilde sont tenus de les faire remonter au chef de guilde ou à un officiers, ceci dans
              le but de ne pas détériorer l’ambiance et de résoudre les conflits rapidement.
            </p>
          </div>
          <br />
          <h1 className='subtitle is-2'>Banque de Guilde</h1>
          <div>
            <p>
              Nous rappelons que la banque de guilde n’est pas là pour un usage personnel. La
              politesse va de soit, quand vous prenez quelque chose, vous devez remettre autre chose
              d’utile. Il ne s'agit pas de profiter des ressources accumulées dans les coffres pour
              monter ses métiers sans rien redonner en retour. Pensez aux autres et remplissez la
              quand vous le pouvez.
            </p>
          </div>
          <br />
          <h1 className='subtitle is-2'>Grades</h1>
          <div>
            <p>
              Chez nous les grades sont attribués au mérite des membres, plus le membre est actif et
              s'investit dans la guilde plus il pourra avoir un grade important Chaque grade à ses
              droits et ses spécificités.
            </p>
            <br />
            <p>Voici les différents grades de la guilde ainsi que leurs droits:</p>
            <br />
            <p>
              BOSS : chef de guilde il dirige la guilde et assure le bon fonctionnement ce celle ci.
              Il a également tous les droits des grades suivants.
            </p>
            <br />
            <p>
              Officiers : ce sont les intendants du chef de guilde ils s'assurent au bon
              fonctionnement de la guilde et dirigent en l'absence du chef.
            </p>
            <br />
            <p>
              Banquier : il s'agit de reroll d'officier qui ont besoin de garder la main sur la
              banque de guilde.
            </p>
            <br />
            <p>
              Champion : membres les plus actifs et les plus aguerris pour faire progresser la
              guilde dans le contenu HL du jeu.
            </p>
            <br />
            <p>
              Anciens : Membres ayant renoncé à la partie HL du jeu mais avec qui la guilde garde de
              bons contacts.
            </p>
            <br />
            <p>
              Reroll : N'auront en principe pas accès aux raids en phase de progression pour la
              Guilde.
            </p>
            <br />
            <p>
              ​Prospect : Membre en période de test. Dans l'objectif d'un recrutement les nouvelles
              recrues devront notifier dans la section Présentation IRL du formulaire de recrutement
              leur préférence entre :Mac Donald's Ou Burger King.
            </p>
          </div>
          <br />
          <h1 className='subtitle is-2'>Hauts Gradés</h1>
          <div>
            <p>
              Ils doivent faire respecter les règles et inciter les membres à lire le règlement.
              <br /> En cas de conflits internes et externes ( notamment envers les guildes alliées)
              il doivent les régler dans les plus brefs délais et rapporter les incidents dans un
              mail adressé au chef. Ils doivent également participer activement au forum de la
              guilde.
            </p>
          </div>
          <br />
          <h1 className='subtitle is-2'>Recrutement</h1>
          <div>
            <p>
              Le joueur devra être présent régulièrement. Le joueur devra avoir prit connaissance du
              règlement. Le joueur devra être prêt à participer à la vie de la Guilde, notamment sur
              le forum, et à s’intégrer à celle-ci. Le joueur devra faire preuve de sympathie, de
              maturité. Il devra être de niveau 110, en cas d'exception et si la personne est
              motivée et volontaire une exception pourra être faite. Si ce joueur est recruté par
              une personne autre que le chef ou ses officiers un rapport devra être fait sous forme
              de mail ( ou mp via forum) adressé au chef.
              <br />
              <br />
              Le joueur qui veut rejoindre nos rangs doit obligatoirement remplir le formulaire de
              recrutement. Chaque membre de la guilde peut voter mais la décision finale reviens aux
              gradés. Les votes sont là pour les orienter selon l'avis de la majorité. Si vous
              déposez votre candidature, n'hésitez pas à venir y jeter un coup d'oeil régulièrement.
              Certains membres auront peut-être des questions à vous poser.
            </p>
          </div>
          <br />
          <h1 className='subtitle is-2'>Sanctions</h1>
          <div>
            <p>
              Tout manquement aux règles énoncées fera l'objet d'une sanction. Ces sanctions vont du
              simple avertissement à l'exclusion définitive de la guilde.
              <br />
              <br /> Non respect du règlement &gt; Avertissement Insultes ou provocations &gt;
              Avertissement. Commerce des ressources et objets de la banque de guilde &gt; Exclusion
              définitive.
              <br />
              <br /> D'autres sanctions sont susceptible d'être rajoutées.
              <br />
              <br />
              Toutes récidive entraînera une exclusion définitive de la guilde.
            </p>
          </div>
          <br />
          <h1 className='subtitle is-2'>Server TeamSpeak 3</h1>
          <p>
            Le TeamSpeak de la guilde doit rester un endroit convivial. Toutes les règles de
            comportement sont donc les mêmes. Il nous est gracieusement financé par le chef et les
            membres les plus impliqués, nous avons tous le droit d'en faire partie...
          </p>
        </div>
      </Box>
    </>
  );
};

const Home = () => {
  const [section, setSection] = useState('description');

  const ButtonList = () => {
    return (
      <Box>
        <div className='columns'>
          <div className='column'>
            <button
              className={
                'button is-link is-fullwidth' + (section === 'description' ? ' is-active' : '')
              }
              onClick={() => {
                setSection('description');
              }}
            >
              Description
            </button>
          </div>
          <div className='column'>
            <button
              className={
                'button is-link is-fullwidth' + (section === 'recrutement' ? ' is-active' : '')
              }
              onClick={() => {
                setSection('recrutement');
              }}
            >
              Recrutement
            </button>
          </div>
          <div className='column'>
            <button
              className={'button is-link is-fullwidth' + (section === 'charte' ? ' is-active' : '')}
              onClick={() => {
                setSection('charte');
              }}
            >
              Charte
            </button>
          </div>
          <div className='column'>
            <button
              className={
                'button is-link is-fullwidth' + (section === 'screenshots' ? ' is-active' : '')
              }
              onClick={() => {
                setSection('screenshots');
              }}
            >
              Screenshots
            </button>
          </div>
        </div>
      </Box>
    );
  };

  const Recrutement = () => {
    return (
      <>
        <h1 className='title is-2'>
          <b>Recrutement</b>
        </h1>
        <Box className='has-text-justified is-size-5'>
          <div style={{ paddingLeft: 10, paddingRight: 10 }}>
            <p>
              Merci de lire la
              <b
                className='has-text-link'
                style={{ cursor: 'pointer' }}
                onClick={() => setSection('charte')}
              >
                {' '}
                Charte
              </b>{' '}
              avant de postuler.
            </p>
            <br />
            <p>
              Merci d'essayer d'avoir équipement un minimum en adéquation avec le contenu visé avant
              de postuler.
            </p>
            <br />
            <p>
              Pour créer une candidature, créez un compte avec le bouton
              <a href='/login'> Login </a>
              puis cliquez sur le bouton
              <a href='/candidatures'> Candidatures </a>
              dans la barre de navigation.
            </p>
          </div>
          <br />
          <table className='table is-hoverable' style={{ margin: '0 auto' }}>
            <thead>
              <tr>
                <th>Classe</th>
                <th>Tank</th>
                <th>Heal</th>
                <th>DPS</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td style={{ color: '#A330C9' }}>Chasseur de démons</td>
                <td>
                  <span className='has-text-success'>Faible</span>
                </td>
                <td>/</td>
                <td>
                  <span className='has-text-danger has-text-centered'>Fort</span>
                </td>
              </tr>
              <tr>
                <td style={{ color: '#C41F3B' }}>Chevalier de la mort</td>
                <td>
                  <span className='has-text-success'>Faible</span>
                </td>
                <td>/</td>
                <td>
                  <span className='has-text-warning'>Moyen</span>
                </td>
              </tr>
              <tr>
                <td style={{ color: '#8787ED' }}>Démoniste</td>
                <td>/</td>
                <td>/</td>
                <td>
                  <span className='has-text-danger'>Fort</span>
                </td>
              </tr>
              <tr>
                <td style={{ color: '#0070DE' }}>Chaman</td>
                <td>/</td>
                <td>
                  <span className='has-text-warning'>Moyen</span>
                </td>
                <td>
                  <span className='has-text-warning'>Moyen</span>
                </td>
              </tr>
              <tr>
                <td style={{ color: '#FF7D0A' }}>Druide</td>
                <td>
                  <span className='has-text-success'>Faible</span>
                </td>
                <td>
                  <span className='has-text-warning'>Moyen</span>
                </td>
                <td>
                  <span className='has-text-warning'>Moyen</span>
                </td>
              </tr>
              <tr>
                <td style={{ color: '#40C7EB' }}>Mage</td>
                <td>/</td>
                <td>/</td>
                <td>
                  <span className='has-text-danger'>Fort</span>
                </td>
              </tr>
              <tr>
                <td style={{ color: '#00FF96' }}>Moine</td>
                <td>
                  <span className='has-text-success'>Faible</span>
                </td>
                <td>
                  <span className='has-text-warning'>Moyen</span>
                </td>
                <td>
                  <span className='has-text-danger'>Fort</span>
                </td>
              </tr>
              <tr>
                <td style={{ color: '#F58CBA' }}>Paladin</td>
                <td>
                  <span className='has-text-success'>Faible</span>
                </td>
                <td>
                  <span className='has-text-success'>Faible</span>
                </td>
                <td>
                  <span className='has-text-warning'>Moyen</span>
                </td>
              </tr>
              <tr>
                <td style={{ color: '#FFFFFF' }}>Prêtre</td>
                <td>/</td>
                <td>
                  <span className='has-text-warning'>Moyen</span>
                </td>
                <td>
                  <span className='has-text-warning'>Moyen</span>
                </td>
              </tr>
              <tr>
                <td style={{ color: '#FFF569' }}>Voleur</td>
                <td>/</td>
                <td>/</td>
                <td>
                  <span className='has-text-warning'>Moyen</span>
                </td>
              </tr>
              <tr>
                <td style={{ color: '#A9D271' }}>Chasseur</td>
                <td>/</td>
                <td>/</td>
                <td>
                  <span className='has-text-warning'>Moyen</span>
                </td>
              </tr>
              <tr>
                <td style={{ color: '#C79C6E' }}>Guerrier</td>
                <td>
                  <span className='has-text-success'>Faible</span>
                </td>
                <td>/</td>
                <td>
                  <span className='has-text-warning'>Moyen</span>
                </td>
              </tr>
            </tbody>
          </table>
        </Box>
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

          {section === 'description' && <Description />}
          {section === 'recrutement' && <Recrutement />}
          {section === 'charte' && <Charte />}
          {section === 'screenshots' && <Screenshots />}
        </Section>
      </div>
    </div>
  );
};

export default Home;
