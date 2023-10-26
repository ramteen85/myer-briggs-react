import { Route, Routes, Navigate } from 'react-router-dom';
import Home from './pages/Home/Home';
import './App.css';
import Members from './pages/Members/Members';
import Test from './pages/Test/Test';
import Result from './pages/Result/Result';
import { useSelector } from 'react-redux';

function App() {
  const isAuth = useSelector((state) => state.auth?.isAuthenticated);

  return (
    <Routes>
      <Route path="/" element={<Home />}></Route>
      <Route
        path="/members"
        element={isAuth ? <Members /> : <Navigate replace to="/" />}
      ></Route>
      <Route
        path="/test"
        element={isAuth ? <Test /> : <Navigate replace to="/" />}
      ></Route>
      <Route
        path="/result"
        element={isAuth ? <Result /> : <Navigate replace to="/" />}
      ></Route>
    </Routes>
  );
}

export default App;
