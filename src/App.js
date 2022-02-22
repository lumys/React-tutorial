import * as React from 'react';
import { Routes, Route } from 'react-router-dom';
import './App.css';
import { Provider } from 'react-redux';
import Home from './pages/Home';
import About from './pages/About';
import TutorialPage from './pages/Tutorial';
import store from './reducers/store';

const App = () => (
  <div className='App'>
    <Provider store={store}>
      <h1>Welcome to React Router!</h1>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='tutorial' element={<TutorialPage />} />
        <Route path='about' element={<About />} />
      </Routes>
    </Provider>
  </div>
);

export default App;
