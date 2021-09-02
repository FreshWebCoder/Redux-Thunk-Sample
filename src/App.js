import { Provider } from 'react-redux';

import ElementList from './components/ElementList';

import configureStore from './store';

const store = configureStore();

function App() {
  return (
    <Provider store={store}>
      <ElementList />
    </Provider>
  );
}

export default App;
