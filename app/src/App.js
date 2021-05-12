import React, { useReducer } from 'react';
import ListItems from './Components/Presentations/ListItems';
import {CalcContext} from './Hooks/Contexts/Cal-context';
import {ReducerFunc, InitialState} from './Hooks/Reducers/Cal-reducer';

function App() {
  const [state, dispatch] = useReducer(ReducerFunc, InitialState);
  const calc_reducer = {state, dispatch};
  return (
    <CalcContext.Provider value={calc_reducer}>
      <div className="App">
        <ListItems />
      </div>
    </CalcContext.Provider>
  );
}

export default App;
