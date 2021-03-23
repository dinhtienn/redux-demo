const initialState = {
  posts: [],
};

export default function postReducer(state = initialState, action) {
  switch (action.type) {
    case 'ADD_POST':
      let newPostList = state.posts.concat([action.post]);
      
      return {
        ...state,
        posts: newPostList,
      };
    default:
      return state;
  }
}