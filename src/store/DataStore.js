import { decorate, observable, action } from 'mobx';

class DataStore {
  gamelobby = '';
  namesId = [
    {
      username: 'Rico',
      userId: 'Rico1581198647823',
      currentquestion: 1
    }
  ];
  lobbyfound = false;
  otherPlayer = '';
  age = 50;
  totalPoints = 0;
  questionNumber = 0;
  otherPlayerQuestion;
  volledigePunten;
  otherpid;

  questions = [
    {
      question: 'Wat staat er zeker nog op je bucketlist',
      answers: {
        a: 'antwoord 1',
        b: 'antwoord 2',
        c: 'antwoord 3'
      },
      points: {
        a: 1,
        b: 2,
        c: 3
      }
    },

    {
      question: 'Waar wilt u zeker nog eens op reis gaan?',
      answers: {
        a: 'antwoord 4',
        b: 'antwoord 5',
        c: 'antwoord 6'
      },
      points: {
        a: 4,
        b: 5,
        c: 6
      }
    },

    {
      question: 'test',
      answers: {
        a: 'test',
        b: 'test',
        c: 'test'
      },
      points: {
        a: 2,
        b: 3,
        c: 4
      }
    }
  ];

  gamelobbyname = data => {
    this.gamelobby = data;
  };

  names = data => {
    this.namesId.clear();
    this.namesId.push(data);
  };

  otherPlayerAdd = data => {
    this.otherPlayer = data;
  };

  ageInput = data => {
    this.age = data;
  };

  addScore = data => {
    this.totalPoints = this.totalPoints + data;
  };
  addQuestion = () => {
    if (this.questionNumber < 2) {
      this.questionNumber = this.questionNumber + 1;
    }
  };

  addOtherPlayerQuestion = data => {
    this.otherPlayerQuestion = data;
  };

  otherPlayerId = data => {
    this.otherpid = data;
  };

  completeScore = data => {
    this.volledigePunten = data;
  };
}

decorate(DataStore, {
  namesId: observable.shallow,
  gamelobby: observable,
  lobbyfound: observable,
  otherPlayer: observable,
  gamelobbyname: action,
  names: action,
  otherPlayerAdd: action,
  otherPlayerId: action,
  age: observable,
  totalPoints: observable,
  questionNumber: observable,
  otherPlayerQuestion: observable,
  otherpid: observable,
  volledigePunten: observable,
  questions: observable.ref
});

export default DataStore;
