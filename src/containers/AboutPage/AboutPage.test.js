import React from 'react';
import { render, fireEvent, waitFor, screen } from '@testing-library/react';
import About from './AboutPage';

/* *********************************** Smoke Test *********************************** */

describe('About Page', () => {
    it('renders without crashing', () => {
        render(<About />)
        screen.debug();
    })
})