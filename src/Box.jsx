import './Box.css'

const Box = ({ color, width, height }) => {
    return (
        <div className="Box" style={{ backgroundColor: color, width: width, height: height }} data-testid="box"></div >
    )
}

export default Box;

/**
 * this component should display a div with a background color, width and height based on the props passed to it.
 */