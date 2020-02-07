import React from 'react';
import { inject, observer, PropTypes } from 'mobx-react';
import { Redirect } from 'react-router-dom';
import firebase from '../firebase.js';

let db = firebase.database();
const max_lobby_players = 2;

const Nameform = ({ dataStore }) => {
  if (dataStore.lobbyfound) {
  }
  const createLobby = (user, params) => {
    let lobbyName = 'Game:' + Date.now();
    addPlayerToLobby(user, lobbyName);
    dataStore.gamelobbyname(lobbyName);
  };

  const addPlayerToLobby = (user, lobby) => {
    db.ref('AantalPlayer/playerAmount').transaction(function(currentData) {
      return currentData + 1;
    });

    db.ref()
      .child('GamesLobby/' + lobby)
      .child('players')
      .child(user.userId)
      .set(user);

    dataStore.gamelobbyname(lobby);
    dataStore.lobbyfound = true;
    dataStore.names(user);

    //CustomRedirect();
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

  let CustomRedirect = () => {
    if (dataStore.lobbyfound) {
      return <Redirect to="/Waiting" />;
    } else {
      return <div />;
    }
  };

  return (
    <>
      <div>
        <form onSubmit={handleSubmit}>
          <input type="text" placeholder="Username" ref={nameInput} />

          <input type="submit" value="Play" />
        </form>
        <CustomRedirect />
      </div>
    </>
  );
};
Nameform.propTypes = {
  dataStore: PropTypes.observableObject.isRequired
};

export default inject(`dataStore`)(observer(Nameform));
