import { decorate, observable, action } from 'mobx';

class DataStore {
  gamelobby = '';
  namesId = [];
  lobbyfound = false;
  otherPlayer = '';
  age = 50;
  totalPoints = 0;
  questionNumber = 0;
  otherPlayerQuestion;
  volledigePunten;
  otherpid;
  randomnumber;
  bus = false;

  questions = [
    {
      question: 'Wat staat er zeker nog op je bucketlist',
      answers: {
        a: 'Bungeejumpen',
        b: 'Een wereldreis maken',
        c: 'Je eigen boek schrijven',
        d: 'Het Noorderlicht bewonderen',
        e: 'Je eigen bedrijf oprichten',
        f: 'antwoord 3'
      },
      points: {
        a: 1,
        b: 2,
        c: 3,
        d: 1,
        e: 2,
        f: 3
      }
    },

    {
      question: 'Voor dit filmgenre val ik niet in slaap!',
      answers: {
        a: 'Actie',
        b: 'Komedie',
        c: 'Horror',
        d: 'Sciencefiction',
        e: 'Documentaires',
        f: 'Avontuur'
      },
      points: {
        a: 1,
        b: 2,
        c: 3,
        d: 1,
        e: 2,
        f: 3
      }
    },

    {
      question: 'Doe mij maar een reisje naar ...',
      answers: {
        a: 'New York',
        b: 'De Ardennen',
        c: 'Het Hoge Noorden',
        d: 'Japan',
        e: 'De Zee',
        f: 'Italië'
      },
      points: {
        a: 1,
        b: 2,
        c: 3,
        d: 1,
        e: 2,
        f: 3
      }
    },
    {
      question: 'Zaterderdagen zijn voor...',
      answers: {
        a: 'genieten in de zetel',
        b: 'de discotheek onveilig te maken',
        c: 'een gezellig onderonsje met vrienden',
        d: 'Shoppen',
        e: 'Lekker gaan uit eten',
        f: 'een tentoonstelling bezoeken'
      },
      points: {
        a: 1,
        b: 2,
        c: 3,
        d: 1,
        e: 2,
        f: 3
      }
    },
    {
      question: 'Als kind wilde ik graag ... worden!',
      answers: {
        a: 'Astronaut',
        b: 'Architect',
        c: 'Politieagent',
        d: 'Kok',
        e: 'Juf/Meester',
        f: 'Topsporter'
      },
      points: {
        a: 1,
        b: 2,
        c: 3,
        d: 1,
        e: 2,
        f: 3
      }
    }
  ];

  gamelobbyname = data => {
    this.gamelobby = data;
  };

  names = data => {
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
    if (this.questionNumber < 4) {
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

  loginnumber = data => {
    this.randomnumber = data;
  };

  createZero = () => {
    this.gamelobby = '';
    this.namesId = [];
    this.lobbyfound = false;
    this.otherPlayer = '';
    this.age = 50;
    this.totalPoints = 0;
    this.questionNumber = 0;
    this.otherPlayerQuestion = 0;
    this.volledigePunten = 0;
    this.otherpid = '';
    this.randomnumber = 0;
  };

  changeBus = () => {
    this.bus = !(this.bus !== false);
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
  randomnumber: observable,
  bus: observable,
  loginnumber: action,
  createZero: action,
  questions: observable.ref
});

export default DataStore;
