import { render, screen } from '@testing-library/react';
import App from './App';
import InputMail from './core/components/forms/InputMail';

test('renders learn react link', () => {
  render(<App />);
  const linkElement = screen.getByText(/Connexion/i);
  expect(linkElement).toBeInTheDocument();
});

test('input Mail', () => {
  render(<InputMail placeholder="Votre email" name="login" />);
  const inputElement = screen.getByPlaceholderText(/Votre email/i);
  expect(inputElement).toBeInTheDocument();
});
