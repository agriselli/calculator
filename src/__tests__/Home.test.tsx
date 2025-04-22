import { render, screen } from '@testing-library/react';
import Home from '../app/page';

describe('Home', () => {
  it('renders a heading', () => {
    render(<Home />);
    
    // Check if the page contains the text "Get started by editing"
    const heading = screen.getByText(/Get started by editing/i);
    
    expect(heading).toBeInTheDocument();
  });
  
  it('renders the Next.js logo', () => {
    render(<Home />);
    
    // Check if the page contains the Next.js logo
    const logo = screen.getByAltText('Next.js logo');
    
    expect(logo).toBeInTheDocument();
  });
  
  it('renders the deploy button', () => {
    render(<Home />);
    
    // Check if the page contains the deploy button
    const deployButton = screen.getByText('Deploy now');
    
    expect(deployButton).toBeInTheDocument();
  });
});