import  { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Home, Learn, Earn, Connect, Signup, UserPanel, Quiz } from './Components/index';
import Explore from './Pages/Explore/Explore';
import Callback from './Callback.tsx';

function App() {
  return (
    <div className="eduxverse-app">
      <BrowserRouter>
        <Routes>
          <Route exact path="/home" element={<Home />} />
          <Route path="/learn" element={<Learn />} />
          <Route path="/earn" element={<Earn />} />
          <Route path="/connect" element={<Connect />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/user" element={<UserPanel />} />
          <Route path="/quiz/:id" element={<Quiz />} />
          <Route path="/explore" element={<Explore />} />
          <Route path="/" element={<Callback />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;