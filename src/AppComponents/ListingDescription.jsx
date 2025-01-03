/* eslint-disable react/prop-types */
import './css/ListingDescription.css'

function ListingDescription({ description }) {

    return (
        <div
            className="description"
            >
            <div
                className='description-header'
                >
                <h2>Description</h2>
            </div>
            <hr></hr>
            <div
                className='descriptions'
                >
                <p>
                    {description}
                </p>
            </div>
        </div>
    )
}

export default ListingDescription