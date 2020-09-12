import { INIT_LIST } from "./actionType";
const defaultState = {
  valueList: [],
};
export default (state = defaultState, action) => {
  //reducer只能接受state不能改变state
  //   console.log(state, action);
  let newState = JSON.parse(JSON.stringify(state)); //深度拷贝
  switch (action.type) {
    case INIT_LIST:
      newState.valueList = action.value;
      return newState;
      break;
    default:
      return state;
  }
};
