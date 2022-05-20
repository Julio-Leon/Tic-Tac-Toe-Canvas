import './App.css';

import Canvas from './components/Canvas/Canvas.js'

function App() {

  const CANVAS_HEIGHT_WIDTH = '750'
  const FACTOR = 250

  return (
    <div className="App flex-container">
      <Canvas 
        CANVAS_HEIGHT_WIDTH={CANVAS_HEIGHT_WIDTH} 
        FACTOR={FACTOR}
      />
    </div>
  );
}

export default App;
