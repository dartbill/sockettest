const initialState = {
  category: 9,
  level: "easy",
  typeOfQ: "multiple",
  playerCount: 1,
  questions: [],
  player1: {
    name: "player1",
    score: 0,
  },
  player2: {
    name: "player2",
    score: 0,
  },
  currentQuestionIndex: 0,

};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case "SETCAT":
      return {
        ...state,
        category: action.payload,
      };
    case "SETLEVEL":
      return {
        ...state,
        level: action.payload,
      };
    case "SETTYPE":
      return {
        ...state,
        typeOfQ: action.payload,
      };
    case "TEST":
      return {
        ...state,
        questions: action.payload,
      };
    case "SET_PLAYER_COUNT":
      return {
        ...state,
        playerCount: action.payload,
      };
    case "SET_PLAYER1":
      return {
        ...state,
        player1: {
          ...state.player1,
          ...action.payload,
        },
      };
    case "SET_PLAYER2":
      return {
        ...state,
        player2: {
          ...state.player2,
          ...action.payload,
        },
      };
    case "NEXT_QUESTION":
      return { ...state, currentQuestionIndex: state.currentQuestionIndex + 1 };
    case "RESET":
      return initialState; //Always return the initial state
    default:
      return { ...initialState };
  }
};

export default reducer;
