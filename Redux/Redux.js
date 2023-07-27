const redux = require("redux");

const reducer = (state = { counter: 0 }, action) => {
  if (action.type === "Increment") {
    return {
      counter: state.counter + 1,
    };
  }
  return state;
};

const store = redux.createStore(reducer);

const reduxSubscriber = () => {
  const latestState = store.getState();
  console.log(latestState);
};

store.subscribe(reduxSubscriber);

store.dispatch({ type: "Incremen" });
