import { useDispatch } from 'react-redux';
import authOperations from 'redux/auth/auth-operations';
import { Form, FormTitle, Input, InputLabel, Button } from './Pages.styled';

const LoginPage = () => {
  const dispatch = useDispatch();

  const handleSubmit = e => {
    e.preventDefault();

    const form = e.currentTarget;

    const loginData = {
      email: form.email.value,
      password: form.password.value,
    };
    dispatch(authOperations.logIn(loginData));

    form.reset();
  };

  return (
    <div>
      <FormTitle>Login</FormTitle>
      <Form autoComplete="off" onSubmit={handleSubmit}>
        <InputLabel>
          Login
          <Input type="email" name="email" required />
        </InputLabel>
        <InputLabel>
          Password
          <Input type="password" name="password" required />
        </InputLabel>
        <Button type="submit">Log In</Button>
      </Form>
    </div>
  );
};

export default LoginPage;
