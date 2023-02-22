import React, {useState} from 'react'
import './styles/App.css';
import PostItem from './components/PostItem';

function App() {
  return (
    <div className='App'>
      <PostItem id='1' title=' JavaScript' description='JavaScript - мова програмування.'/>
      <PostItem id='2' title='ReactJS' description='JS бібліотека.'/>
      <PostItem id='3' title='Angular' description='Платформа для створення мобільних і настільних веб-додатків.'/>
    </div>
  );
}

export default App;
