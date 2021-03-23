import React, {Component} from 'react';

export default class Posts extends Component{
  render(){
    let { post } = this.props
    return(
      <div>
        <h2>{ post.title }</h2>
        <hr/>
      </div>
    )
  }
}