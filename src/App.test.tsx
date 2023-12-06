import React from 'react'
import { render, screen } from '@testing-library/react'
import App from './App'

test('renders samurai', () => {
  render(<App />)
  const linkElement = screen.getByText(/Fala Kauan/i)
  expect(linkElement).toBeInTheDocument()
})
