import { Provider } from 'react-redux'
import store from './redux/store'
import './App.css';
import EggContainer from './components/EggContainer';

function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <EggContainer />
      </div>
    </Provider>
  );
}

export default App;
