import { useState } from "react"
import './NewBoxForm.css'

const NewBoxForm = ({ addBox }) => {
    const INITIAL_STATE = {
        color: "",
        width: "",
        height: ""
    }
    const [formData, setFormData] = useState(INITIAL_STATE)

    const handleChange = e => {
        const { name, value } = e.target;
        setFormData(fData => ({
            ...fData,
            [name]: value
        }));
    }

    const handleSubmit = e => {
        e.preventDefault();
        addBox(formData)
        setFormData(INITIAL_STATE)
    }
    return (
        <form onSubmit={handleSubmit} className="NewBoxForm">
            <div>
                <label className="NewBoxForm-label" htmlFor="color">Box Color:</label>
                <input
                    className="NewBoxForm-input"
                    type="text"
                    id="color"
                    name="color"
                    value={formData.color}
                    onChange={handleChange}
                    data-testid="color"
                /></div>
            <div>
                <label className="NewBoxForm-label" htmlFor="width">Width:</label>

                <input
                    className="NewBoxForm-input"
                    type="text"
                    id="width"
                    name="width"
                    value={formData.width}
                    onChange={handleChange}
                    data-testid="width"
                />
                <span>px</span></div>
            <div>
                <label className="NewBoxForm-label" htmlFor="height">Height:</label>

                <input
                    className="NewBoxForm-input"
                    type="text"
                    id="height"
                    name="height"
                    value={formData.height}
                    onChange={handleChange}
                    data-testid="height"
                /> <span>px</span>
            </div>

            <div className="button-div"><button className="NewBoxForm-btn" data-testid="submit-btn">Create!</button></div>

        </form>
    )
}

export default NewBoxForm;

/**
 * This component should render a form that when submitted, creates a new Box.
 * You should be able to specify the Box’s width, height, and background color.
 * When the form is submitted, clear the input values.
 * 
 * When each Box component is displayed, add a button with the text of “X” next to each Box.
 * When this button is clicked, remove that specific box.
 * This will require you to pass a function down as props - the button should not be a separate component,
 * it should be included in the Box component.
 */

