import React from 'react';
import { inject, observer, PropTypes } from 'mobx-react';
import { withRouter } from 'react-router-dom';
import firebase from '../firebase.js';
import Matchedeventstyles from './Matchedevent.module.css';
import logo from './assets/next-logo.png';
import eventimg from './assets/eventimg.png';
import busicon from './assets/busicon.svg';
import bustrack from './assets/busline.svg';
let db = firebase.database();

const results = {
  one: {
    title: 'Cris Blanco',
    production: 'bad translation',
    description:
      'Bad Translation is een gevecht waarbij het analoge wint van het digitale. Cris Blanco ziet de digitale wereld als een grote metafoor voor de samenleving. Daarin wordt ons ‘analoge’ leven steeds vaker omgezet in een ‘digitale’ taal die via een computer gedeeld wordt met de wereld.',

    date: 'Do. 20/11',
    bustimeleave1: '16:00',
    bustimearrive1: '17:30',
    bustimeleave2: '19:30',
    bustimearrive2: '21:00',
    vertrek: 'Budascoop',
    aankomst: 'Le Phenix'
  },
  two: {
    title: 'CIE XY & RACHID OURAMDANE',
    production: 'MÖBIUS',
    description:
      'Wat gebeurt er als je een groep wervelende acrobaten met een onverschrokken choreograaf met elkaar in contact brengt? Het Franse gezelschap Cie XY werd in 2005 opgericht door het duo Abdel Senhadji en Mahmoud Louertani. Cie XY staat voor spectaculaire en virtuoze acrobatie en combineert poëzie en luchtigheid, zoals de succesvoorstellingen Le Grand C en Il n’est pas encore minuit bij uitstek lieten zien. Inmiddels wordt het gezelschap in binnen- en buitenland op staande ovaties getrakteerd.',
    date: 'Do. 20/11',
    bustimeleave1: '14:00',
    bustimearrive1: '17:30',
    bustimeleave2: '19:30',
    bustimearrive2: '21:00',
    vertrek: 'Budascoop',
    aankomst: 'Le Phenix'
  },
  three: {
    title: 'CIE STILL LIFE',
    production: 'NO ONE',
    description:
      'In deze chaotische situatie stelt No One scherp op de eeuwenoude en actuele spanning tussen het individu en de groep. Waar komt dat bezeten en barbaarse gedrag van de massa vandaan? En iemand lynchen: is dat geen dagelijkse kost in de politiek, de media of op het internet? Met veel humor toont Still Life hoe verantwoordelijkheidszin verslapt, hoe vlot een zondebok wordt aangewezen en hoeveel macht er van een groep kan uitgaan. Met beelden zonder woorden beschrijft deze voorstelling broze, kwetsbare wezens in een vijandelijke wereld waar alles ‘fantastisch verkeerd’ loopt.',
    date: 'Do. 20/11',
    bustimeleave1: '15:00',
    bustimearrive1: '17:30',
    bustimeleave2: '19:30',
    bustimearrive2: '21:00'
  }
};

