import React from 'react';
import { render, fireEvent, waitFor, screen } from '@testing-library/react';
import Product from './Product';

/* *********************************** Smoke Test *********************************** */

describe('Product', () => {
    it('renders without crashing', () => {
        render(<Product />)
        screen.debug();
    })
})


/* *********************************** Snapshot Test *********************************** */

