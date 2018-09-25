import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
//import App from './step1/App';
//import App from './step2/App';
import App from './step3/App';
import registerServiceWorker from './registerServiceWorker';
import { createStore } from 'redux'
import { Provider, connect } from 'react-redux'

// Reducer
function counter(state = { count: 0 }, action) {
    const count = state.count
    switch (action.type) {
      case 'increase':
        return { count: count + 1 }
      default:
        return state
    }
  }
  
  // Store
  const store = createStore(counter)

//ReactDOM.render(<App />, document.getElementById('root'));
ReactDOM.render(
    <Provider store={store}>
      <App />
    </Provider>,
    document.getElementById('root')
  )
registerServiceWorker();
