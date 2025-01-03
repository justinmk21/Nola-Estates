/* eslint-disable react/prop-types */
import './css/PropertyFilter.css'

function PropertyFilter(props) {

    return (
        <select
            {...props}
            >
            <option>{props.filterName}</option>
        </select>
    )
}

export default PropertyFilter