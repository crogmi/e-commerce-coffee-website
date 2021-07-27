import React from 'react';
import { render, fireEvent, waitFor, screen } from '@testing-library/react';
import ItemDetail from './ItemDetail';

/* *********************************** Smoke Test *********************************** */

describe('Item Detail', () => {
    it('renders without crashing', () => {
        render(<ItemDetail />)
        screen.debug();
    })
})