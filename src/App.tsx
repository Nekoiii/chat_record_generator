import React from 'react';
import { BrowserRouter, Route, Redirect } from 'react-router-dom';
import { Provider } from 'react-redux';
import ChatRecordPage from './pages/ChatRecordPage/ChatRecordPage';
import './App.css';

function App() {
  return (
    <BrowserRouter>
      <Redirect to='/chat-record' />

      <Route path='/chat-record' component={ChatRecordPage} />
    </BrowserRouter>
  );
}

export default App;
