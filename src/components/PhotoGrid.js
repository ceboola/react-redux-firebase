import React, { Component } from 'react';
import {Photo} from './Photo';
import { Grid, Row, Col } from 'react-bootstrap'
import { photoRef } from '../firebase';
//import * as actionCreators from '../actions/actionCreators';

export class PhotoGrid extends Component {

  handleSubmit = (e) => {
    e.preventDefault();
    const { postId } = this.props.params;
    const title = this.refs.title.value;
    const imageSrc = this.refs.imageSrc.value;
    this.props.actions.addPost(title, imageSrc);
    this.refs.inputForm.reset();
    photoRef.push({email: this.props.login.email, caption: title, likes: 0, unlikes: 0})
  }

  render() {
    const { setphoto, post } = this.props;
  return (
  <Grid>
    <Row className="show-grid">
      <Col className="input-form" xs={12} md={12} lg={12}>
        <form ref="inputForm" onSubmit={this.handleSubmit}>
          <input type="text" ref="title" placeholder="title" required />
          <input type="text" ref="imageSrc" placeholder="image link" />
          <input type="submit" hidden />
        </form>
      </Col>

      {this.props.posts.map((post, i) =>
         <Photo {...this.props} key={i} i={i} post={post} />)}

         <div>
           {
             !setphoto[0] ?
             <h2>Loading...</h2> :
             Object.keys(setphoto).map((photo, index, post) =>
                  <Photo {...this.props} key={index} i={index} post={post} photo={this.props.posts.code} />)
              }
         </div>
    </Row>
  </Grid>
  )
  }
}
