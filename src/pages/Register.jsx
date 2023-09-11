import { useDispatch } from 'react-redux';
import authOperations from 'redux/auth/auth-operations';
import { Form, FormTitle, Input, InputLabel, Button } from './Pages.styled';

const RegisterPage = () => {
  const dispatch = useDispatch();

  const handleSubmit = e => {
    e.preventDefault();

    const form = e.currentTarget;

    const registerData = {
      name: form.elements.name.value,
      email: form.elements.email.value,
      password: form.elements.password.value,
    };

    dispatch(authOperations.register(registerData));
    form.reset();
  };

  return (
    <div>
      <FormTitle>Sign Up</FormTitle>
      <Form autoComplete="off" onSubmit={handleSubmit}>
        <InputLabel>
          Name
          <Input type="text" name="name" required />
        </InputLabel>
        <InputLabel>
          Email
          <Input type="email" name="email" required />
        </InputLabel>
        <InputLabel>
          Password
          <Input type="password" name="password" required />
        </InputLabel>
        <Button type="submit">Register</Button>
      </Form>
    </div>
  );
};

export default RegisterPage;
