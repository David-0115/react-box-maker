import { describe, it, expect } from 'vitest';
import { render, screen } from '@testing-library/react';
import Box from './Box';

describe('Box', () => {
    it('renders', () => {
        render(<Box color="blue" width="200px" height="200px" />);
    });

    it('renders with specified styles', () => {
        render(<Box color="blue" width="200px" height="200px" />);
        const box = screen.getByTestId('box');
        expect(box).toHaveStyle('background-color: rgb(0, 0, 255)');
        expect(box).toHaveStyle('width: 200px');
        expect(box).toHaveStyle('height: 200px');
    });
});

