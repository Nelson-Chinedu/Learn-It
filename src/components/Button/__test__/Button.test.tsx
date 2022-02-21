import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom';

import { Button } from '../index';

const mockedFn = jest.fn();

describe('Button', () => {
  it('should render button to the DOM', () => {
    render(
      <Button
        color="primary"
        size="small"
        fullWidth={false}
        disableElevation={false}
      >
        Click me
      </Button>
    );
    const btnElement = screen.getByTestId(/button/i);
    expect(btnElement).toBeInTheDocument();
    expect(btnElement).toBeDefined();
  });

  it('should fire when clicked', () => {
    render(
      <Button
        color="primary"
        size="small"
        fullWidth={false}
        disableElevation={false}
        handleClick={mockedFn}
      >
        Click me
      </Button>
    );
    fireEvent.click(screen.getByTestId(/button/i));
    expect(mockedFn).toHaveBeenCalledTimes(1);
  });
});
