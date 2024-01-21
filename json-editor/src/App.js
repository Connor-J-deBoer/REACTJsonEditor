// Coyright © Connor deBoer 2024, All Rights Reserved
import './Styles/App.css';
import FileDropDown from './JavaScript/FileDropDown.js';
import DisplayFile from './JavaScript/DisplayFile.js';

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
