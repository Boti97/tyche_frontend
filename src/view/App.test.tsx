import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';

import App from './App';

test('renders learn react link', () => {
  render(<App />);
  const notificationTable = screen.getByRole('NotificationTable');
  const notificationDetails = screen.getByRole('NotificationDetails');
  expect(notificationTable).toBeInTheDocument();
  expect(notificationDetails).toBeInTheDocument();
});
