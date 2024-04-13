import { useState } from 'react';
import { v4 as uuid } from 'uuid';
import Box from './Box';
import NewBoxForm from './NewBoxForm';
import './BoxList.css'


const BoxList = () => {

    const [boxes, setBoxes] = useState([]); //state is an array of objects EX: { color: "black", width: "200px", height: "200px" }

    const addBox = (box) => {
        setBoxes([...boxes, box])
    }

    return (
        <>
            <NewBoxForm addBox={addBox} />
            <div className="BoxList">
                {boxes.map((box) => {
                    const { color, width, height } = box;
                    const key = uuid();
                    return (
                        <Box color={color} width={`${width}px`} height={`${height}px`} key={key} />
                    )
                })}
            </div>
        </>
    )
}

export default BoxList;

/**
 * Place your state that contains all of the boxes here.
 * This component should render all of the Box components along with the NewBoxForm component
 */