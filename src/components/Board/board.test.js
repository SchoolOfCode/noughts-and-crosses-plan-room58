import { render, screen } from '@testing-library/react';
import Board from './';

test('Board displays on browser', () => {
    const testProps ={
        board: (Array(9).fill(null))
    }
  render(<Board {...testProps}/>);
  const boardDisplay = screen.getByTestId('boardContainer');
  expect(boardDisplay).toBeInTheDocument();
});