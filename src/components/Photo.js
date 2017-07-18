import React, { Component } from 'react';
import { Link } from 'react-router';
import hotfire from '../hotfire.svg';
import { Col } from 'react-bootstrap'
import logo from '../logo.svg';

export class Photo extends Component {



/*
componentWillReceiveProps() {
  const { likes } = this.props.post
  if (likes >= 60) {
    this.setState({
      likes: false
    }, this.callOnce);
  }
}
*/

/*maybeCall(props) {
  if (this.called) return
  if (props.post.likes < 60) return;
  this.called = true;
  this.callOnce();
}

componentDidMount() {
    this.maybeCall(this.props);
    console.log('once or not')
}

componentWillReceiveProps(nextProps) {
  this.maybeCall(nextProps);
}

}*/
  render() {
  const { post, i, comments, setphoto} = this.props;
  const { increment, decrement, removePost } = this.props.actions;

    return (
      <Col className="photo-container" xs={6} md={3} lg={3}>
        <div className="photo-title">
          <Link to={post.code ? `${process.env.PUBLIC_URL}/view/${post.code}` : `` || !setphoto[i] ? '' : setphoto[i].caption}>
            {post.caption ? post.caption : '' || !setphoto[i] ? '' : setphoto[i].caption}
          </Link>
        </div>
          <img src={post.display_src ? post.display_src : setphoto.display_src || logo} alt="" />
            <div className="photo-bar">
              {post.likes ? post.likes : '' || !setphoto[i] ? '' : setphoto[i].likes}
              <button className="button-plus" onClick={increment.bind(null, i)}>+</button>
              <button className="button-minus" onClick={decrement.bind(null, i)}>-</button>
              {post.unlikes ? post.unlikes : '' || !setphoto[i] ? '' : setphoto[i].unlikes}
              <button className="photo-delete" onClick={removePost.bind(null, i)}>&times;</button>
              {this.props.post.likes > 50 ? <img className="photo-hot" src={hotfire} alt="" /> : ''}
              <p>comm: {comments[post.code] ? comments[post.code].length : 0}</p>
              <p>Added by:{this.props.login.email}</p>
            </div>
    </Col>
    )
    }
}
