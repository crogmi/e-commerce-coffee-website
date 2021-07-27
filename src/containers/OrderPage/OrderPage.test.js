import React from 'react';
import { render, fireEvent, waitFor, screen } from '@testing-library/react';
import Order from './OrderPage';

/* *********************************** Smoke Test *********************************** */

describe('Order Page', () => {
    it('renders without crashing', () => {
        render(<Order />)
        screen.debug();
    })
})