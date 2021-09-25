import { render, screen } from '@testing-library/react';
import App from '../App/App';

test('renders classes manager text', () => {
  render(<App />);
  const linkElement = screen.findByText(/Classes Manager/i);
  expect(linkElement).toBeInTheDocument();
});
