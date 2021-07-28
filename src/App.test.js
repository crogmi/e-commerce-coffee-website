import React from 'react';
import { render, fireEvent, waitFor, screen } from '@testing-library/react';
import App from './App';

/* *********************************** Smoke Test *********************************** */

describe('App', () => {
    it('renders without crashing', () => {
        render(<App />)
        screen.debug();
    })


/* *********************************** Snapshot Test *********************************** */

    it('renders correctly', () => {
        const app = render(<App />);
        expect(app).toMatchSnapshot();
    })

    
});