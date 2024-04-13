import { describe, it, expect } from 'vitest';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import BoxList from './BoxList';

describe('BoxList', () => {
    it('should render', () => {
        render(<BoxList />);
    });

    it('should show the form', () => {
        render(<BoxList />);
        const color = screen.getByTestId('color');
        expect(color).toBeInTheDocument();
        expect(color).toHaveAttribute('name', 'color')

        const width = screen.getByTestId('width');
        expect(width).toBeInTheDocument();
        expect(width).toHaveAttribute('name', 'width')

        const height = screen.getByTestId('height');
        expect(height).toBeInTheDocument();
        expect(height).toHaveAttribute('name', 'height')
    });

    it('should render a box when form is submitted', async () => {
        render(<BoxList />);
        const color = screen.getByTestId('color');
        const width = screen.getByTestId('width');
        const height = screen.getByTestId('height');
        const submit = screen.getByTestId('submit-btn');

        await userEvent.type(color, "blue");
        await userEvent.type(width, "200");
        await userEvent.type(height, "200");

        await userEvent.click(submit);

        const box = screen.getByTestId('box');
        expect(box).toHaveStyle('background-color: rgb(0, 0, 255)');
        expect(box).toHaveStyle('width: 200px');
        expect(box).toHaveStyle('height: 200px');

    });
});