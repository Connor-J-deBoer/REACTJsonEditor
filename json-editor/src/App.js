// Coyright © Connor deBoer 2024, All Rights Reserved
import './App.css';
import FileDropDown from '../src/FileDropDown.js';
import DisplayFile from './DisplayFile.js';

function App() 
{
  return (
    <div className="App">
      <header className="App-header">
        <FileDropDown />
        <DisplayFile />
      </header>
    </div>
  );
}

export default App;
