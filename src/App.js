import { Provider } from 'react-redux'
import store from './redux/store'
import './App.css';
import EggContainer from './components/EggContainer';
import HooksEggContainer from './components/HooksEggContainer';
import HookChickenContainer from './components/HookChickenContainer';
import NewEggContainer from './components/NewEggContainer';
import ItemContainer from './components/ItemContainer';

function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <ItemContainer egg />
        <ItemContainer />
        <EggContainer />
        <HooksEggContainer />
        <HookChickenContainer />
        <NewEggContainer />
      </div>
    </Provider>
  );
}

export default App;
