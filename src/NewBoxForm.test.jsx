import { describe, it, expect } from 'vitest';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import NewBoxForm from './NewBoxForm';


describe('NewBoxForm', () => {
    it('should render', () => {
        render(<NewBoxForm />);
    })

    it('should update values', async () => {
        render(<NewBoxForm />);
        const color = screen.getByTestId('color');
        const width = screen.getByTestId('width');
        const height = screen.getByTestId('height');
        const submit = screen.getByTestId('submit-btn');

        await userEvent.type(color, "blue");
        expect(color).toHaveValue("blue");

        await userEvent.type(width, "200");
        expect(width).toHaveValue("200");

        await userEvent.type(height, "200");
        expect(height).toHaveValue("200");

        userEvent.click(submit);
    });
});