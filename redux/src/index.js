import React from 'react';
import ReactDOM from 'react-dom';
import {Provider} from 'react-redux'
import {createStore, combineReducers} from 'redux' // combineReducers va a tomar todos los reducers que le pasemos y los va a transformar en un gran reducer, pero con la diferencia de que nosotros vamos a  modificar unicamente la propiedad que a nosotros nos interese 
import { reducer as formReducer } from 'redux-form' // Sacamos el reducer que se encargar de manipular el formulario
import reducer from './reducers'
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';

//createStore lo que hace es recibir una función, en este caso nuestro reducer
const store = createStore (combineReducers({
  contador: reducer,
  form: formReducer,
}))
ReactDOM.render(
  <React.StrictMode>
      <Provider store= {store}>
        <App />
      </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
