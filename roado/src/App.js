import React from 'react';
import { Provider } from 'react-redux';
import store from 'src/redux/store';
import Dashboard from 'src/components/Dashboard';

function App() {
  return (
    <Provider store={store}>
        <Dashboard />
    </Provider>
  );
}

export default App;
