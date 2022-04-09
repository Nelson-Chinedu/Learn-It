import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom';

import { Input } from '../index';

const mockedFn = jest.fn();

describe('Input', () => {
  it('should render input to the DOM', () => {
    render(
      <Input
        variant="outlined"
        size="small"
        name="fullname"
        value=""
        placeholder="Enter fullname"
        fullWidth={false}
        color="primary"
        handleChange={mockedFn}
        onBlur={mockedFn}
      />
    );
    const inputElement = screen.getByPlaceholderText(/Enter fullname/i);
    expect(inputElement).toBeInTheDocument();
  });

  it('should render empty input value', () => {
    render(
      <Input
        variant="outlined"
        size="small"
        name="fullname"
        value=""
        fullWidth={false}
        color={'primary'}
        handleChange={mockedFn}
        onBlur={mockedFn}
      />
    );
    const inputElement = screen.getByDisplayValue('');
    expect(inputElement).toBeEmptyDOMElement();
  });

  it('should allow input value on onchange event', () => {
    render(
      <Input
        variant="outlined"
        size="small"
        name="fullname"
        fullWidth={false}
        placeholder="fullname"
        color={'primary'}
        handleChange={mockedFn}
        onBlur={mockedFn}
      />
    );
    const inputElement: HTMLInputElement =
      screen.getByPlaceholderText(/fullname/i);
    fireEvent.change(inputElement, {
      target: { value: 'john doe' },
    });
    expect(inputElement.value).toBe('john doe');
  });

  it('should render input value', () => {
    render(
      <Input
        variant="outlined"
        size="small"
        value="john doe"
        type="text"
        name="fullname"
        fullWidth={false}
        placeholder="fullname"
        color={'primary'}
        handleChange={mockedFn}
        onBlur={mockedFn}
      />
    );
    const inputElement: HTMLInputElement =
      screen.getByPlaceholderText(/fullname/i);
    expect(inputElement.value).toBe('john doe');
    expect(inputElement).toHaveAttribute('type', 'text');
  });

  it('should render password input', () => {
    render(
      <Input
        variant="outlined"
        size="small"
        type="password"
        value="john doe"
        name="fullname"
        fullWidth={false}
        placeholder="fullname"
        color={'primary'}
        handleChange={mockedFn}
        onBlur={mockedFn}
      />
    );
    const inputElement = screen.getByPlaceholderText(/fullname/i);
    expect(inputElement).toHaveAttribute('type', 'password');
  });

  it('should render email input', () => {
    render(
      <Input
        variant="outlined"
        size="small"
        type="email"
        name="fullname"
        fullWidth={false}
        placeholder="fullname"
        color={'primary'}
        handleChange={mockedFn}
        onBlur={mockedFn}
      />
    );
    const inputElement: HTMLInputElement =
      screen.getByPlaceholderText(/fullname/i);
    expect(inputElement).toHaveAttribute('type', 'email');
  });

  it('should render select input', () => {
    render(
      <Input
        variant="outlined"
        size="small"
        select={true}
        fullWidth={false}
        color={'primary'}
        handleChange={mockedFn}
        onBlur={mockedFn}
      >
        <option>select</option>
      </Input>
    );
    const inputElement = screen.getByTestId(/select/i);
    expect(inputElement).toBeInTheDocument();
  });

  it('should accept input props', () => {
    render(
      <Input
        variant="outlined"
        size="small"
        placeholder="fullname"
        fullWidth={false}
        color={'primary'}
        handleChange={mockedFn}
        InputProps={{}}
        onBlur={mockedFn}
      />
    );
    const inputElement = screen.getByPlaceholderText(/fullname/i);
    expect(inputElement).toMatchObject({});
  });
});
