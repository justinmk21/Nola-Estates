/* eslint-disable react/prop-types */
import check from './images/Check Yellow.svg'
import './css/ListingFeatures.css'
import { Flex } from '@chakra-ui/react'
import { useEffect } from 'react'
import {
    LuX,
    LuBuilding,
    LuHouse,
    LuTable,
    LuTv,
    LuEarth,
    LuLocate
} from 'react-icons/lu'

function ListingFeatures({ property }) {

    useEffect(()=>{
        console.log('property:', property.accessibility_features);
    })

    return (
        <div
            className='house-features'
            >
            <div
                style={{ height: '80px' }}
                >
                <h2 className='heading-for-features'>Features</h2>
            </div>
            <hr/>
            <div
                className='feature'
                >
                <div
                    className='property-features'
                    >
                    <Flex
                        alignItems={'center'}
                        >
                        {property.accessibility_features ?
                        (
                            <img src={check} alt='check'/>
                        )
                        :
                        (
                            <LuX/>
                        )
                        }
                        <p style={{ marginLeft: '6px' }}>Accessibility Features</p>
                    </Flex>
                    <Flex
                        alignItems={'center'}
                        >
                        {property.swimming_pool ?
                        (
                            <img src={check} alt='check'/>
                        )
                        :
                        (
                            <LuX/>
                        )
                        }
                        <p style={{ marginLeft: '6px' }}>Swimming Pool
                        </p>
                    </Flex>
                    <Flex
                        alignItems={'center'}
                        >
                        {property.security_system ?
                        (
                            <img src={check} alt='check'/>
                        )
                        :
                        (
                            <LuX/>
                        )
                        }
                        <p style={{ marginLeft: '6px' }}>Security System
                        </p>
                    </Flex>
                </div>
                <div>
                    <Flex
                        flexDirection={'column'}
                        >
                        <Flex
                            alignItems={'center'}
                            >
                            <LuTv/>
                            <p style={{ marginLeft: '6px' }}>
                                Furniture Status: {property.furnished_status}
                            </p>
                        </Flex>

                        <Flex
                            alignItems={'center'}
                            >
                            <LuTable/>
                            <p style={{ marginLeft: '6px' }}>
                                Kitchen Type: {property.kitchen_type}
                            </p>
                        </Flex>

                        <Flex
                            alignItems={'center'}
                            >
                            <LuEarth/>
                            <p style={{ marginLeft: '6px' }}>
                                Flooring Type: {property.flooring_type}
                            </p>
                        </Flex>
                    </Flex>
                </div>
                <div>
                    <Flex
                        flexDirection={'column'}
                        >
                        <Flex
                            alignItems={'center'}
                            >
                            <LuHouse/>
                            <p style={{ marginLeft: '6px' }}>
                                Property Type: {property.property_type}
                            </p>
                        </Flex>
                        <Flex
                            alignItems={'center'}
                            >
                            <LuBuilding/>
                            <p style={{ marginLeft: '6px' }}>
                                View: {property.view}
                            </p>
                        </Flex>
                        <Flex
                            alignItems={'center'}
                            >
                            <LuLocate/>
                            <p style={{ marginLeft: '6px' }}>
                                Location: {property.location.city}
                            </p>
                        </Flex>
                    </Flex>
                </div>
            </div>
        </div>
    )
}

export default ListingFeatures