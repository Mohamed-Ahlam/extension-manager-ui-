import './components/Theme.js'
import Theme from './components/Theme.js';
import Header from './components/Header.js';
import Main from './components/Main.js';

import {useState} from 'react';

function App() {

  const [filter, setFilter] = useState('') // all, active, inactive

  return (
    <div >
      <Theme />
      <Header filter={filter} setFilter={setFilter} />
      <Main filter={filter} />
    </div>
  );
}

export default App;