const Matchedevent = ({ dataStore, history }) => {
  const handleSubmit5 = e => {
    e.preventDefault();
    console.log('toggle');

    dataStore.changeBus();
  };
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
        name: dataStore.namesId[0].username,
        date: 'Do. 20/11',
        bustimeleave1: '16:00',
        bustimearrive1: '17:30',
        bustimeleave2: '19:30',
        bustimearrive2: '21:00',
        opponent: dataStore.otherPlayer
      });

    console.log(dataStore.bus);
    return (
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
          <h1 className={Matchedeventstyles.title}>
            jullie hebben een match! bekijk jullie matchend event!
          </h1>
          <div className={Matchedeventstyles.artistcontainer}>
            {dataStore.bus === false ? (
              <>
                <h3 className={Matchedeventstyles.production}>
                  {results.one.production}
                </h3>
                <h2 className={Matchedeventstyles.artist}>
                  {results.one.title}
                </h2>

                <p className={Matchedeventstyles.description}>
                  {results.one.description}
                </p>
                <button
                  onClick={handleSubmit5}
                  className={Matchedeventstyles.toggleswitch}
                >
                  ONTDEK ONZE GRATIS BUS NAAR {results.one.title}
                </button>
              </>
            ) : (
              <>
                <div className={Matchedeventstyles.buscontainer}>
                  <img src={busicon} alt="" />
                  <div>
                    <h3 className={Matchedeventstyles.bus}>
                      Next organiseerd een gratis bus naar
                    </h3>
                    <h2 className={Matchedeventstyles.artisttitle}>
                      Cris Blanco
                    </h2>
                  </div>
                </div>
                <div className={Matchedeventstyles.bustrackcontainer}>
                  <p className={Matchedeventstyles.leavetext}>
                    Vertrek aan
                    <br />{' '}
                    <span className={Matchedeventstyles.bold}>
                      {results.one.vertrek}
                    </span>
                  </p>
                  <div>
                    <img
                      className={Matchedeventstyles.bustrack}
                      src={bustrack}
                      alt=""
                    />
                    <div className={Matchedeventstyles.bustrackercontainer}>
                      <span className={Matchedeventstyles.time}>
                        {results.one.bustimeleave1}
                      </span>
                      <span className={Matchedeventstyles.time}>
                        {results.one.bustimearrival1}
                      </span>
                    </div>
                  </div>
                  <p className={Matchedeventstyles.arrivetext}>
                    Aankomst aan
                    <br />{' '}
                    <span className={Matchedeventstyles.bold}>
                      {results.one.aankomst}
                    </span>
                  </p>
                </div>
                <div className={Matchedeventstyles.bustrackcontainer}>
                  <p className={Matchedeventstyles.leavetext}>
                    Vertrek aan
                    <br />{' '}
                    <span className={Matchedeventstyles.bold}>
                      {results.one.aankomst}
                    </span>
                  </p>
                  <div>
                    <img
                      className={Matchedeventstyles.bustrack}
                      src={bustrack}
                      alt=""
                    />
                    <div className={Matchedeventstyles.bustrackercontainer}>
                      <span className={Matchedeventstyles.time}>
                        {results.one.bustimeleave2}
                      </span>
                      <span className={Matchedeventstyles.time}>
                        {results.one.bustimearrival2}
                      </span>
                    </div>
                  </div>
                  <p className={Matchedeventstyles.arrivetext}>
                    Aankomst aan
                    <br />{' '}
                    <span className={Matchedeventstyles.bold}>
                      {results.one.vertrek}
                    </span>
                  </p>
                </div>
                <button
                  onClick={handleSubmit5}
                  className={Matchedeventstyles.toggleswitch}
                >
                  meer info over het evenement
                </button>
              </>
            )}
          </div>
          <form onSubmit={handleSubmit3}>
            <input
              className={Matchedeventstyles.finish}
              type="submit"
              value="ticket afdrukken en beëindigen"
            />
          </form>
        </div>

        <img className={Matchedeventstyles.eventimg} src={eventimg} alt="" />
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
        name: dataStore.namesId[0].username,
        date: 'Do. 20/11',
        bustimeleave1: '16:00',
        bustimearrive1: '17:30',
        bustimeleave2: '19:30',
        bustimearrive2: '21:00',
        opponent: dataStore.otherPlayer
      });
    return (
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
          <h1 className={Matchedeventstyles.title}>
            jullie hebben een match! bekijk jullie matchend event!
          </h1>
          <div className={Matchedeventstyles.artistcontainer}>
            {dataStore.bus === false ? (
              <>
                <h3 className={Matchedeventstyles.production}>
                  {results.two.production}
                </h3>
                <h2 className={Matchedeventstyles.artist}>
                  {results.two.title}
                </h2>

                <p className={Matchedeventstyles.description}>
                  {results.two.description}
                </p>
                <button
                  onClick={handleSubmit5}
                  className={Matchedeventstyles.toggleswitch}
                >
                  ONTDEK ONZE GRATIS BUS NAAR {results.two.title}
                </button>
              </>
            ) : (
              <>
                <div className={Matchedeventstyles.buscontainer}>
                  <img src={busicon} alt="" />
                  <div>
                    <h3 className={Matchedeventstyles.bus}>
                      Next organiseerd een gratis bus naar
                    </h3>
                    <h2 className={Matchedeventstyles.artisttitle}>
                      Cris Blanco
                    </h2>
                  </div>
                </div>
                <div className={Matchedeventstyles.bustrackcontainer}>
                  <p className={Matchedeventstyles.leavetext}>
                    Vertrek aan
                    <br />{' '}
                    <span className={Matchedeventstyles.bold}>
                      {results.two.vertrek}
                    </span>
                  </p>
                  <div>
                    <img
                      className={Matchedeventstyles.bustrack}
                      src={bustrack}
                      alt=""
                    />
                    <div className={Matchedeventstyles.bustrackercontainer}>
                      <span className={Matchedeventstyles.time}>
                        {results.two.bustimeleave1}
                      </span>
                      <span className={Matchedeventstyles.time}>
                        {results.two.bustimearrival1}
                      </span>
                    </div>
                  </div>
                  <p className={Matchedeventstyles.arrivetext}>
                    Aankomst aan
                    <br />{' '}
                    <span className={Matchedeventstyles.bold}>
                      {results.two.aankomst}
                    </span>
                  </p>
                </div>
                <div className={Matchedeventstyles.bustrackcontainer}>
                  <p className={Matchedeventstyles.leavetext}>
                    Vertrek aan
                    <br />{' '}
                    <span className={Matchedeventstyles.bold}>
                      {results.two.aankomst}
                    </span>
                  </p>
                  <div>
                    <img
                      className={Matchedeventstyles.bustrack}
                      src={bustrack}
                      alt=""
                    />
                    <div className={Matchedeventstyles.bustrackercontainer}>
                      <span className={Matchedeventstyles.time}>
                        {results.two.bustimeleave2}
                      </span>
                      <span className={Matchedeventstyles.time}>
                        {results.two.bustimearrival2}
                      </span>
                    </div>
                  </div>
                  <p className={Matchedeventstyles.arrivetext}>
                    Vertrek aan
                    <br />{' '}
                    <span className={Matchedeventstyles.bold}>
                      {results.two.vertrek}
                    </span>
                  </p>
                </div>
                <button
                  onClick={handleSubmit5}
                  className={Matchedeventstyles.toggleswitch}
                >
                  meer info over het evenement
                </button>
              </>
            )}
          </div>
          <form onSubmit={handleSubmit3}>
            <input
              className={Matchedeventstyles.finish}
              type="submit"
              value="ticket afdrukken en beëindigen"
            />
          </form>
        </div>

        <img className={Matchedeventstyles.eventimg} src={eventimg} alt="" />
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
        name: dataStore.namesId[0].username,
        date: 'Do. 20/11',
        bustimeleave1: '16:00',
        bustimearrive1: '17:30',
        bustimeleave2: '19:30',
        bustimearrive2: '21:00',
        opponent: dataStore.otherPlayer
      });
    return (
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
          <h1 className={Matchedeventstyles.title}>
            jullie hebben een match! bekijk jullie matchend event!
          </h1>
          <div className={Matchedeventstyles.artistcontainer}>
            {dataStore.bus === false ? (
              <>
                <h3 className={Matchedeventstyles.production}>
                  {results.three.production}
                </h3>
                <h2 className={Matchedeventstyles.artist}>
                  {results.three.title}
                </h2>

                <p className={Matchedeventstyles.description}>
                  {results.three.description}
                </p>
                <button
                  onClick={handleSubmit5}
                  className={Matchedeventstyles.toggleswitch}
                >
                  ONTDEK ONZE GRATIS BUS NAAR {results.three.title}
                </button>
              </>
            ) : (
              <>
                <div className={Matchedeventstyles.buscontainer}>
                  <img src={busicon} alt="" />
                  <div>
                    <h3 className={Matchedeventstyles.bus}>
                      Next organiseerd een gratis bus naar
                    </h3>
                    <h2 className={Matchedeventstyles.artisttitle}>
                      Cris Blanco
                    </h2>
                  </div>
                </div>
                <div className={Matchedeventstyles.bustrackcontainer}>
                  <p className={Matchedeventstyles.leavetext}>
                    Vertrek aan
                    <br />{' '}
                    <span className={Matchedeventstyles.bold}>
                      {results.three.vertrek}
                    </span>
                  </p>
                  <div>
                    <img
                      className={Matchedeventstyles.bustrack}
                      src={bustrack}
                      alt=""
                    />
                    <div className={Matchedeventstyles.bustrackercontainer}>
                      <span className={Matchedeventstyles.time}>
                        {results.three.bustimeleave1}
                      </span>
                      <span className={Matchedeventstyles.time}>
                        {results.three.bustimearrival1}
                      </span>
                    </div>
                  </div>
                  <p className={Matchedeventstyles.arrivetext}>
                    Aankomst aan
                    <br />{' '}
                    <span className={Matchedeventstyles.bold}>
                      {results.three.aankomst}
                    </span>
                  </p>
                </div>
                <div className={Matchedeventstyles.bustrackcontainer}>
                  <p className={Matchedeventstyles.leavetext}>
                    Vertrek aan
                    <br />{' '}
                    <span className={Matchedeventstyles.bold}>
                      {results.three.aankomst}
                    </span>
                  </p>
                  <div>
                    <img
                      className={Matchedeventstyles.bustrack}
                      src={bustrack}
                      alt=""
                    />
                    <div className={Matchedeventstyles.bustrackercontainer}>
                      <span className={Matchedeventstyles.time}>
                        {results.three.bustimeleave2}
                      </span>
                      <span className={Matchedeventstyles.time}>
                        {results.three.bustimearrival2}
                      </span>
                    </div>
                  </div>
                  <p className={Matchedeventstyles.arrivetext}>
                    Vertrek aan
                    <br />{' '}
                    <span className={Matchedeventstyles.bold}>
                      {results.three.vertrek}
                    </span>
                  </p>
                </div>
                <button
                  onClick={handleSubmit5}
                  className={Matchedeventstyles.toggleswitch}
                >
                  meer info over het evenement
                </button>
              </>
            )}
          </div>
          <form onSubmit={handleSubmit3}>
            <input
              className={Matchedeventstyles.finish}
              type="submit"
              value="ticket afdrukken en beëindigen"
            />
          </form>
        </div>

        <img className={Matchedeventstyles.eventimg} src={eventimg} alt="" />
      </div>
    );
  }

  return (
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
        <h1 className={Matchedeventstyles.title}>
          jullie hebben een match! bekijk jullie matchend event!
        </h1>
        <div className={Matchedeventstyles.artistcontainer}>
          {dataStore.bus === true ? (
            <>
              <h3 className={Matchedeventstyles.production}>
                {results.one.production}
              </h3>
              <h2 className={Matchedeventstyles.artist}>{results.one.title}</h2>

              <p className={Matchedeventstyles.description}>
                {results.one.description}
              </p>
              <button
                onClick={handleSubmit5}
                className={Matchedeventstyles.toggleswitch}
              >
                ONTDEK ONZE GRATIS BUS NAAR cris blanco
              </button>
            </>
          ) : (
            <>
              <div className={Matchedeventstyles.buscontainer}>
                <img src={busicon} alt="" />
                <div>
                  <h3 className={Matchedeventstyles.bus}>
                    Next organiseerd een gratis bus naar
                  </h3>
                  <h2 className={Matchedeventstyles.artisttitle}>
                    Cris Blanco
                  </h2>
                </div>
              </div>
              <div className={Matchedeventstyles.bustrackcontainer}>
                <p className={Matchedeventstyles.leavetext}>
                  Vertrek aan
                  <br />{' '}
                  <span className={Matchedeventstyles.bold}>
                    {results.one.vertrek}
                  </span>
                </p>
                <div>
                  <img
                    className={Matchedeventstyles.bustrack}
                    src={bustrack}
                    alt=""
                  />
                  <div className={Matchedeventstyles.bustrackercontainer}>
                    <span className={Matchedeventstyles.time}>
                      {results.one.bustimeleave1}
                    </span>
                    <span className={Matchedeventstyles.time}>
                      {results.one.bustimearrival1}
                    </span>
                  </div>
                </div>
                <p className={Matchedeventstyles.arrivetext}>
                  Aankomst aan
                  <br />{' '}
                  <span className={Matchedeventstyles.bold}>
                    {results.one.aankomst}
                  </span>
                </p>
              </div>
              <div className={Matchedeventstyles.bustrackcontainer}>
                <p className={Matchedeventstyles.leavetext}>
                  Vertrek aan
                  <br />{' '}
                  <span className={Matchedeventstyles.bold}>
                    {results.one.aankomst}
                  </span>
                </p>
                <div>
                  <img
                    className={Matchedeventstyles.bustrack}
                    src={bustrack}
                    alt=""
                  />
                  <div className={Matchedeventstyles.bustrackercontainer}>
                    <span className={Matchedeventstyles.time}>
                      {results.one.bustimeleave2}
                    </span>
                    <span className={Matchedeventstyles.time}>
                      {results.one.bustimearrival2}
                    </span>
                  </div>
                </div>
                <p className={Matchedeventstyles.arrivetext}>
                  Aankomst aan
                  <br />{' '}
                  <span className={Matchedeventstyles.bold}>
                    {results.one.vertrek}
                  </span>
                </p>
              </div>
              <button
                onClick={handleSubmit5}
                className={Matchedeventstyles.toggleswitch}
              >
                meer info over het evenement
              </button>
            </>
          )}
        </div>
        <form onSubmit={handleSubmit3}>
          <input
            className={Matchedeventstyles.finish}
            type="submit"
            value="ticket afdrukken en beëindigen"
          />
        </form>
      </div>

      <img className={Matchedeventstyles.eventimg} src={eventimg} alt="" />
    </div>
  );
};
Matchedevent.propTypes = {
  dataStore: PropTypes.observableObject.isRequired
};

export default inject(`dataStore`)(withRouter(observer(Matchedevent)));
