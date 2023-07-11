import { Button, Card, TextField } from '@mui/material';
import { Link } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import {logIn} from '../redux/users/operators'

export default function Login() {
  const dispatch = useDispatch();

  const handleSubmit = e => {
    e.preventDefault();
    const form = e.currentTarget;
    dispatch(
      logIn({
        email: form.elements.email.value,
        password: form.elements.password.value,
      }),
    );
    form.reset();
  };
  return (
    <div
      style={{
        height: '100vh',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
      }}
    >
      <Card variant="outlined"  sx={{ padding: '100px 150px' }}>
        <h1>Login</h1>
        <form
          style={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
          }}
          onSubmit={handleSubmit}
        >
          <TextField label="Email" name="email" required />
          <TextField label="Password" type="password" required />
          <div>
            <Button type="submit" variant="contained">
              Submit
            </Button>
            <Link to={'/signup'}>
              <Button color="secondary">Sign up</Button>
            </Link>
          </div>
        </form>
      </Card>
    </div>
  );
}
