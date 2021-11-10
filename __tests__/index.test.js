/**
 * @jest-environment jsdom
 */

 import React from 'react'
 import { render, screen } from '@testing-library/react'
 import Home from '../pages/index'

 describe('Home', () => {
   it('renders notion', () => {
     render(<Home />)

     const heading = screen.getByRole('span', {
       name: /Hello, I'm Charlie\. Nice to meet you! I'm a software engineer from Austin, TX\./i,
     })

     expect(heading).toBeInTheDocument()
   })
 })
