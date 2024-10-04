import  { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Home, Learn, Earn, Connect, Signup, UserPanel, Quiz } from './Components/index';
import Explore from './Pages/Explore/Explore';

function App() {
  return (
    <div className="eduxverse-app">
      <BrowserRouter>
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route path="/learn" element={<Learn />} />
          <Route path="/earn" element={<Earn />} />
          <Route path="/connect" element={<Connect />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/user/:id" element={<UserPanel />} />
          <Route path="/quiz/:id" element={<Quiz />} />
          <Route path="/explore" element={<Explore />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;