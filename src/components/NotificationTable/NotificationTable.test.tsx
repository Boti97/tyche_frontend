import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';

import NotificationTable from './NotificationTable';

test('renders learn react link', () => {
  render(<NotificationTable />);
  const notificationTable = screen.getByRole('NotificationTable');
  expect(notificationTable).toBeInTheDocument();
});
