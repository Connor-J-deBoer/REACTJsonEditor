import './App.css';
import { useRef } from 'react';

function App() 
{
  let fileContent = "empty";
  const handleChange = (event) =>
  {
    return new Promise((resolve, reject) => 
    {
      const file = event.target.files[0];
      const reader = new FileReader();
      reader.onload = (event) =>
      {
        fileContent = event.target.result;
        console.log(fileContent);
        resolve(fileContent);
      };
      reader.onerror = (err) =>
      {
        console.log(err);
        reject(err);
      }
      reader.readAsText(file);
    });
  }

  return (
    <div className="App">
      <header className="App-header">
      <input
        type="file"
        accept="json"
        onChange={(event) => handleChange(event)}
      />
      </header>
    </div>
  );
}

export default App;
