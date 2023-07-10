import { Navigate } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { isLoggedIn } from '../redux/users/selectors';
export default function PrivateRoute({ children }) {
  const logIn = useSelector(isLoggedIn);
  

  return <div>{logIn ? children : <Navigate to="/login" />}</div>;
}
