// 베일아웃

const reducer = (state, action) => {
  switch (action.type) {
    case 'INCREMENT':
      return { ...state, count: state.count + 1 };
    case 'SET_TEXT':
      if (!action.text) {
        // 베일아웃
        return state
      }
      return { ...state, text: action.text };
    default:
      throw new Error('unknown action type');
  }
};