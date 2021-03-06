import React from 'react';
import ReactDOM from 'react-dom';
//Router
import { BrowserRouter} from 'react-router-dom';
//Redux 
import { Provider } from 'react-redux';
import { store, persistor} from './redux/store';
import { PersistGate } from 'redux-persist/integration/react';

import './index.css';
import App from './App';
import 'bootstrap/dist/css/bootstrap.min.css';
import * as serviceWorker from './serviceWorker';

ReactDOM.render(
  <Provider store={store}>
    <BrowserRouter>
      <PersistGate persistor={persistor}>
        <App />
      </PersistGate>
  </BrowserRouter>
  </Provider>,
  document.getElementById('root')
);

serviceWorker.register();

