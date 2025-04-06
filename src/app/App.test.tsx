import '@testing-library/jest-dom';
import '@testing-library/jest-dom/vitest';
import { describe, expect, it } from 'vitest';
import { render, screen } from '../test/utils';
import App from './App';

describe('App Component', () => {
  it('renders the heading with correct text', () => {
    render(<App />);
    
    const headingElement = screen.getByRole('heading', { level: 1 });
    expect(headingElement).toBeInTheDocument();
    expect(headingElement).toHaveTextContent('React + Tailwind CSS');
  });
});
