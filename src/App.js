import React, { Component } from 'react';
import './App.css';
import {Link} from 'react-router'
import {SignUp} from './components';
import { Grid, Row, Col } from 'react-bootstrap';
import { setPhotos } from './actions/actionCreators'
import { photoRef } from './firebase';

class App extends Component {

  componentDidMount() {
    photoRef.on('value', snap => {
      let photos = [];
      snap.forEach(photo => {
        const { email, caption, likes, unlikes, code } = photo.val();
        photos.push({email, caption, likes, unlikes, code})
      })
      return this.props.actions.setPhotos(photos)
    })
  }

  render() {

    const { posts, setphoto, buttons, login } = this.props;
    const sumOfObjects = posts.length + setphoto.length
    return (
      <div className="App">
        <Grid fluid={true} className="App-header">
          <Row>
        <Col md={6} className="logo-container">
          {buttons.buttonState ? `Welcome, ${login.email}` : `Want to see more? Please SignUp/LogIn`}
          <h1>
            <Link to={`${process.env.PUBLIC_URL}/`}>Mikroblog</Link>
            {console.log(sumOfObjects)}
            Liczba wrzut: {sumOfObjects ? sumOfObjects : posts.length}
          </h1>
        </Col>
        <Col md={6}>
          <SignUp {...this.props} />
        </Col>
        </Row>
        </Grid>
          {React.cloneElement(this.props.children, this.props)}﻿
      </div>
    );
  }
}

export default App;
