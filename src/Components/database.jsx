import React, { Component } from 'react';
import firebase from '../firebase.js';
import { withRouter, Link } from 'react-router-dom';
import { inject, observer, PropTypes } from 'mobx-react';
let newState = [];

class Database extends Component {
  constructor() {
    super();
    this.state = {
      player: ''
    };
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit(e) {
    e.preventDefault();
    const itemsRef = firebase.database().ref('room_kortrijk');
    const item = {
      player: 'logged in'
    };
    if (newState.length < 2) {
      itemsRef.push(item);
    }
    this.props.history.push('/nameform');
  }

  componentDidMount() {
    const itemsRef = firebase.database().ref('room_kortrijk');
    itemsRef.on('value', snapshot => {
      let items = snapshot.val();
      console.log(items);
      for (let item in items) {
        newState.push({
          id: item
        });
      }
    });
  }

  render({ store }) {
    console.log(store);
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
              <Link>Start</Link>
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
//export default withRouter(Database);
Database.propTypes = {
  store: PropTypes.observableObject.isRequired
};
//export default Database;
export default inject(`store`)(withRouter(observer(Database)));
