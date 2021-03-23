import React, { Component } from 'react';
import Post from './components/Post';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import { connect } from 'react-redux';
import { createPost } from './actions';

class App extends Component {
  constructor(props){
    super(props);
    this.state = {
      title: '',
    };
  };

  handleInputChange = (e) => {
    this.setState({
      title: e.target.value
    });
  };

  handleSubmit = (e) => {
    e.preventDefault();
    const { title } = this.state
    if (title) {
      this.props.onAddPost(title);
      this.setState({
        title: '',
      });
    }
  };

  render() {
    return (
      <div className="container">
        <div className="row mt-5">
          <div className="col-md-6">
            <form onSubmit={ this.handleSubmit }>
              <div className="form-group">
                <input type="text" placeholder="Content" className="form-control"
                  onChange={ this.handleInputChange } value={ this.state.title } />
              </div>
              <div className="form-group">
                <button type="submit" className="btn btn-primary">Add Post</button>
              </div>
            </form>
          </div>
          <div className="col-md-6">
            {(this.props.newPosts.posts.length > 0 ? this.props.newPosts.posts : []).map(post => <Post post={ post } key={ post.id } />)}
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    newPosts: state.posts
  };
};

const mapDispatchToProps = (dispatch) => ({
  dispatch,
  onAddPost: title => dispatch(createPost(title)),
});

export default connect(mapStateToProps, mapDispatchToProps)(App);