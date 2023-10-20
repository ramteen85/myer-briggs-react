import { Route, Routes } from 'react-router-dom';
import Home from './pages/Home/Home';
import './App.css';
import Members from './pages/Members/Members';
import Test from './pages/Test/Test';

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />}></Route>
      <Route path="/members" element={<Members />}></Route>
      <Route path="/test" element={<Test />}></Route>
    </Routes>
  );
}

export default App;
