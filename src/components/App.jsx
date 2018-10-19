import React from 'react';
import {Provider} from 'react-redux';
import Layout from './Layout/Layout';
import Filters from './Filters/Filters';
import {store} from '../redux/store';

const App = () => (
  <Provider store={store}>
    <Layout>
      <Filters />
    </Layout>
  </Provider>
);

export default App;
