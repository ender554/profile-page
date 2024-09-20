import { render, screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import App from './App';

test('renders profile page with name and contact links', () => {
  render(
    <MemoryRouter>
      <App />
    </MemoryRouter>,
  );

  // Check if your name is rendered
  const nameElement = screen.getByText(/Joshua Adams/i);
  expect(nameElement).toBeInTheDocument();

  // Check if the Email link is rendered using role-based query
  const emailElement = screen.getByRole('link', { name: /Email/i });
  expect(emailElement).toHaveAttribute('href', 'mailto:joshadams554@gmail.com');
});
