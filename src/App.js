import store from './store';
import { bugAdded, bugRemoved, bugResolved } from './actions'
import './App.css';

function App() {

  const unsubscribe = store.subscribe(() => {
    console.log ("store changed", store.getState());
  });

  store.dispatch(bugAdded("Bug1"));
  store.dispatch(bugResolved(1));

  unsubscribe();

  store.dispatch(bugRemoved(1));

  return (
    <div className="App">
      <h1>Hello World!</h1>
    </div>
  );
}

export default App;
