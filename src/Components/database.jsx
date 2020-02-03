import React, { Component } from 'react';
import firebase from '../firebase.js';
let newState = [];
class Database extends Component {
  constructor() {
    super();
    this.state = {
      player: []
    };
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit(e) {
    e.preventDefault();
    const itemsRef = firebase.database().ref('room_kortrijk');
    const item = {
      player: 'logged in'
    };
    console.log(itemsRef);
    if (newState.length < 2) {
      itemsRef.push(item);
    }

    itemsRef.on('value', snapshot => {
      console.log(snapshot.val());
    });
  }

  componentDidMount() {
    const itemsRef = firebase.database().ref('room_kortrijk');
    itemsRef.on('value', snapshot => {
      let items = snapshot.val();

      for (let item in items) {
        newState.push({
          id: item
        });
      }
      console.log(newState);
    });
  }

  render() {
    return (
      <div className="app">
        <header>
          <div className="wrapper">
            <h1>Get in room</h1>
          </div>
        </header>
        <div className="container">
          <section className="add-item">
            <form onSubmit={this.handleSubmit}>
              <button>Start</button>
            </form>
          </section>
          <section className="display-item">
            <div className="wrapper">
              <ul></ul>
            </div>
          </section>
        </div>
      </div>
    );
  }
}
export default Database;
