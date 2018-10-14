import { CREATE_ROOM } from '../actions/types';

export default function(state = null, action) {
  console.log(action.type, action.payload);
  switch (action.type) {
    case CREATE_ROOM:
      return action.payload;
    default:
      return state;      
  }
}