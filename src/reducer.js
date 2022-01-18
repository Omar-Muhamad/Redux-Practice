import * as actions from './actionTypes';

// [] this empty array represent the store 

let lastId = 0;
const reducer = (state = [], action) => {
  
  //  using switch statment (perferable)

  switch (action.type) {
    case actions.BUG_ADDED: 
      return [...state,
          {
            id: ++lastId,
            description: action.payload.description,
            resolved: false,
          }
        ];
    case actions.BUG_REMOVED: 
      return state.filter(bug => bug.id === action.payload.id);
    case actions.BUG_RESOLVED:
      return state.map(bug => 
        bug.id !== action.payload.id ? bug : {...bug, resolved:true});
    default: 
      return state;
  }

  // using if statment
  
  // if (action.type === 'bugAdded') 
  //   return [
  //     ...state,{
  //       id: ++lastId,
  //       description: action.payload.description,
  //       resoled: false,
  //     }
  //   ];
  // if (action.type === 'bugRemoved')
  //   return state.filter(bug => bug.id !== action.payload.id);
  
  // return state;
}

export default reducer; 