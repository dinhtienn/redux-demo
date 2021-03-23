import { v4 as uuidv4 } from 'uuid';

export const createPost = (title) => ({
    type: 'ADD_POST',
    post: {
      id: uuidv4(),
      title: title,
    },
});