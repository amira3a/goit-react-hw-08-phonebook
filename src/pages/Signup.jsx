import { Button, Card, TextField } from '@mui/material';
import { Link } from 'react-router-dom';
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { register } from '../redux/users/operators';

export default function Signup() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
  });
  
  const dispatch = useDispatch();
  function handleSubmit(e) {
    e.preventDefault();
     const form = e.currentTarget;
    dispatch(
      register({
        name: form.elements.name.value,
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
      <Card variant="outlined" sx={{ padding: '100px 150px' }}>
        <h1>Signup</h1>
        <form
          style={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
          }}
          onSubmit={handleSubmit}
        >
          <TextField
            label="Full Name"
            name="name"
            required
            value={formData.name}
            onChange={e =>
              setFormData({ ...formData, [e.target.name]: e.target.value })
            }
          />
          <TextField
            label="Email"
            name="email"
            required
            value={formData.email}
            onChange={e =>
              setFormData({ ...formData, [e.target.name]: e.target.value })
            }
          />
          <TextField
            label="Password"
            type="password"
            required
            name="password"
            value={formData.password}
            onChange={e =>
              setFormData({ ...formData, [e.target.name]: e.target.value })
            }
          />
          <div>
            <Button type="submit" variant="contained">
              Submit
            </Button>
            <Link to={'/login'}>
              <Button color="secondary">Log In</Button>
            </Link>
          </div>
        </form>
      </Card>
    </div>
  );
}
