import React from 'react';
import { inject, observer, PropTypes } from 'mobx-react';
import { Redirect } from 'react-router-dom';
import firebase from '../firebase.js';

let db = firebase.database();
const max_lobby_players = 2;

const Nameform = ({ dataStore }) => {
  console.log(dataStore);

  let CustomRedirect = data => {
    console.log(data);
    return <h4>Test</h4>;

    //return <Redirect to="/Waiting" />;
  };

  const createLobby = (user, params) => {
    let lobbyName = 'Game:' + Date.now();
    addPlayerToLobby(user, lobbyName);
    dataStore.gamelobbyname(lobbyName);
    console.log(dataStore);
  };

  const addPlayerToLobby = (user, lobby) => {
    db.ref('GamesLobby/' + lobby)
      .child('players')
      .child(user.userId)
      .set(user);

    dataStore.gamelobbyname(lobby);
    console.log(dataStore);
  };
  const nameInput = React.createRef();

  let findGameLobby = (user, params) => {
    let prom = new Promise((resolve, reject) => {
      let lobbyFound = false;
      db.ref('GamesLobby').once('value', snap => {
        let lobies = snap.val();

        // first player ever
        if (lobies == null) {
          createLobby(user, params);
          lobbyFound = true;
        } else {
          //find a lobby for our player
          let allLobbies = Object.keys(lobies);
          allLobbies.forEach(key => {
            let eachlobby = lobies[key];

            if (eachlobby.players === undefined) return;

            let noOfPlayers = Object.keys(eachlobby.players).length;
            // add player to lobby if not full
            if (noOfPlayers <= max_lobby_players) {
              if (noOfPlayers === max_lobby_players) {
                //this lobby is full so check next lobby
                return;
              }

              // if all lobbies are full this creates a new lobby and adds this player;
              addPlayerToLobby(user, key);

              //dispatch the lobby name

              lobbyFound = true;
            }
          }); //allLobies.loop
        } //else

        if (!lobbyFound) {
          createLobby(user);
          lobbyFound = true;
        }

        resolve(lobbyFound);
      }); //db call
    }); //our promise

    return prom;
  };

  const handleSubmit = e => {
    e.preventDefault();
    let username = nameInput.current.value;
    let userId = username + Date.now();
    let user = {
      username,
      userId: userId
    };

    findGameLobby(user, user);
  };

  return (
    <>
      <div>
        <form onSubmit={handleSubmit}>
          <input type="text" placeholder="Username" ref={nameInput} />

          <input type="submit" value="Play" />
        </form>
        <CustomRedirect lobby={dataStore} />
      </div>
    </>
  );
};
Nameform.propTypes = {
  dataStore: PropTypes.observableObject.isRequired
};

export default inject(`dataStore`)(observer(Nameform));
