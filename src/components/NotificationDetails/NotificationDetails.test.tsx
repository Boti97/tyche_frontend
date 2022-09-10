import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';

import NotificationDetails from './NotificationDetails';

test('renders learn react link', () => {
  render(<NotificationDetails />);
  const notificationDetails = screen.getByRole('NotificationDetails');
  expect(notificationDetails).toBeInTheDocument();
});
