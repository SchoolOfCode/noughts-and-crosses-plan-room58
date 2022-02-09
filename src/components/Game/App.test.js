import { render, screen } from '@testing-library/react';
import Game from './index';

test('renders learn react link', () => {


  render(<Game />);
  const linkElement = screen.getByTestId('nextPlayer');
  expect(linkElement).toBeInTheDocument();
});
