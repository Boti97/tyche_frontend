import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';

import AppHeader from './AppHeader';

test('renders learn react link', () => {
  render(<AppHeader />);
  const appHeaderBar = screen.getByText('Tyche');
  expect(appHeaderBar).toBeInTheDocument();
});
