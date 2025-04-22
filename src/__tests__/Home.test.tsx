import { render, screen } from '@testing-library/react';
import Home from '../app/page';

describe('Calculator App', () => {
  it('renders the calculator title', () => {
    render(<Home />);

    // Check if the page contains the calculator title
    const title = screen.getByText(/Simple Calculator/i);

    expect(title).toBeInTheDocument();
  });

  it('renders the calculator description', () => {
    render(<Home />);

    // Check if the page contains the calculator description
    const description = screen.getByText(/Please do not do manual calculations/i);

    expect(description).toBeInTheDocument();
  });

  it('renders the mode toggle', () => {
    render(<Home />);

    // Check if the page contains the mode toggle labels
    const simpleLabel = screen.getByText('Simple');
    const scientificLabel = screen.getByText('Scientific');

    expect(simpleLabel).toBeInTheDocument();
    expect(scientificLabel).toBeInTheDocument();
  });

  it('renders the calculator display', () => {
    render(<Home />);

    // The initial display value should be "0"
    const display = screen.getByText('0');

    expect(display).toBeInTheDocument();
  });

  it('renders the numeric buttons', () => {
    render(<Home />);

    // Check if the page contains numeric buttons
    for (let i = 0; i <= 9; i++) {
      const button = screen.getByText(i.toString());
      expect(button).toBeInTheDocument();
    }

    // Check for operation buttons
    const plusButton = screen.getByText('+');
    const minusButton = screen.getByText('-');
    const multiplyButton = screen.getByText('×');
    const divideButton = screen.getByText('÷');
    const equalsButton = screen.getByText('=');

    expect(plusButton).toBeInTheDocument();
    expect(minusButton).toBeInTheDocument();
    expect(multiplyButton).toBeInTheDocument();
    expect(divideButton).toBeInTheDocument();
    expect(equalsButton).toBeInTheDocument();
  });
});
