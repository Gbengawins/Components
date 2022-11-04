import React, { useState } from 'react';
import Modal from './Modal/Modal';
import './App.css';

function App () {
  const [ show, setShow ] = useState(false);
  
  return (
    <div className="App">
      <button onClick={() => setShow(true)}>Show Modal</button>
      <Modal onClose={ () => setShow(false) } show={ show }>This is the body
      </Modal>
    </div>
  );
}

export default App;
