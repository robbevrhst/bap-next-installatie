import React from 'react';
import { inject, observer, PropTypes } from 'mobx-react';
import { withRouter } from 'react-router-dom';
import firebase from '../firebase.js';

let db = firebase.database();

const Questions = ({ dataStore, history }) => {
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
    if (questionNumber === 2) {
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

      if (dataStore.otherPlayerQuestion === 4) {
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

  return (
    <>
      <div>
        <h1>{questionLink}</h1>
        <h2>
          {dataStore.otherPlayer} is momenteel op vraag{' '}
          {dataStore.otherPlayerQuestion}
        </h2>

        {Object.entries(dataStore.questions[questionNumber].answers).map(
          ([key, val]) => {
            if (questionNumber < 3) {
              return (
                <button key={key} onClick={answerGiving} value={key}>
                  {val}
                </button>
              );
            }
            //console.log(val); // the value of the current key.
          }
        )}
      </div>
    </>
  );
};
Questions.propTypes = {
  dataStore: PropTypes.observableObject.isRequired
};

export default inject(`dataStore`)(withRouter(observer(Questions)));
