import React, { Component } from 'react';
import { Link } from 'react-router';
import { Navbar } from 'react-bootstrap';
import CSS from './style.css';

class App extends Component {
  render() {
    return (
      <div className={CSS.App}>
        <Navbar>
          <Navbar.Header>
            <Navbar.Brand>
              <Link to="/">Learning Record Store Explorer</Link>
            </Navbar.Brand>
          </Navbar.Header>
        </Navbar>
          {this.props.children}
      </div>
    );
  }
}

export default App;
