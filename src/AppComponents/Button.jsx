/* eslint-disable react/prop-types */
import './css/Button.css'

function Button(props) {

    return (
        <button
            className='button'
            {...props}
            >
            {props.buttonName}
        </button>
    )
}

export default Button