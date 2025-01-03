import { Text } from '@chakra-ui/react'
import CliffHouse from './images/CliffHOuse.jpg'
import GradientSpan from './GradientSpan'
import NavClick from './NavClick'
import './css/PropertySectionInfo.css'

function PropertyInfo() {

    return (
        <section
            style={{
                display:'flex',
                justifyContent: 'flex-end'
            }}
            >
            <div
                className="info-page"
                >
                <div
                    className='info-box'
                    >
                    <GradientSpan/>
                    <h1>Sandton City</h1>
                    <Text
                        className='info'
                        >
                        Nestled in the heart of Cape Town’s vibrant skyline, Skyline
                        Residences redefines modern urban living with unmatched
                        elegance and convenience. More than just a home, Skyline
                        Residences offers an elevated lifestyle of luxury and
                        sophistication, perfect for those who desire a truly
                        exceptional living experience. This premier development
                        attracts discerning investors and residents who demand
                        the finest in contemporary living.
                    </Text>
                    <div
                        style={{ marginTop: '60px' }}
                        >
                        <NavClick
                            text='Learn more'
                            color={true}
                            />
                    </div>
                </div>
                <div>
                    <img
                        className='info-img'
                        src={CliffHouse}
                        alt='Listing agents'
                        />
                </div>
            </div>
        </section>
    )
}

export default PropertyInfo