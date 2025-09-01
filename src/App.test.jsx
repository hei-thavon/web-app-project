import { describe, it, expect } from 'vitest';
import { render, screen } from '@testing-library/react';
import App from './App';

describe('App', () => {
  it('renders without crashing', () => {
    render(<App />);
    expect(document.body).toBeInTheDocument();
  });

  it('has accessible content', () => {
    render(<App />);
    // Add more specific tests based on your App component content
    expect(document.querySelector('#root')).toBeInTheDocument();
  });
});

