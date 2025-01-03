/* eslint-disable react/prop-types */
import { LuBed, LuCar,LuCalendar, LuShowerHead, LuSpace } from 'react-icons/lu'
import './css/ListingDetails.css'

function ListingDetails({ bedrooms, bathrooms, space_in_sqm, garage }) {

    function ListingCard(props) {

        return (
            <div
                className='listing-card'
                {...props}
                >
                <div style={{ paddingRight: '10px' }}>{props.icon}</div>
                <p>{props.num}</p>
            </div>
        )
    }

    return (
        <div
            className="features"
            >
            <div className='heading-listing'><h2>Details</h2></div>
            <div
                className="listing-details"
                style={{ borderTop: '1px solid #E4E4E4' }}
                >
                <ListingCard
                    icon={<LuBed size={'24'}/>}
                    num={bedrooms}
                    style={{ borderBottomLeftRadius : '25px' }}
                    />
                <ListingCard
                    icon={<LuShowerHead size={'24'}/>}
                    num={bathrooms}
                    style={{ borderLeft: '1px solid #E4E4E4' }}
                    />
                <ListingCard
                    icon={<LuSpace size={'24'}/>}
                    num={space_in_sqm}
                    style={{ borderLeft: '1px solid #E4E4E4' }}
                    />
                <ListingCard
                    icon={<LuCar size={'24'}/>}
                    num={garage}
                    style={{ borderLeft: '1px solid #E4E4E4' }}
                    />
                <ListingCard
                    icon={<LuCalendar size={'24'}/>}
                    num='2024'
                    style={{
                        borderLeft: '1px solid #E4E4E4',
                        borderBottomRightRadius : '25px'
                    }}
                    />
            </div>
        </div>
    )
}

export default ListingDetails