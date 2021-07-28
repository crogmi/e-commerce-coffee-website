import React from 'react';
import { render, fireEvent, waitFor, screen } from '@testing-library/react';
import Home from './Home';

/* *********************************** Smoke Test *********************************** */

describe('Home', () => {
    it('renders without crashing', () => {
        render(<Home />)
        screen.debug();
    })
})