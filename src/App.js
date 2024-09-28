import  { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Home, Learn, Earn, Interact } from './Components/index';

function App() {
  return (
    <div className="eduxverse-app">
      <BrowserRouter>
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route path="/learn" element={<Learn />} />
          <Route path="/earn" element={<Earn />} />
          <Route path="/interact" element={<Interact />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
