let initialState = { 
  activeCat: '',
};

export default (state = initialState , action) => {
  let { type , payload} = action;

  switch(type){
  case 'CATTOPRO' :
    if(payload.disable){
      return state;
    } else {
      return {...state,activeCat : state.activeCat};
    }

  case 'RESET' : 
    return initialState;

  default :
    return state;
  }
};

export const catToPro = (name) => {
  return {
    type: 'CATTOPRO',
    payload: name,
  };
};
  
export const reset = () => {
  return {
    type: 'RESET',
  };
};
