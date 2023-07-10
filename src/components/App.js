import PhonebookApp from "./phonebook/PhonebookApp";
import Login from '../pages/Login';
import { Routes, Route } from 'react-router-dom';
import Signup from '../pages/Signup';
import Header from './Header';
import PrivateRoute from './PrivateRoute';
import PublicRoute from './PublicRoute';


function App() {
  return (
    <div >
      <Header />
      <Routes>
        <Route path="*" element={<Signup />}></Route>
        <Route
          path="/"
          element={
            <PrivateRoute>
              <PhonebookApp />
            </PrivateRoute>
          }
        />
        <Route
          path="/login"
          element={
            <PublicRoute>
              <Login />
            </PublicRoute>
          }
        />
        <Route
          path="/signup"
          element={
            <PublicRoute>
              <Signup />
            </PublicRoute>
          }
        />
        </Routes>
    </div>
  );
}

export default App;