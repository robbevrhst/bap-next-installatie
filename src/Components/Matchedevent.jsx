import React from 'react';
import { inject, observer, PropTypes } from 'mobx-react';
import { withRouter } from 'react-router-dom';
import firebase from '../firebase.js';
import Matchedeventstyles from './Matchedevent.module.css';
import logo from './assets/next-logo.png';
let db = firebase.database();

const results = {
  one: {
    title: 'Cris Blanco',
    production: 'bad translation',
    description:
      'Bad Translation is een gevecht waarbij het analoge wint van het digitale. Cris Blanco ziet de digitale wereld als een grote metafoor voor de samenleving. Daarin wordt ons ‘analoge’ leven steeds vaker omgezet in een ‘digitale’ taal die via een computer gedeeld wordt met de wereld.'
  },
  two: {
    title: 'CIE XY & RACHID OURAMDANE',
    production: 'MÖBIUS',
    description:
      'Wat gebeurt er als je een groep wervelende acrobaten met een onverschrokken choreograaf met elkaar in contact brengt? Het Franse gezelschap Cie XY werd in 2005 opgericht door het duo Abdel Senhadji en Mahmoud Louertani. Cie XY staat voor spectaculaire en virtuoze acrobatie en combineert poëzie en luchtigheid, zoals de succesvoorstellingen Le Grand C en Il n’est pas encore minuit bij uitstek lieten zien. Inmiddels wordt het gezelschap in binnen- en buitenland op staande ovaties getrakteerd.'
  },
  three: {
    title: 'CIE STILL LIFE',
    production: 'NO ONE',
    description:
      'In deze chaotische situatie stelt No One scherp op de eeuwenoude en actuele spanning tussen het individu en de groep. Waar komt dat bezeten en barbaarse gedrag van de massa vandaan? En iemand lynchen: is dat geen dagelijkse kost in de politiek, de media of op het internet? Met veel humor toont Still Life hoe verantwoordelijkheidszin verslapt, hoe vlot een zondebok wordt aangewezen en hoeveel macht er van een groep kan uitgaan. Met beelden zonder woorden beschrijft deze voorstelling broze, kwetsbare wezens in een vijandelijke wereld waar alles ‘fantastisch verkeerd’ loopt.'
  }
};

const Matchedevent = ({ dataStore, history }) => {
  console.log(dataStore.totalPoints);
  const handleSubmit3 = e => {
    e.preventDefault();
    history.push('/Final');
  };
  const itemsRef = db.ref(
    'GamesLobby/' + dataStore.gamelobby + '/players/' + dataStore.otherpid
  );

  itemsRef.on('value', snapshot => {
    let items = snapshot.val();
    console.log(items.points);
    let allePunten = items.points + dataStore.totalPoints;
    dataStore.completeScore(allePunten);
  });

  if (dataStore.volledigePunten <= 10) {
    db.ref()
      .child(dataStore.randomnumber)
      .set({
        title: 'Cris Blanco',
        production: 'bad translation',
        description:
          'Bad Translation is een gevecht waarbij het analoge wint van het digitale. Cris Blanco ziet de digitale wereld als een grote metafoor voor de samenleving. Daarin wordt ons ‘analoge’ leven steeds vaker omgezet in een ‘digitale’ taal die via een computer gedeeld wordt met de wereld.',
        name: dataStore.namesId[0].username
      });
    return (
      <div className={Matchedeventstyles.artistcontainer}>
        <h2>{results.one.production}</h2>
        <h1 className={Matchedeventstyles.production}>{results.one.title}</h1>
        <p className={Matchedeventstyles.description}>
          {results.one.description}
        </p>
        <form onSubmit={handleSubmit3}>
          <input type="submit" value="Finish" />
        </form>
      </div>
    );
  } else if (
    dataStore.volledigePunten >= 11 &&
    dataStore.volledigePunten <= 20
  ) {
    db.ref()
      .child(dataStore.randomnumber)
      .set({
        title: 'CIE XY & RACHID OURAMDANE',
        production: 'MÖBIUS',
        description:
          'Wat gebeurt er als je een groep wervelende acrobaten met een onverschrokken choreograaf met elkaar in contact brengt? Het Franse gezelschap Cie XY werd in 2005 opgericht door het duo Abdel Senhadji en Mahmoud Louertani. Cie XY staat voor spectaculaire en virtuoze acrobatie en combineert poëzie en luchtigheid, zoals de succesvoorstellingen Le Grand C en Il n’est pas encore minuit bij uitstek lieten zien. Inmiddels wordt het gezelschap in binnen- en buitenland op staande ovaties getrakteerd.',
        name: dataStore.namesId[0].username
      });
    return (
      <div className={Matchedeventstyles.artistcontainer}>
        <h2>{results.two.production}</h2>
        <h1 className={Matchedeventstyles.production}>{results.two.title}</h1>
        <p className={Matchedeventstyles.description}>
          {results.two.description}
        </p>
        <form onSubmit={handleSubmit3}>
          <input type="submit" value="Finish" />
        </form>
      </div>
    );
  } else if (
    dataStore.volledigePunten >= 21 &&
    dataStore.volledigePunten <= 30
  ) {
    db.ref()
      .child(dataStore.randomnumber)
      .set({
        title: 'CIE STILL LIFE',
        production: 'NO ONE',
        description:
          'In deze chaotische situatie stelt No One scherp op de eeuwenoude en actuele spanning tussen het individu en de groep. Waar komt dat bezeten en barbaarse gedrag van de massa vandaan? En iemand lynchen: is dat geen dagelijkse kost in de politiek, de media of op het internet? Met veel humor toont Still Life hoe verantwoordelijkheidszin verslapt, hoe vlot een zondebok wordt aangewezen en hoeveel macht er van een groep kan uitgaan. Met beelden zonder woorden beschrijft deze voorstelling broze, kwetsbare wezens in een vijandelijke wereld waar alles ‘fantastisch verkeerd’ loopt.',
        name: dataStore.namesId[0].username
      });
    return (
      <div className={Matchedeventstyles.artistcontainer}>
        <h2>{results.three.production}</h2>
        <h1 className={Matchedeventstyles.production}>{results.three.title}</h1>
        <p className={Matchedeventstyles.description}>
          {results.three.description}
        </p>
        <form onSubmit={handleSubmit3}>
          <input type="submit" value="Finish" />
        </form>
      </div>
    );
  }

  return (
    <>
      <div>
        <header className={Matchedeventstyles.header}>
          <img className={Matchedeventstyles.logo} src={logo} alt="logo" />
          <div className={Matchedeventstyles.navcontainer}>
            <a className={Matchedeventstyles.active} href="/">
              NL
            </a>
            <a className={Matchedeventstyles.langlink} href="/">
              FR
            </a>
            <a className={Matchedeventstyles.langlink} href="/">
              EN
            </a>
          </div>
        </header>
        <div>
          <form onSubmit={handleSubmit3}>
            <input type="submit" value="Finish" />
          </form>
        </div>
      </div>
    </>
  );
};
Matchedevent.propTypes = {
  dataStore: PropTypes.observableObject.isRequired
};

export default inject(`dataStore`)(withRouter(observer(Matchedevent)));
