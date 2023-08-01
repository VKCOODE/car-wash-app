
const INITIAL_STATE = {
  email: '',


};
export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case "empty_register":{
      return {INITIAL_STATE}
    }
    // case REGISTER_FORM_UPDATE:
      return { ...state, [action.payload.prop]: action.payload.value };
    // case REGISTER_USER:
    //   return {...state, regLoading: true, registerError: ''};
    // case REGISTER_USER_SUCCESS:
      console.log(state, action);
      return { ...state, registerUser: action.payload, ...INITIAL_STATE };
    // case REGISTER_USER_FAIL:
    //   console.log('consjaklsdalskdjalsdj', action.payload);
    //   return {
    //     ...state,
    //     // registerError: action.payload,
    //     // recaptchaCheck: false,
    //     // regLoading: false,
    //   };
    // case RESET_REGISTER:
      return { ...state, ...INITIAL_STATE };
    default:
      return state;
  }
};
