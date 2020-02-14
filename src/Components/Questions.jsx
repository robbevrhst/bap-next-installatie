import React from 'react';
import { inject, observer, PropTypes } from 'mobx-react';
import { withRouter } from 'react-router-dom';
import firebase from '../firebase.js';
import Questionsstyles from './Questions.module.css';
import logo from './assets/next-logo.png';
import questionpic from './assets/questionpic4.png';

let db = firebase.database();
let randomNumber = Math.floor(Math.random() * 90000) + 10000;

let imgpath = {
  '1': ''
};

const Questions = ({ dataStore, history }) => {
  let img = [];

  console.log(imgpath);
  dataStore.loginnumber(randomNumber);
  let questionNumber = dataStore.questionNumber;
  let questionLink = dataStore.questions[questionNumber].question;

  const itemsRef = db.ref('GamesLobby/' + dataStore.gamelobby + '/players');

  itemsRef.on('value', snapshot => {
    let items = snapshot.val();

    if (Object.values(items)[0].userId === dataStore.namesId[0].userId) {
      let question1 = Object.values(items)[1].currentquestion;
      dataStore.addOtherPlayerQuestion(question1);
      // console.log(otherPlayer);
      // dataStore.otherPlayerAdd(otherPlayer);
    } else if (Object.values(items)[1].userId === dataStore.namesId[0].userId) {
      let question2 = Object.values(items)[0].currentquestion;

      dataStore.addOtherPlayerQuestion(question2);
      //dataStore.otherPlayerAdd(otherPlayer2);
    }
  });

  const answerGiving = e => {
    e.preventDefault();

    let score = dataStore.questions[0].points[e.target.value];
    dataStore.addScore(score);
    dataStore.addQuestion();

    console.log(questionNumber);
    if (questionNumber === 4) {
      db.ref(
        'GamesLobby/' +
          dataStore.gamelobby +
          '/players/' +
          dataStore.namesId[0].userId +
          '/points'
      ).transaction(function(currentData) {
        console.log(currentData);
        return (currentData = currentData + dataStore.totalPoints);
      });

      if (dataStore.otherPlayerQuestion === 5) {
        history.push('/Matchedevent');
      } else {
        console.log('alle vragen zijn gemaakt');
        history.push('/Waitingotherplayerdone');
      }
    }

    db.ref(
      'GamesLobby/' +
        dataStore.gamelobby +
        '/players/' +
        dataStore.namesId[0].userId +
        '/currentquestion'
    ).transaction(function(currentData) {
      console.log(currentData);
      return currentData + 1;
    });
  };

  if (questionNumber === 0) {
    console.log('ik ga in de image');
    img = [];
    img.push('/static/media/questionpic.573fb89b.png');
  } else if (questionNumber === 1) {
    img = [];
    img.push('/static/media/questionpic1.90aa7212.png');
  } else if (questionNumber === 2) {
    img = [];
    img.push('/static/media/questionpic2.92f2120e.png');
  } else if (questionNumber === 3) {
    img = [];
    img.push('/static/media/questionpic3.e051ef00.png');
  } else if (questionNumber === 4) {
    img = [];
    img.push('/static/media/questionpic4.3c170e44.png');
  } else if (questionNumber === 5) {
    img = [];
  }

  console.log(img[0]);

  return (
    <>
      <div>
        <header className={Questionsstyles.header}>
          <img className={Questionsstyles.logo} src={logo} alt="logo" />
          <div className={Questionsstyles.navcontainer}>
            <a className={Questionsstyles.active} href="/">
              NL
            </a>
            <a className={Questionsstyles.langlink} href="/">
              FR
            </a>
            <a className={Questionsstyles.langlink} href="/">
              EN
            </a>
          </div>
        </header>
        <div className={Questionsstyles.contentcontainer}>
          <div className={Questionsstyles.questioncontainer}>
            <h1 className={Questionsstyles.question}>{questionLink}</h1>

            <div className={Questionsstyles.buttoncontainer}>
              {Object.entries(dataStore.questions[questionNumber].answers).map(
                ([key, val]) => {
                  if (questionNumber < 5) {
                    return (
                      <button
                        className={Questionsstyles.buttons}
                        key={key}
                        onClick={answerGiving}
                        value={key}
                      >
                        {val}
                      </button>
                    );
                  } else {
                    return <></>;
                  }
                  //console.log(val); // the value of the current key.
                }
              )}
            </div>
            <h2 className={Questionsstyles.otherplayer}>
              {dataStore.otherPlayer} is momenteel op vraag{' '}
              {dataStore.otherPlayerQuestion}
            </h2>
          </div>

          <img className={Questionsstyles.img} src={img[0]} alt="" />
        </div>
      </div>
    </>
  );
};
Questions.propTypes = {
  dataStore: PropTypes.observableObject.isRequired
};

export default inject(`dataStore`)(withRouter(observer(Questions)));
