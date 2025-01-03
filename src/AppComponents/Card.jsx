/* eslint-disable react/prop-types */
import { LuBed, LuShowerHead, LuSpace } from 'react-icons/lu'
import './css/Card.css'
import { Text } from '@chakra-ui/react'

function Card(props) {

    function FeatureCard(props) {

        return (
            <div
                className='listing-features'
                {...props}
                >
                <div style={{ paddingRight: '10px' }}>{props.icon}</div>
                <Text>{props.num}</Text>
            </div>
        )
    }

    return (
        <div
            className="card"
            {...props}
            >
            <div>
                <img
                    className='listing-image'
                    src={props.img}
                    alt='Estate listing'
                    />
            </div>
            <div
                className='listing-heading'
                >
                <h2>{props.heading}</h2>
            </div>
            <div
                className='card-footer'
                >
                <FeatureCard
                    style={{
                        borderBottomLeftRadius: '25px',
                    }}
                    icon={<LuBed size={'24'}/>}
                    num={props.bedrooms}
                    />
                <FeatureCard
                    style={{
                        borderLeft: '1px solid #E4E4E4',
                        borderRight: '1px solid #E4E4E4',
                    }}
                    icon={<LuShowerHead size={'24'}/>}
                    num={props.bathrooms}
                    />
                <FeatureCard
                    style={{
                        borderBottomRightRadius: '25px',
                    }}
                    icon={<LuSpace size={'24'}/>}
                    num={props.space}
                    />
            </div>
        </div>
    )
}

export default Card