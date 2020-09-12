import React from "react";
import store from "./store";
import { initList } from "./store/actionCreators";

import ChinaMap from "./components/ChinaMap.js";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = store.getState();
    this.storeChange = this.storeChange.bind(this);
    // 订阅更新
    store.subscribe(this.storeChange);
  }
  componentDidMount = () => {
    // http://localhost:3001/api/profile
    // fetch("/api/profile", {
    //   method: "GET",
    //   headers: {
    //     "Content-Type": "application/json;charset=UTF-8",
    //   },
    //   mode: "cors",
    //   cache: "default",
    // })
    //   .then((res) => res.json())
    //   .then((data) => {
    //     const action = initList(data);
    //     store.dispatch(action);
    //   });

    // 触发saga, 经saga中间件处理请求
    const action = initList();
    store.dispatch(action);
  };
  render() {
    return <ChinaMap data={this.state.valueList}></ChinaMap>;
  }
  storeChange() {
    this.setState(store.getState()); // 重新获取state并替换当前的state
  }
}

export default App;
