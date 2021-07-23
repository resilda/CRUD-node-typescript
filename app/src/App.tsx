import MainPage from './layout/MainPage';
import './App.css';
import { useState } from 'react';

function App() {

  const [nameInput, setNameInput] = useState('');



  return (
    <div className="App">
      <MainPage />
    </div>
  );
}

export default App;
